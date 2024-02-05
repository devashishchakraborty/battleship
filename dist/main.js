/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.timesHit = 0;
    }

    hit() {
        this.timesHit += 1;
    }

    isSunk() {
        return this.length === this.timesHit;
    }

    getName() {
        return this.name;
    }
}


class Gameboard {
    constructor() {
        this.board = [
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
        ]
    }


    resetBoard(){
        let newBoard = [];
        for(let i = 0; i < 10; i++){
            let row = [];
            for(let j = 10; j < 10; j++){
                row.push("");
            }
            newBoard.push(row);
        }
        this.board = newBoard;
    }

    
    getBoard() {
        return this.board;
    }


    isEmpty() {
        return this.board.every((row) => {
            return row.every((cell) => typeof cell === "string")
        })
    }

    //  headCoords is the coordinates of the head of the ship.
    //  orientation is either horizontal or vertical.
    placeShip(ship, coordinates) {
        coordinates.forEach(([row, col]) => {
            this.board[row][col] = ship;
        })
    }

    receiveAttack([x, y]) {
        let shipObj = this.board[x][y];
        if (typeof shipObj === "object") shipObj.hit();
    }

    randomlyPlaceShips() {
        // Wasted a lot of time to think on how to make it a purely random placement.
        // Therefore, assigning a section in the grid for each ship.
        // Since I don't want to deal with overlaps ;-;
        // So it is somewhat random atleast in its own section.
        const ships = [
            [new Ship("carrier", 5), [[0, 0], [4, 4]]],
            [new Ship("battleship", 4), [[0, 6], [4, 9]]],
            [new Ship("destroyer", 3), [[6, 0], [9, 2]]],
            [new Ship("submarine", 3), [[6, 4], [9, 6]]],
            [new Ship("patrolBoat", 2), [[6, 8], [9, 9]]]
        ]

        ships.forEach(([ship, [sectionStart, sectionEnd]]) => {
            const orientation = Math.floor(Math.random() * 2);
            const [startX, startY] = sectionStart;
            const [endX, endY] = sectionEnd;
            let shipCoords = [];
            if (orientation === 0) {  // Horizontal
                let shipHeadRow = Math.floor(Math.random() * (endX - startX + 1)) + startX;
                let shipHeadCol = Math.floor(Math.random() * (endY - startY + 1 - ship.length)) + startY;
                for (let i = 0; i < ship.length; i++) {
                    shipCoords.push([shipHeadRow, shipHeadCol + i])
                }
            } else if (orientation === 1) {  // Vertical
                let shipHeadRow = Math.floor(Math.random() * (endX - startX + 1 - ship.length)) + startX;
                let shipHeadCol = Math.floor(Math.random() * (endY - startY + 1)) + startY;
                for (let i = 0; i < ship.length; i++) {
                    shipCoords.push([shipHeadRow + i, shipHeadCol])
                }
            }
            shipCoords.forEach(([x, y]) => {
                this.board[x][y] = ship;
            });
        });
    }
}


class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.notShooted = this.totalCoords();
    }


    totalCoords() {
        let temp = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                temp.push([i, j]);
            }
        }
        return temp;
    }


    // For Computer to pick a random coordinate to shoot
    chooseRandomCoordinate() {
        const index = Math.floor(Math.random() * this.notShooted.length);
        const randomCoordinate = this.notShooted[index];
        this.notShooted.splice(index, 1);
        return randomCoordinate;
    }
}


class DOM {
    constructor() {
        this.shipPlacingGrid = this.createBoardGrid(document.querySelector(".shipPlacingArea .boardGrid"));
        this.currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");

        // Visual grids on screen
        this.playerGrid = this.createBoardGrid(document.querySelector(".container .playerGrid"));
        this.opponentGrid = this.createBoardGrid(document.querySelector(".container .opponentGrid"));

        // Gridboard objects
        this.playerGameboard = new Gameboard();
        this.opponentGameboard = new Gameboard(); // computer Board

        // Players
        this.player = new Player("Player");
        this.opponent = new Player("Opponent");

        this.winMsg = document.querySelector(".winningMessage");

        // Score Displays
        this.playerScore = document.querySelector(".container .playerScore");
        this.opponentScore = document.querySelector(".container .opponentScore");

        // Ships which are to be placed in the board itself.
        this.shipstoPlace = [
            new Ship("carrier", 5),
            new Ship("battleship", 4),
            new Ship("destroyer", 3),
            new Ship("submarine", 3),
            new Ship("patrolBoat", 2)
        ]
    }


