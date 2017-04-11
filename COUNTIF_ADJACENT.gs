/*
 * checks two conditions in separate columns and adds one to counter if both are true
 */
function COUNTIF_ADJACENT(values, column1Condition, column2Condition) {

    var total = 0;
    for (var i = 0; i < values.length; i++) {
        if (values[i][0] == column1Condition && values[i][1] == column2Condition) {
            total++;
        }
    }
    return total;

}
