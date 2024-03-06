function onOpen(){
    SpreadsheetApp.getUi()
    .createMenu("UTMUN Discrepancy Tools")
    //.addSeparator()
    .addItem("Total Assigned", "item1")
    .addItem("Delegations Committee Counter", "item2")
    .addItem("Matrix Numbers", "item3")
    .addItem("Find Commitee # Mismatch", "item4")
    .addItem("Invalid Dels", "item5")
    .addToUi()
}

function item1 (){
    SpreadsheetApp.getUi() 
    .alert("Total Assigned : " + String(counterCount("J1")));

}

function item2 (){
    var print_committee_allocation = ''
    var committeeObj = sheetCommitteeCounter()
    for (committee in committeeObj){
        print_committee_allocation += committee + " : " + committeeObj[committee] + "\n"
    }
    SpreadsheetApp.getUi()
    .alert(print_committee_allocation);
}

function item3(){
    var print_matrix = ''
    var matrixObj = pullFromMatrix()
    for (committee in matrixObj){
        print_matrix += committee + " : " + matrixObj[committee] + "\n"
    }
    SpreadsheetApp.getUi()
    .alert(print_matrix);
}

function item4(){
    var print_discrepancies = 'Committee :  Matrix, Delegations \n'
    var matrixObj = pullFromMatrix()
    var committeeObj = sheetCommitteeCounter()

    // Assumes committees & order are the same in matrixObj and committeeObj (which it should be)
    for (committee in matrixObj){
        print_matrix = matrixObj[committee]
        print_delegations = committeeObj[committee]
        if (print_matrix != print_delegations){
            print_discrepancies += committee + ' : ' + print_matrix + ', ' + print_delegations + ' \n '
        }
    }
    SpreadsheetApp.getUi()
    .alert(print_discrepancies);
}

function item5(){
    var invalidDel_print = 'Invalid Delegates Found in... \n '
    var invalidDels = validDelAssign()
    for (committee in invalidDels){
        invalidDel_print += committee + " : " + invalidDels[committee] + "\n"
    }
    SpreadsheetApp.getUi()
    .alert(invalidDel_print);
}
