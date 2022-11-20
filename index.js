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

const updateBoard = (board, position, p) => {
    const div = document.querySelector(`[data-index="${position}"]`);
    if (board[position] == ''){
        div.innerHTML = p.getSign();   
        board[position]=p.getSign();
        p.setSign(p.getSign() == 'x'? 'o': 'x');
    };
}
const createBoard = (board, p, p2) => {
    const container = document.getElementById("grid-container");
    for (let i = 0; i < 9; i++) {
        const div = createDiv(board[i], i);
        div.addEventListener('click', () => updateBoard(board, i, p));
        container.appendChild(div);
    }
}

board = Array(9);
for (let i = 0; i<9; i++) {
    board[i] = '';
}
let p1 = Player('x');
createBoard(board, p1);


