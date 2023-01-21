
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var resultArrey = [];
  if (matrix == null) {
    return [];
  }
  var counter = 0;
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (y % 2 == 0) {
        resultArrey[counter] = matrix[y][x];   
      } else {
        resultArrey[counter] = matrix[y][matrix[y].length - 1 - x];
      } 
      counter++;
    }
  }
  return resultArrey;
}