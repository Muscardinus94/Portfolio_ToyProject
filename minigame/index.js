const X_CLASS='x';
const CIRCLE_CLASS='circle';
const WINNING_COMBINATIONS=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const whoTurn=document.querySelector('#who-turn');
const game=document.querySelector('#game');
const cellElements=document.querySelectorAll('.cell');
const winningMessageText=document.querySelector('[data-winning-message-text]');
const winningMessage=document.querySelector('.winning-message');
const restartButton=document.querySelector('#restartButton');
const startMessage=document.querySelector('#startMessage');
const startButton=document.querySelector('#startButton');
var circleTurn;

beforeStart();

function beforeStart(){
    startMessage.classList.add("show");
    startButton.addEventListener("click",startGame);
    restartButton.addEventListener("click",startGame);
}

function startGame(){
    startMessage.classList.remove("show");
    circleTurn=false;
    whoTurn.innerText=`${circleTurn ? "O" : "X"} Turn`;
    cellElements.forEach(cell=>{
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click",handleClick);
        cell.addEventListener("click",handleClick,{once:true});
    });
    setBoardHoverClass();
    winningMessage.classList.remove("show");
}

function handleClick(e){
    const cell=e.target;
    const currentClass=circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell,currentClass);
    if(checkWin(currentClass))
        endGame(false);
    else if(isDraw())
        endGame(true);
    else{
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw){
    if(draw){
        winningMessageText.innerText='Draw!';
        whoTurn.innerText='Waiting...';
    }
    else{
        winningMessageText.innerText=`${circleTurn ? "O" : "X"} Win!`
    }
    winningMessage.classList.add('show');
}

function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
    });
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination=>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
}

function swapTurns(){
    circleTurn=!circleTurn;
    whoTurn.innerText=`${circleTurn ? "O " : "X "} Turn`;
}

function setBoardHoverClass(){
    if(game.classList.contains(X_CLASS))
        game.classList.remove(X_CLASS);
    else
        game.classList.remove(CIRCLE_CLASS);
    if(circleTurn)
        game.classList.add(CIRCLE_CLASS);
    else
        game.classList.add(X_CLASS);
}