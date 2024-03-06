function counterCount(cell) {
    /* Return the sum of all school's TOTAL ASSIGNED (given the cell) number of delegates, 
    for the Total number of delegates attending the conference */

    // Sets the spreadsheet
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = spreadsheet.getSheets();

    var total_assigned = 0;

    // Iterates through each sheet (.forEach)
    sheets.forEach(function(sheet) {
    var cellValue = sheet.getRange(cell).getValue();
    if (typeof(cellValue) == "number") {
        total_assigned += cellValue;
        }
    }
    );
    return total_assigned;
}