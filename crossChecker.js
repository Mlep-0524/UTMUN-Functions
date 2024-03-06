function pullFromMatrix() {
    // 8 - 12, 14-18, 20-24
    const matrixPositions = ['D2','D3','D4','D5','D6', 'D8','D9','D10','D11','D12','D14','D15','D16','D17','D18','D20','D21','D22','D23','D24'];

    // Open the spreadsheet by ID
    var spreadsheet = SpreadsheetApp.openById("14KN1C8c87PbTY1ZPNPjnZOP2532X75hT0nKtHLMsrD4");

    // Set the active sheet to "Committee Numbers"
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName("Committee Numbers"));

    // Get the active sheet
    var sheet = spreadsheet.getActiveSheet();

    // Create an object to store committee numbers
    var matrixObj = {
        "UNCCT" : 0,
        "IOM" : 0,
        "INTERPOL" : 0,
        "UNOOSA" : 0,
        "SPEAR" : 0,
        "CSTD": 0,
        "CSOCD" : 0,
        "ESCAP" : 0,
        "UN Nutrition" : 0,
        "HOTDOG" : 0,
        "Creating the Coffee Craze" : 0,
        "British HOC" : 0,
        "EU" : 0,
        "AU" : 0,
        "TCC" : 0,
        "JCC Silk Road" : 0,
        "JCC Russo-Japanese War" : 0,
        "Court of Henry VIII" : 0, 
        " 1812" : 0,
        "Ad Hoc" : 0
    };

    // Iterate through matrixPositions
    for (var i = 0; i < matrixPositions.length; i++) {
        // Get the value in the current cell
        var committeeFilledCell = sheet.getRange(matrixPositions[i]).getValue();

        // Assign the value to the corresponding property in matrixObj
        matrixObj[Object.keys(matrixObj)[i]] = committeeFilledCell;
    }

    // Return the populated matrixObj
    return matrixObj;
}