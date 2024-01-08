function exist(board, word) {
    var canMake = false;
    var adjacent = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0])
                recur([i, j], 0);
            if (canMake)
                return canMake;
        }
    }
    return canMake;
    function recur(currTile, ptr) {
        var _a;
        if (ptr == word.length - 1 || canMake)
            canMake = true; // Word Found
        else {
            var x = currTile[0], y = currTile[1];
            board[x][y] = ""; // Burn
            for (var _i = 0, adjacent_1 = adjacent; _i < adjacent_1.length; _i++) {
                var adj = adjacent_1[_i];
                if (((_a = board[x + adj[0]]) === null || _a === void 0 ? void 0 : _a[y + adj[1]]) === word[ptr + 1]) {
                    recur([x + adj[0], y + adj[1]], ptr + 1);
                }
            }
            board[x][y] = word.charAt(ptr); // Regrow
        }
    }
}
var board = [
    ["B", "D", "T", "A"],
    ["A", "T", "C", "S"],
    ["A", "D", "E", "E"],
    ["A", "D", "E", "E"],
];
var word = "TDBATC";
console.log(exist(board, word));
