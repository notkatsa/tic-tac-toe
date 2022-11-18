const Player = (sign, isPlaying) => {
    const getSign = () => sign;
    const getPlaying = () => isPlaying;
    return {getPlaying, getSign}
}

const createDiv = (sign, position) => {
    const div = document.createElement('div');
    div.innerHTML = sign;
    div.addEventListener('click', () => boardClick(sign, position));
    div.dataset.index = position;
    return div;
}

function boardClick(sign, position) {
    console.log("there was a click at " + position + "with " + sign);
}

const renderBoard = (board) => {
    const container = document.getElementById("grid-container");
    for (let i = 0; i < 9; i++) {
        const div = createDiv(board[i], i);
        container.appendChild(div);
    }
}

board = Array(9);
for (let i = 0; i<9; i++) {
    board[i] = 'x';
}
renderBoard(board);



