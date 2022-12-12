const Player = (sign) => {
    var currentSign = sign;
    const getSign = () => currentSign;
    const setSign = (sign) => {
        currentSign = sign;
    }
    return {getSign, setSign};
}

const createDiv = (sign, position) => {
    const div = document.createElement('div');
    div.innerHTML = sign;
    div.dataset.index = position;
    return div;
}

const winnerPopup = (sign) => {
    const popup = document.createElement('div');
    popup.className = "popup";
    popup.innerHTML = "The winner of the game is... " + sign;
    const xButton = document.createElement("button");
    xButton.id = "close";
    xButton.innerHTML = "&times";
    xButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
    popup.appendChild(xButton);
    document.body.appendChild(popup);
}
const updateBoard = (board, position, p) => {
    const div = document.querySelector(`[data-index="${position}"]`);
    if (board[position] == ''){
        div.innerHTML = p.getSign();   
        board[position]=p.getSign();
        p.setSign(p.getSign() == 'x'? 'o': 'x');
    };

    let winningSign = checkGameEnd(board);
    if (winningSign != '') {
        winnerPopup(winningSign);
    }
}
const createBoard = (board, p) => {
    const container = document.getElementById("grid-container");
    for (let i = 0; i < 9; i++) {
        const div = createDiv(board[i], i);
        div.addEventListener('click', () => updateBoard(board, i, p));
        container.appendChild(div);
    }
}

const checkGameEnd = (board) => {
    // rows
    if (board[0] == board[1] && board[0] == board[2] && board[0] != '') return board[0];
    else if (board[3] == board[4] && board[3] == board[5] && board[3] != '') return board[3];
    else if (board[6] == board[7] && board[6] == board[8] && board[6] != '') return board[6];
    // columns
    else if (board[0] == board[3] && board[0] == board[6] && board[0] != '') return board[0];
    else if (board[1] == board[4] && board[1] == board[7] && board[1] != '') return board[1];
    else if (board[2] == board[5] && board[2] == board[8] && board[2] != '') return board[2];
    // diagonal
    else if (board[0] == board[4] && board[0] == board[8] && board[0] != '') return board[0];
    else if (board[2] == board[4] && board[2] == board[6] && board[2] != '') return board[2];
    return '';
}

board = Array(9);
for (let i = 0; i<9; i++) {
    board[i] = '';
}
let p1 = Player('x');
createBoard(board, p1);


