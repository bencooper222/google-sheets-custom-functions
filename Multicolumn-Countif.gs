/*
 * Checks two conditions in separate columns and adds one to counter if both are true
 * Checks first column and column `offset` rows away from it 
 * For example, the adjacent column is `offset = 1`
 * Google Apps Script won't let me set offset's default value to 1
 */
function COUNTIF_ADJACENT(values, column1Condition, column2Condition, offset) {

    var total = 0;
    for (var i = 0; i < values.length; i++) {
        if (values[i][0] == column1Condition && values[i][offset] == column2Condition) {
            total++;
        }
    }
    return total;

}