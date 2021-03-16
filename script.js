// Sudoku Board for puzzle 
var board = [];
// locate  row of table and set up array to store data
$('#table').find('tr').each(function () {
  var arr = [];
  // store each input from each table row cell and append to array
  $(this).find('input').each(function () {
    arr.push($(this).val());
  });
  // store inputted array in grid var
  board.push(arr);
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
function solution() {
  i = 0
  board.flat().forEach(num => document.querySelectorAll('.cell')[i++].value = num)
  // Disable user from changing inputs on solution page
  $('input').prop('disabled', true)
}


// Reset and clears Sudoku Board when reset button is clicked
function reset() {
  document.getElementById('cell-01').value = "";
  document.getElementById('cell-02').value = "";
  document.getElementById('cell-05').value = "";
  document.getElementById('cell-06').value = "";
  document.getElementById('cell-07').value = "";

  // Row 2
  document.getElementById('cell-10').value = "";
  document.getElementById('cell-11').value = "";
  document.getElementById('cell-13').value = "";
  document.getElementById('cell-14').value = "";
  document.getElementById('cell-15').value = "";
  document.getElementById('cell-16').value = "";
  document.getElementById('cell-18').value = "";

  // Row 3 
  document.getElementById('cell-21').value = "";
  document.getElementById('cell-24').value = "";
  document.getElementById('cell-25').value = "";
  document.getElementById('cell-28').value = "";

  // Row 4
  document.getElementById('cell-31').value = "";
  document.getElementById('cell-32').value = "";
  document.getElementById('cell-33').value = "";
  document.getElementById('cell-34').value = "";
  document.getElementById('cell-35').value = "";
  document.getElementById('cell-36').value = "";
  document.getElementById('cell-38').value = "";

  // Row 5
  document.getElementById('cell-40').value = "";
  document.getElementById('cell-42').value = "";
  document.getElementById('cell-43').value = "";
  document.getElementById('cell-44').value = "";
  document.getElementById('cell-45').value = "";
  document.getElementById('cell-46').value = "";
  document.getElementById('cell-48').value = "";

  // Row 6
  document.getElementById('cell-50').value = "";
  document.getElementById('cell-52').value = "";
  document.getElementById('cell-53').value = "";
  document.getElementById('cell-54').value = "";
  document.getElementById('cell-56').value = "";
  document.getElementById('cell-57').value = "";

  // Row 7
  document.getElementById('cell-60').value = "";
  document.getElementById('cell-63').value = "";
  document.getElementById('cell-64').value = "";
  document.getElementById('cell-67').value = "";

  // Row 8
  document.getElementById('cell-70').value = "";
  document.getElementById('cell-72').value = "";
  document.getElementById('cell-73').value = "";
  document.getElementById('cell-74').value = "";
  document.getElementById('cell-75').value = "";
  document.getElementById('cell-77').value = "";
  document.getElementById('cell-78').value = "";

  // Row 9
  document.getElementById('cell-81').value = "";
  document.getElementById('cell-82').value = "";
  document.getElementById('cell-83').value = "";
  document.getElementById('cell-86').value = "";
  document.getElementById('cell-87').value = "";

  // Allow users to input new input
  $('input').prop('disabled', false)
}

// Function for Check Button 
function check() {
  // takes user's input and generates array
  var grid = [];
  // locate  row of table and set up array to store data
  $('#table').find('tr').each(function () {
    var array = [];
    // store each input from each table row cell and append to array
    $(this).find('input').each(function () {
      array.push($(this).val());
    });
    // store inputted array in grid var
    grid.push(array);
  });


  // Checks to see if user's input is a valid/invalid solution and sends alert message
  function validate() {
    if (board.sort().join(',') === grid.sort().join(',')) {
      reset();
      return "CORRECT";
    } else
      reset();
    return "INCORRECT TRY AGAIN";
  }
  //send alert message displaying if the user's input is correct or incorrect
  var message = validate();
  alert(message);

}