    // Creates a 10x10 grid
    createBoardGrid(shipPlacingGrid) {
        let boardGrid = shipPlacingGrid;
        boardGrid.textContent = "";
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const gridItem = document.createElement("div");
                gridItem.setAttribute("row", `${i}`);
                gridItem.setAttribute("col", `${j}`);
                boardGrid.appendChild(gridItem);
            }
        }
        return boardGrid;
    }


    shipPlacement() {
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");

        // Event Listeners for each cell to check hover and click events
        // and change Background colors accordingly.
        boardGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", (e) => this.shipPlacingHandler(e, boardGridCells));
            gridCell.addEventListener("mouseout", (e) => this.shipPlacingHandler(e, boardGridCells));
            gridCell.addEventListener("click", (e) => this.shipPlacingHandler(e, boardGridCells));
        });

        this.changeCurrentShipIconOrientation();
    }


    shipPlacingHandler(event, boardGridCells) {
        const orientation = this.currentShipIcon.getAttribute("orientation");
        const currentGridCell = event.target;
        currentGridCell.parentElement.style.cursor = "default";
        const row = currentGridCell.getAttribute("row");
        const col = currentGridCell.getAttribute("col");
        const gapCoords = [[-1, -1], [-1, 1], [1, -1], [1, 1], [0, -1], [-1, 0], [0, 1], [1, 0]];

        let nextCells = [];
        let shipGapCells = [];
        let coordinates = [];
        let cellAvailability = true;
        let currentShip = this.shipstoPlace[0];
        let length = currentShip.length;

        // Creating an array of cells to be modified.
        // Also getting their coordinates in other array.
        for (let i = 0; i < length; i++) {
            let currentCell;
            if (orientation === "horizontal") {
                currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${row}"][col="${+col + i}"]`);

                gapCoords.forEach((coord) => {
                    const gapCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + coord[0]}"][col="${+col + i + coord[1]}"]`);
                    shipGapCells.push(gapCell);
                })

            } else if (orientation === "vertical") {
                currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i}"][col="${col}"]`);

                gapCoords.forEach((coord) => {
                    const gapCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i + coord[0]}"][col="${+col + coord[1]}"]`);
                    shipGapCells.push(gapCell);
                })
            }
            coordinates.push([row, +col + i]);
            nextCells.push(currentCell);
        }

        nextCells.forEach((cell) => {
            if ((!cell) || cell.getAttribute("type") === "ship" || cell.getAttribute("type") === "gap") {
                cellAvailability = false;
                currentGridCell.parentElement.style.cursor = "not-allowed";
            }
        })

        if (cellAvailability) {
            nextCells.forEach((cell) => {
                cell.setAttribute("event", event.type);
            })

            if (event.type === "click") {
                nextCells.forEach((cell) => cell.setAttribute("type", "ship"));
                // console.log(shipGapCells);

                shipGapCells.forEach((cell) => {
                    if (cell && cell.getAttribute("type") !== "ship") {
                        cell.setAttribute("type", "gap");
                    }
                })

                // Placing Ship Object in the actual 10x10 Gameboard array.
                this.playerGameboard.placeShip(currentShip, coordinates);

                // Removing the first ship after being placed.
                this.shipstoPlace.shift();


                if (this.shipstoPlace[0]) {
                    // changes the ship icon according to the length of the ship to be placed.
                    this.updateCurrentShipIcon(this.shipstoPlace[0].length);
                } else {
                    // Creates a clone of each cell and replaces with original one
                    // to remove all the event Listeners from it
                    // when no ships are left to be placed. 
                    // (Thanks to ChatGPT for helping :p)
                    boardGridCells.forEach((cell) => {
                        cell.style.cursor = "default";
                        let clone = cell.cloneNode(true);
                        cell.parentNode.replaceChild(clone, cell);
                    })
                    this.activateStartGameButton();
                }
            }
        }
    }


    changeCurrentShipIconOrientation() {
        this.currentShipIcon.addEventListener("click", () => {
            if (this.currentShipIcon.getAttribute("orientation") == "horizontal") {
                this.currentShipIcon.style.flexDirection = "column";
                this.currentShipIcon.setAttribute("orientation", "vertical");
            } else {
                this.currentShipIcon.style.flexDirection = "row";
                this.currentShipIcon.setAttribute("orientation", "horizontal");
            }
        })
    }


    updateCurrentShipIcon(length) {
        this.currentShipIcon.textContent = "";
        for (let i = 0; i < length; i++) {
            const div = document.createElement("div");
            this.currentShipIcon.appendChild(div);
        }
    }


    activateStartGameButton() {
        const shipPlacingArea = document.querySelector(".shipPlacingArea");
        const startGameBtn = document.querySelector(".startGameBtn");
        const mainGameSection = document.querySelector("main .container");
        startGameBtn.removeAttribute("disabled");
        startGameBtn.addEventListener("click", () => {
            shipPlacingArea.style.display = "none";
            mainGameSection.style.display = "flex";
            this.startMainGame();
        }, { once: true });
    }


    populatePlayerGrid() {
        const playerGridCells = this.playerGrid.querySelectorAll("div");
        const board = this.playerGameboard.getBoard();
        playerGridCells.forEach((cell) => {
            let row = cell.getAttribute("row");
            let col = cell.getAttribute("col");
            let currentElement = board[row][col];
            if (typeof currentElement === "object") {
                cell.setAttribute("type", "ship");
                cell.setAttribute("shipname", `${currentElement.getName()}`)
            }
        })
    }


    populateOpponentGrid() {
        this.opponentGameboard.randomlyPlaceShips();

        const opponentGridCells = this.opponentGrid.querySelectorAll("div");
        const board = this.opponentGameboard.getBoard();

        opponentGridCells.forEach((cell) => {
            let row = cell.getAttribute("row");
            let col = cell.getAttribute("col");
            let currentElement = board[row][col];
            if (typeof currentElement === "object") {
                cell.setAttribute("type", "ship");
                cell.setAttribute("shipname", `${currentElement.getName()}`);
            }
        });
    }


    shootOpponentBoard() {
        const opponentGridCells = this.opponentGrid.querySelectorAll("div");
        opponentGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", (e) => this.playerShootingHandler(e));
            gridCell.addEventListener("mouseout", (e) => this.playerShootingHandler(e));
            gridCell.addEventListener("click", (e) => this.playerShootingHandler(e));
        });
    }


    playerShootingHandler(event) {
        if (!event.target.getAttribute("shot")) {
            if (event.type === "click") {
                event.target.setAttribute("shot", "true");
                if (event.target.getAttribute("type") === "ship") {
                    let row = event.target.getAttribute("row");
                    let col = event.target.getAttribute("col");
                    this.updateScore(this.opponentGameboard, this.player, this.playerScore, [row, col]);
                }
                this.shootPlayerBoard();
            }
            else event.target.setAttribute("event", event.type);
        }
    }


    shootPlayerBoard() {
        const playerGridCells = this.playerGrid.querySelectorAll("div");
        const [x, y] = this.opponent.chooseRandomCoordinate();
        const board = this.playerGameboard.getBoard();

        playerGridCells.forEach((cell) => {
            if (cell.getAttribute("row") === `${x}` && cell.getAttribute("col") === `${y}`) {
                cell.setAttribute("shot", "true");
                if (cell.getAttribute("type") === "ship") {
                    this.updateScore(this.playerGameboard, this.opponent, this.opponentScore, [x, y]);
                }
            }
        })
    }


    updateScore(currentGameboard, currentPlayer, scoreBoard, [row, col]){
        let board = currentGameboard.getBoard();

        board[row][col].hit();
        if (board[row][col].isSunk()) {
            // Updating Score on board
            currentPlayer.score += 1;
            scoreBoard.textContent = `${currentPlayer.name}'s Score: ${currentPlayer.score}`
        }
    
        board[row][col] = "";
        // End Game
        if (currentGameboard.isEmpty()) {
            this.winMsg.textContent = `Game Over! ${currentPlayer.name} Win.`;

            const opponentGridCells = this.opponentGrid.querySelectorAll("div");
            opponentGridCells.forEach((cell) => {
                cell.style.cursor = "default";
                let clone = cell.cloneNode(true);
                cell.parentNode.replaceChild(clone, cell);
            })
            this.activateRestartGameButton();
        }
    }


    activateRestartGameButton(){
        const shipPlacingArea = document.querySelector(".shipPlacingArea");
        const mainGameSection = document.querySelector("main .container");
        const restartGameBtn = document.querySelector(".restartGameBtn");
        const startGameBtn = document.querySelector(".startGameBtn");

        restartGameBtn.style.display = 'flex';
        restartGameBtn.addEventListener("click", () => {
            shipPlacingArea.style.display = "flex";
            mainGameSection.style.display = "none";
            restartGameBtn.style.display = "none";
            startGameBtn.disabled = "true";
            this.restart();
            this.shipPlacement();
        });
    }


    restart(){
        this.shipPlacingGrid = this.createBoardGrid(document.querySelector(".shipPlacingArea .boardGrid"));
        this.currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");

        // Visual grids on screen
        this.playerGrid = this.createBoardGrid(document.querySelector(".container .playerGrid"));
        this.opponentGrid = this.createBoardGrid(document.querySelector(".container .opponentGrid"));

        // Gridboard objects
        this.playerGameboard.resetBoard();
        this.opponentGameboard.resetBoard(); // computer Board

        // Players
        this.player = new Player("Player");
        this.opponent = new Player("Opponent");

        this.winMsg.textContent = "";

        // Score Displays
        this.playerScore.textContent = "Player Score: 0";
        this.opponentScore.textContent = "Oppoenent Score: 0";

        // Ships which are to be placed in the board itself.
        this.shipstoPlace = [
            new Ship("carrier", 5),
            new Ship("battleship", 4),
            new Ship("destroyer", 3),
            new Ship("submarine", 3),
            new Ship("patrolBoat", 2)
        ]
    }


    startMainGame() {
        this.populatePlayerGrid();    // To place ships on the Player Grid
        this.populateOpponentGrid();  // To place ships on the Opponent Grid    
        this.shootOpponentBoard();
    }
}

