
function getCommitteeSheet(nameCommittee){
  /* Returns the committeeSheet in the Committee Matrix
      using nameCommittee == case [Register Committee]
  */
    switch (nameCommittee) {

    // GA
    case "United Nations Counter-Terrorism Centre (UNCCT)":
        return "UNCCT";
    case "International Organization for Migration (IOM)":
        return "IOM";
    case "International Criminal Police Organization (INTERPOL)":
        return "INTERPOL";
    case "United Nations Office for Outer Space Affairs (UNOOSA)":
        return "UNOOSA";
    case "Sovereignty, Preservation, and Empowerment for Indigenous Representation (SPEAR)":
        return "SPEAR";
    
    // ECOSOC
    
    case "Commission on Science and Technology for Development (CSTD)":
        return "CSTD";
    case "Commission for Social Development (CSOCD)":
        return "CSocD";
    case "Economic and Social Commission for Asia and the Pacific (ESCAP)":
        return "ESCAP";
    case "UN Nutrition":
        return "UN NUTRITION";
    case "Head Office of Territorial Discovery and Official Governance (HOTDOG)":
        return "HOTDOG";
    
    // Specialized
    
    case "Creating the Coffee Craze (CCC)":
        return "Coffee Craze JSC";
    case "African Union":
        return "African Union";
    case "British House of Commons: Brexit":
        return "British House of Commons";
    case "Toronto City Council":
        return "Toronto City Council";
    case "European Union":
        return "European Union";
    
    // Crisis
    
    case "JCC Silk Road":
        return "Silk Road JCC";
    case "JCC Russo-Japanese War":
        return "Russo-Japanese War JCC";
    case "Court of Henry VIII":
        return "Court of Henry VIII";
    case 1812:
        // 1812 must be converted to string
        return "1812";
    case "Ad Hoc":
        return "Ad Hoc";
    
    default:
        return "Invalid Committee";
  }
}

function extractName(delPosition){
  /* Pull the character name, make sure when doing "name, position" use a comma to differentiate

    >>> extractName(Aleksey Kuropatkin, Minister of War)
    >>> Aleksey Kuropatkin

    /* russoJCCCases
    console.log(extractName('Aleksey Kuropatkin, Minister of War'))
    console.log(extractName('Sergei Witte, Minister of Finance'))
    console.log(extractName('(Grand Duke) Alexei Alexandrovich, Commander-in-Chief (Navy)'))
    console.log(extractName("Maresuke Nogi, General"))

    console.log(getCommitteeSheet('1812'))
    console.log(getCommitteeSheet('Commission on Science and Technology for Development (CSTD)'))
  */
    commaCase = 0
    for (let i = 0; i < delPosition.length; i++) {
        if (delPosition[i] == ","){
            commaCase = i
        return(delPosition.slice(0, commaCase))
    }
  }
}

function SHEETNAMES() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    var names = [];
    sheets.forEach(function(sheet) {
        names.push(sheet.getName());
    });
    return names;
}

// https://stackoverflow.com/questions/6882104/faster-way-to-find-the-first-empty-row-in-a-google-sheet-column
function getFirstEmptyRowByColumnArray(theRange) {
    /* Returns the first non-empty row, via the given First Column */
    var spr = SpreadsheetApp.getActiveSpreadsheet();
    var column = spr.getRange(theRange);
    var values = column.getValues(); // get all data in one call
    var ct = 0;
    while ( values[ct] && values[ct][0] != "" ) {
        ct++;
    }
    return (ct+1);
}

