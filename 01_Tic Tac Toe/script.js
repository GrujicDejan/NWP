let currentPlayer = "X"
let activeGame = true
gameState = ["", "", "", "", "", "", "", "", ""]

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const statusDisplay = document.querySelector('.game-status')

function handleRestartGame() {
    activeGame = true
    currentPlayer = "X"
    gameState = ["", "", "", "", "", "", "", "", ""]
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "")
    statusDisplay.innerHTML = currentPlayer + " on move"
    statusDisplay.setAttribute('style', 'color:green')
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"))

    if (gameState[clickedCellIndex] != "" || !activeGame) {
        return
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer

    if (currentPlayer === "X") {
        clickedCell.setAttribute('style', 'color:blue')
    } else {
        clickedCell.setAttribute('style', 'color:red')
    }
    
    handleResult()

    
    if (activeGame) {
        currentPlayer = (currentPlayer === "X")? "O" : "X"
        statusDisplay.innerHTML = currentPlayer + " on move!"
    }
       
}

function handleResult() {
    let roundWon = false
    let gameStateIndexWin = -1
    for (let i = 0; i < 8; i++) {
        const winCondition = win[i]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]

        if (a === '' || b === '' || c === '') {
            continue
        }

        if (a === b && b === c) {
            gameStateIndexWin = i;
            roundWon = true
            break
        }
    }
    if (roundWon) {
        if (currentPlayer === "X") {
            statusDisplay.setAttribute('style', 'color:blue')
        } else {
            statusDisplay.setAttribute('style', 'color:red')
        }

        statusDisplay.innerHTML = currentPlayer + " has won!"
        activeGame = false;
        return
    }

    let roundDraw = !gameState.includes("")
    if (roundDraw) {
        activeGame = false
        statusDisplay.innerHTML = "Draw..."
        return
    }
}

document.querySelectorAll(".cell").forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector(".restart").addEventListener('click', handleRestartGame)