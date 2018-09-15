module.exports = function solveSudoku(matrix) {
  sudokuFunction(matrix);
  return matrix;
}

function findZero(matrix, arr) {
  for(let i = arr[0]; i < 9; i++) {
    for(let j = arr[1]; j < 9; j++) {
      if (matrix[i][j] === 0){
        arr[0] = i;
        arr[1] = j;
        return 1;
      }
    }
  }
  return 0;
}

function rowFunction(matrix, row, num) {
  for(let i = 0; i < 9; i++) {
    if(matrix[row][i] === num) { return 1; }
  }
  return 0;
}

function colFunction(matrix, col, num) {
  for(let i = 0; i < 9; i++) {
    if(matrix[i][col] === num) { return 1; }
  }
  return 0;
}

function boxFunction(matrix, row, col, num) {
  let arrRow = (Math.floor(row / 3)) * 3, arrCol = (Math.floor(col / 3)) * 3;
  for(let i = arrRow; i < arrRow + 3; i++)
    for(let j = arrCol; j < arrCol + 3; j++) {
      if(matrix[i][j] === num) { return 1; }
    }
  return 0;
}

function sudokuFunction(matrix){
  let arr=[0, 0];
  if (!findZero(matrix, arr)) { return 1; }
  let row = arr[0], col = arr[1];
  for (let i = 1; i <= 9; i++) {
    if (!rowFunction(matrix, row, i) && !colFunction(matrix, col, i) && !boxFunction(matrix, row, col, i)) {
      matrix[row][col] = i;
      if (sudokuFunction(matrix)) { return 1; }
      matrix[row][col] = 0;
    }
  }
  return 0;
}