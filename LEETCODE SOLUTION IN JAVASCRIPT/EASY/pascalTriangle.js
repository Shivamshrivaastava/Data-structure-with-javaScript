var generate = function (numRows) {
  if (numRows === 0) return [];
  var result = [[1]];
  for (i = 1; i < numRows; i++) {
    var preRow = result[i - 1];
    var newRow = [1];
    for (j = 1; j < i; j++) {
      numRow[j] = preRow[j - 1] + preRow[j];
    }
    newRow.push(1);
    result.push(newRow);
  }
  return result;
};