const dom = new DOM();
dom.shipPlacement();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICByZXNldEJvYXJkKCl7XG4gICAgICAgIGxldCBuZXdCb2FyZCA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGogPSAxMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Qm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXdCb2FyZDtcbiAgICB9XG5cbiAgICBcbiAgICBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuXG5cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5ldmVyeSgocm93KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcm93LmV2ZXJ5KChjZWxsKSA9PiB0eXBlb2YgY2VsbCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyAgaGVhZENvb3JkcyBpcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIGhlYWQgb2YgdGhlIHNoaXAuXG4gICAgLy8gIG9yaWVudGF0aW9uIGlzIGVpdGhlciBob3Jpem9udGFsIG9yIHZlcnRpY2FsLlxuICAgIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcykge1xuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICAgICAgbGV0IHNoaXBPYmogPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgICBpZiAodHlwZW9mIHNoaXBPYmogPT09IFwib2JqZWN0XCIpIHNoaXBPYmouaGl0KCk7XG4gICAgfVxuXG4gICAgcmFuZG9tbHlQbGFjZVNoaXBzKCkge1xuICAgICAgICAvLyBXYXN0ZWQgYSBsb3Qgb2YgdGltZSB0byB0aGluayBvbiBob3cgdG8gbWFrZSBpdCBhIHB1cmVseSByYW5kb20gcGxhY2VtZW50LlxuICAgICAgICAvLyBUaGVyZWZvcmUsIGFzc2lnbmluZyBhIHNlY3Rpb24gaW4gdGhlIGdyaWQgZm9yIGVhY2ggc2hpcC5cbiAgICAgICAgLy8gU2luY2UgSSBkb24ndCB3YW50IHRvIGRlYWwgd2l0aCBvdmVybGFwcyA7LTtcbiAgICAgICAgLy8gU28gaXQgaXMgc29tZXdoYXQgcmFuZG9tIGF0bGVhc3QgaW4gaXRzIG93biBzZWN0aW9uLlxuICAgICAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksIFtbMCwgMF0sIFs0LCA0XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KSwgW1swLCA2XSwgWzQsIDldXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksIFtbNiwgMF0sIFs5LCAyXV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLCBbWzYsIDRdLCBbOSwgNl1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcInBhdHJvbEJvYXRcIiwgMiksIFtbNiwgOF0sIFs5LCA5XV1dXG4gICAgICAgIF1cblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChbc2hpcCwgW3NlY3Rpb25TdGFydCwgc2VjdGlvbkVuZF1dKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHNlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIGNvbnN0IFtlbmRYLCBlbmRZXSA9IHNlY3Rpb25FbmQ7XG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkcyA9IFtdO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7ICAvLyBIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFggKyAxKSkgKyBzdGFydFg7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFkgLSBzdGFydFkgKyAxIC0gc2hpcC5sZW5ndGgpKSArIHN0YXJ0WTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtzaGlwSGVhZFJvdywgc2hpcEhlYWRDb2wgKyBpXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAxKSB7ICAvLyBWZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGxldCBzaGlwSGVhZFJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRYIC0gc3RhcnRYICsgMSAtIHNoaXAubGVuZ3RoKSkgKyBzdGFydFg7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFkgLSBzdGFydFkgKyAxKSkgKyBzdGFydFk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbc2hpcEhlYWRSb3cgKyBpLCBzaGlwSGVhZENvbF0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcENvb3Jkcy5mb3JFYWNoKChbeCwgeV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gc2hpcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLm5vdFNob290ZWQgPSB0aGlzLnRvdGFsQ29vcmRzKCk7XG4gICAgfVxuXG5cbiAgICB0b3RhbENvb3JkcygpIHtcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cblxuICAgIC8vIEZvciBDb21wdXRlciB0byBwaWNrIGEgcmFuZG9tIGNvb3JkaW5hdGUgdG8gc2hvb3RcbiAgICBjaG9vc2VSYW5kb21Db29yZGluYXRlKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubm90U2hvb3RlZC5sZW5ndGgpO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5ub3RTaG9vdGVkW2luZGV4XTtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiByYW5kb21Db29yZGluYXRlO1xuICAgIH1cbn1cblxuXG5jbGFzcyBET00ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNoaXBQbGFjaW5nR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWRcIikpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5jdXJyZW50U2hpcEljb25cIik7XG5cbiAgICAgICAgLy8gVmlzdWFsIGdyaWRzIG9uIHNjcmVlblxuICAgICAgICB0aGlzLnBsYXllckdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAucGxheWVyR3JpZFwiKSk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLm9wcG9uZW50R3JpZFwiKSk7XG5cbiAgICAgICAgLy8gR3JpZGJvYXJkIG9iamVjdHNcbiAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7IC8vIGNvbXB1dGVyIEJvYXJkXG5cbiAgICAgICAgLy8gUGxheWVyc1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJQbGF5ZXJcIik7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBuZXcgUGxheWVyKFwiT3Bwb25lbnRcIik7XG5cbiAgICAgICAgdGhpcy53aW5Nc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5pbmdNZXNzYWdlXCIpO1xuXG4gICAgICAgIC8vIFNjb3JlIERpc3BsYXlzXG4gICAgICAgIHRoaXMucGxheWVyU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAucGxheWVyU2NvcmVcIik7XG4gICAgICAgIHRoaXMub3Bwb25lbnRTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5vcHBvbmVudFNjb3JlXCIpO1xuXG4gICAgICAgIC8vIFNoaXBzIHdoaWNoIGFyZSB0byBiZSBwbGFjZWQgaW4gdGhlIGJvYXJkIGl0c2VsZi5cbiAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2UgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksXG4gICAgICAgICAgICBuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksXG4gICAgICAgICAgICBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJwYXRyb2xCb2F0XCIsIDIpXG4gICAgICAgIF1cbiAgICB9XG5cblxuICAgIC8vIENyZWF0ZXMgYSAxMHgxMCBncmlkXG4gICAgY3JlYXRlQm9hcmRHcmlkKHNoaXBQbGFjaW5nR3JpZCkge1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBib2FyZEdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgYCR7an1gKTtcbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZEdyaWQ7XG4gICAgfVxuXG5cbiAgICBzaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBib2FyZEdyaWRDZWxscyA9IHRoaXMuc2hpcFBsYWNpbmdHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzIGZvciBlYWNoIGNlbGwgdG8gY2hlY2sgaG92ZXIgYW5kIGNsaWNrIGV2ZW50c1xuICAgICAgICAvLyBhbmQgY2hhbmdlIEJhY2tncm91bmQgY29sb3JzIGFjY29yZGluZ2x5LlxuICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpO1xuICAgIH1cblxuXG4gICAgc2hpcFBsYWNpbmdIYW5kbGVyKGV2ZW50LCBib2FyZEdyaWRDZWxscykge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50R3JpZENlbGwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBjb25zdCByb3cgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBjb25zdCBnYXBDb29yZHMgPSBbWy0xLCAtMV0sIFstMSwgMV0sIFsxLCAtMV0sIFsxLCAxXSwgWzAsIC0xXSwgWy0xLCAwXSwgWzAsIDFdLCBbMSwgMF1dO1xuXG4gICAgICAgIGxldCBuZXh0Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IHNoaXBHYXBDZWxscyA9IFtdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IGNlbGxBdmFpbGFiaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzdG9QbGFjZVswXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aDtcblxuICAgICAgICAvLyBDcmVhdGluZyBhbiBhcnJheSBvZiBjZWxscyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgLy8gQWxzbyBnZXR0aW5nIHRoZWlyIGNvb3JkaW5hdGVzIGluIG90aGVyIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudENlbGw7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7cm93fVwiXVtjb2w9XCIkeytjb2wgKyBpfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgZ2FwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBpICsgY29vcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5wdXNoKGdhcENlbGwpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgICAgICAgIGdhcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpICsgY29vcmRbMF19XCJdW2NvbD1cIiR7K2NvbCArIGNvb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwR2FwQ2VsbHMucHVzaChnYXBDZWxsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCArY29sICsgaV0pO1xuICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmICgoIWNlbGwpIHx8IGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImdhcFwiKSB7XG4gICAgICAgICAgICAgICAgY2VsbEF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2VsbEF2YWlsYWJpbGl0eSkge1xuICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwR2FwQ2VsbHMpO1xuXG4gICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZ2FwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIFBsYWNpbmcgU2hpcCBPYmplY3QgaW4gdGhlIGFjdHVhbCAxMHgxMCBHYW1lYm9hcmQgYXJyYXkuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyB0aGUgZmlyc3Qgc2hpcCBhZnRlciBiZWluZyBwbGFjZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2Uuc2hpZnQoKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHN0b1BsYWNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZXMgdGhlIHNoaXAgaWNvbiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNoaXBJY29uKHRoaXMuc2hpcHN0b1BsYWNlWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIGNsb25lIG9mIGVhY2ggY2VsbCBhbmQgcmVwbGFjZXMgd2l0aCBvcmlnaW5hbCBvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gcmVtb3ZlIGFsbCB0aGUgZXZlbnQgTGlzdGVuZXJzIGZyb20gaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBubyBzaGlwcyBhcmUgbGVmdCB0byBiZSBwbGFjZWQuIFxuICAgICAgICAgICAgICAgICAgICAvLyAoVGhhbmtzIHRvIENoYXRHUFQgZm9yIGhlbHBpbmcgOnApXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmUgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlU3RhcnRHYW1lQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwidmVydGljYWxcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHVwZGF0ZUN1cnJlbnRTaGlwSWNvbihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYWN0aXZhdGVTdGFydEdhbWVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjaW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhXCIpO1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0R2FtZUJ0blwiKTtcbiAgICAgICAgY29uc3QgbWFpbkdhbWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gLmNvbnRhaW5lclwiKTtcbiAgICAgICAgc3RhcnRHYW1lQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBQbGFjaW5nQXJlYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBtYWluR2FtZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgdGhpcy5zdGFydE1haW5HYW1lKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG5cblxuICAgIHBvcHVsYXRlUGxheWVyR3JpZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZENlbGxzID0gdGhpcy5wbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5wbGF5ZXJHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hpcG5hbWVcIiwgYCR7Y3VycmVudEVsZW1lbnQuZ2V0TmFtZSgpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBwb3B1bGF0ZU9wcG9uZW50R3JpZCgpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKTtcblxuICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRDZWxscyA9IHRoaXMub3Bwb25lbnRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5vcHBvbmVudEdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hpcG5hbWVcIiwgYCR7Y3VycmVudEVsZW1lbnQuZ2V0TmFtZSgpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNob290T3Bwb25lbnRCb2FyZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRHcmlkQ2VsbHMgPSB0aGlzLm9wcG9uZW50R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBvcHBvbmVudEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSkpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB0aGlzLnBsYXllclNob290aW5nSGFuZGxlcihlKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMucGxheWVyU2hvb3RpbmdIYW5kbGVyKGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwic2hvdFwiKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJzaG90XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwic2hpcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByb3cgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZSh0aGlzLm9wcG9uZW50R2FtZWJvYXJkLCB0aGlzLnBsYXllciwgdGhpcy5wbGF5ZXJTY29yZSwgW3JvdywgY29sXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwiZXZlbnRcIiwgZXZlbnQudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHNob290UGxheWVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckdyaWRDZWxscyA9IHRoaXMucGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLm9wcG9uZW50LmNob29zZVJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnBsYXllckdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgICAgIHBsYXllckdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIikgPT09IGAke3h9YCAmJiBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKSA9PT0gYCR7eX1gKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaG90XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKHRoaXMucGxheWVyR2FtZWJvYXJkLCB0aGlzLm9wcG9uZW50LCB0aGlzLm9wcG9uZW50U2NvcmUsIFt4LCB5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXBkYXRlU2NvcmUoY3VycmVudEdhbWVib2FyZCwgY3VycmVudFBsYXllciwgc2NvcmVCb2FyZCwgW3JvdywgY29sXSl7XG4gICAgICAgIGxldCBib2FyZCA9IGN1cnJlbnRHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgICAgICBib2FyZFtyb3ddW2NvbF0uaGl0KCk7XG4gICAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0aW5nIFNjb3JlIG9uIGJvYXJkXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyLnNjb3JlICs9IDE7XG4gICAgICAgICAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFBsYXllci5uYW1lfSdzIFNjb3JlOiAke2N1cnJlbnRQbGF5ZXIuc2NvcmV9YFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGJvYXJkW3Jvd11bY29sXSA9IFwiXCI7XG4gICAgICAgIC8vIEVuZCBHYW1lXG4gICAgICAgIGlmIChjdXJyZW50R2FtZWJvYXJkLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgdGhpcy53aW5Nc2cudGV4dENvbnRlbnQgPSBgR2FtZSBPdmVyISAke2N1cnJlbnRQbGF5ZXIubmFtZX0gV2luLmA7XG5cbiAgICAgICAgICAgIGNvbnN0IG9wcG9uZW50R3JpZENlbGxzID0gdGhpcy5vcHBvbmVudEdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIGxldCBjbG9uZSA9IGNlbGwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVSZXN0YXJ0R2FtZUJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhY3RpdmF0ZVJlc3RhcnRHYW1lQnV0dG9uKCl7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjaW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhXCIpO1xuICAgICAgICBjb25zdCBtYWluR2FtZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiAuY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCByZXN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydEdhbWVCdG5cIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRHYW1lQnRuXCIpO1xuXG4gICAgICAgIHJlc3RhcnRHYW1lQnRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHJlc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwUGxhY2luZ0FyZWEuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgbWFpbkdhbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHJlc3RhcnRHYW1lQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHN0YXJ0R2FtZUJ0bi5kaXNhYmxlZCA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBQbGFjZW1lbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXN0YXJ0KCl7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIHRoaXMub3Bwb25lbnRHYW1lYm9hcmQucmVzZXRCb2FyZCgpOyAvLyBjb21wdXRlciBCb2FyZFxuXG4gICAgICAgIC8vIFBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyXCIpO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IFBsYXllcihcIk9wcG9uZW50XCIpO1xuXG4gICAgICAgIHRoaXMud2luTXNnLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBTY29yZSBEaXNwbGF5c1xuICAgICAgICB0aGlzLnBsYXllclNjb3JlLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgU2NvcmU6IDBcIjtcbiAgICAgICAgdGhpcy5vcHBvbmVudFNjb3JlLnRleHRDb250ZW50ID0gXCJPcHBvZW5lbnQgU2NvcmU6IDBcIjtcblxuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICBzdGFydE1haW5HYW1lKCkge1xuICAgICAgICB0aGlzLnBvcHVsYXRlUGxheWVyR3JpZCgpOyAgICAvLyBUbyBwbGFjZSBzaGlwcyBvbiB0aGUgUGxheWVyIEdyaWRcbiAgICAgICAgdGhpcy5wb3B1bGF0ZU9wcG9uZW50R3JpZCgpOyAgLy8gVG8gcGxhY2Ugc2hpcHMgb24gdGhlIE9wcG9uZW50IEdyaWQgICAgXG4gICAgICAgIHRoaXMuc2hvb3RPcHBvbmVudEJvYXJkKCk7XG4gICAgfVxufVxuXG5jb25zdCBkb20gPSBuZXcgRE9NKCk7XG5kb20uc2hpcFBsYWNlbWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==