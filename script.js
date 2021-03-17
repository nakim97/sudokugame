// Function for Solver Button 
function solution() {
  // takes user's input and generates array
  var board = [];
  // locate  row of table and set up array to store data
  $('#table').find('tr').each(function () {
    var array = [];
    // store each input from each table row cell and append to array
    $(this).find('input').each(function () {
      array.push($(this).val());
    });
    // store inputted array in grid var
    board.push(array);

  });


  // Check each row to see if there are duplicates/valid input
  function rows(board, row, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == num) {
        return false;
      }
    }
    return true;
  }

  // Check each column to see if there are duplicates/valid input
  function columns(board, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[i][col] == num) {
        return false;
      }
    }
    return true;
  }

  // Check each 3x3 box grid to see if there are duplicates/valid input 
  function box(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      const x = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const y = 3 * Math.floor(col / 3) + i % 3;
      if (board[x][y] == num) {
        return false;
      }
    }
    return true;
  }

  // Check if rules apply and if the board/input is valid (check no duplicate and all space filled for row/column/box)
  function verify(board, row, col, num) {
    if (rows(board, row, num) &&
      columns(board, col, num) &&
      box(board, row, col, num)) {
      return true;
    }
    return false;
  };


  // Function to solve sudoku board 
  function solve(sudoku) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j] == '') {
          // iterate and loop through board grid
          for (let num = 1; num <= 9; num++) {
            if (verify(sudoku, i, j, num)) {
              sudoku[i][j] = `${num}`;
              // if valid, return true and fill board
              if (solve(sudoku)) {
                return true;
                // else continue looping 
              } else {
                sudoku[i][j] = '';
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  solve(board);


  // Append Solution to Grid and Display solution
  i = 0
  board.flat().forEach(num => document.querySelectorAll('.cell')[i++].value = num)
  // Disable user from changing inputs on solution page
  $('input').prop('disabled', true)
}

// Reset board 
function reset() {
  $('.cell').val("");
}
