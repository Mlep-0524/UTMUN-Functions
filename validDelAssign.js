function validDelAssign() {
/* Returns the list of schools where an "invalid delegate" is found, and the row position

    An Invalid Delegate : Has a missing name and/or email and/or committee and/or position
*/

    var invalidDels = {};

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = spreadsheet.getSheets();

    for (var j = 1; j < sheets.length; j++) {

        // A:name, B:email, C:committee, D:position
        var columnRanges = ["A7:A", "B7:B", "C7:C", "D7:D"];
        var eachSheet = [0, 0, 0, 0];

        for (var i = 0; i < 4; i++) {
            var column = sheets[j].getRange(columnRanges[i]);
            var values = column.getValues();
            var ct = 0;
        
        // Exception to Invalid Del: if the background color is a "light red", indicates withdrawn, not counted
        while (values[ct] && (values[ct][0] !== "" || column.getCell(ct + 1, 1).getBackground() == "#f4cccc")) {
            ct++;
        }

        if (ct === 0) {
            // Logger.log(0);
            eachSheet[i] = 0;
        } else {
            // Logger.log(ct + 6);
            eachSheet[i] = ct + 1 + 5;
            }
        }

        if (eachSheet[0] !== eachSheet[1] || eachSheet[1] !== eachSheet[2] || eachSheet[2] !== eachSheet[3]) {
            invalidDels[sheets[j].getName()] = eachSheet.slice();
        }
    }

  return invalidDels;
}
