function queens(n) {
    //generate 2d matrix
    const board = new Array(n);
    for(let i = 0; i < n; i++) {
        board[i] = new Array(n);
    }

}

//DCP Sol
// Board is just an array where each elem index is row and value is column
// def n_queens(n, board=[]):
//     if n == len(board):
//         return 1

//     count = 0
//     for col in range(n):
//         board.append(col)
//         if is_valid(board):
//             count += n_queens(n, board)
//         board.pop()
//     return count

// def is_valid(board):
//     current_queen_row, current_queen_col = len(board) - 1, board[-1]
//     # Iterate over all already-placed queens and check if any of them can attack
//     # each other.
//     for row, col in enumerate(board[:-1]):
//         diff = abs(current_queen_col - col)
//         if diff == 0 or diff == current_queen_row - row:
//             return False
//     return True