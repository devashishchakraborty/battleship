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

    getBoard() {
        return this.board;
    }

    isEmpty() {
        return this.board.every((col) => {
            return col.every((cell) => typeof cell === "string");
        });
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

    checkIfAllShipsSunk() {
        this.board.forEach(function (row) {
            row.forEach(function (cell) {
                if (typeof cell != "string") return false;
            })
        })
        return true;
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
    constructor(type) {
        this.type = type;
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


    filterOutShootedCoordinate(coord) {
        this.notShooted = this.notShooted.filter((c) => {
            return (c[0] !== coord[0]) && (c[1] !== coord[1]);
        });
    }


    // For Computer to pick a random coordinate to shoot
    chooseRandomCoordinate() {
        const randomCoordinate = this.notShooted[
            Math.floor(Math.random() * this.notShooted.length)
        ];
        this.filterOutShootedCoordinate(randomCoordinate);
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
        this.player = new Player("human");
        this.opponent = new Player("computer");

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

            this.populateMainGamePlayerGrid();    // To place ships on the Player Board
            this.populateMainGameOpponentGrid();  // To place ships on the Player Board
            this.startGame();
        });
    }

    populateMainGamePlayerGrid() {
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

    populateMainGameOpponentGrid() {
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
            gridCell.addEventListener("mouseover", (e) => this.playerShootingHandler(e, opponentGridCells));
            gridCell.addEventListener("mouseout", (e) => this.playerShootingHandler(e, opponentGridCells));
            gridCell.addEventListener("click", (e) => this.playerShootingHandler(e, opponentGridCells));
        })
    }

    playerShootingHandler(event, opponentGridCells) {
        if (!event.target.getAttribute("shot")) {
            if (event.type === "click") {
                event.target.setAttribute("shot", "true");
                if (event.target.getAttribute("type") === "ship") {
                    let row = event.target.getAttribute("row");
                    let col = event.target.getAttribute("col");
                    let board = this.opponentGameboard.getBoard();
                    let ship = board[row][col];
                    ship.hit();

                    // Removing the eventListeners after one hit
                    opponentGridCells.forEach((cell) => {
                        cell.style.cursor = "default";
                        let clone = cell.cloneNode(true);
                        cell.parentNode.replaceChild(clone, cell);
                    })
                }
            }
            else event.target.setAttribute("event", event.type);
        }
    }

    shootPlayerBoard() {

    }

    startGame() {
        let gameOver = false;
        let currentPlayer = this.player;

        while (!gameOver) {
            if (currentPlayer === this.player) {
                this.shootOpponentBoard();
                currentPlayer = this.opponent;
            } else if (currentPlayer === this.player) {
                this.shootPlayerBoard();
                currentPlayer = this.player;
            }

            // Close game if either of the boards don't have any ship left.
            if (this.playerGameboard.isEmpty() || this.opponentGameboard.isEmpty()) {
                gameOver = true;
            }
        }

    }
}

const dom = new DOM();
dom.shipPlacement();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQseUJBQXlCO0FBQzFFO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQseUJBQXlCO0FBQzFFO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuICAgIGlzRW1wdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkLmV2ZXJ5KChjb2wpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjb2wuZXZlcnkoKGNlbGwpID0+IHR5cGVvZiBjZWxsID09PSBcInN0cmluZ1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gIGhlYWRDb29yZHMgaXMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgIC8vICBvcmllbnRhdGlvbiBpcyBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbC5cbiAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoW3JvdywgY29sXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgICAgIGxldCBzaGlwT2JqID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaGlwT2JqID09PSBcIm9iamVjdFwiKSBzaGlwT2JqLmhpdCgpO1xuICAgIH1cblxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2VsbCAhPSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByYW5kb21seVBsYWNlU2hpcHMoKSB7XG4gICAgICAgIC8vIFdhc3RlZCBhIGxvdCBvZiB0aW1lIHRvIHRoaW5rIG9uIGhvdyB0byBtYWtlIGl0IGEgcHVyZWx5IHJhbmRvbSBwbGFjZW1lbnQuXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgYXNzaWduaW5nIGEgc2VjdGlvbiBpbiB0aGUgZ3JpZCBmb3IgZWFjaCBzaGlwLlxuICAgICAgICAvLyBTaW5jZSBJIGRvbid0IHdhbnQgdG8gZGVhbCB3aXRoIG92ZXJsYXBzIDstO1xuICAgICAgICAvLyBTbyBpdCBpcyBzb21ld2hhdCByYW5kb20gYXRsZWFzdCBpbiBpdHMgb3duIHNlY3Rpb24uXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgW25ldyBTaGlwKFwiY2FycmllclwiLCA1KSwgW1swLCAwXSwgWzQsIDRdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLCBbWzAsIDZdLCBbNCwgOV1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSwgW1s2LCAwXSwgWzksIDJdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksIFtbNiwgNF0sIFs5LCA2XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKSwgW1s2LCA4XSwgWzksIDldXV1cbiAgICAgICAgXVxuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKFtzaGlwLCBbc2VjdGlvblN0YXJ0LCBzZWN0aW9uRW5kXV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICBjb25zdCBbc3RhcnRYLCBzdGFydFldID0gc2VjdGlvblN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgW2VuZFgsIGVuZFldID0gc2VjdGlvbkVuZDtcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRzID0gW107XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHsgIC8vIEhvcml6b250YWxcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWCAtIHN0YXJ0WCArIDEpKSArIHN0YXJ0WDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWSAtIHN0YXJ0WSArIDEgLSBzaGlwLmxlbmd0aCkpICsgc3RhcnRZO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3NoaXBIZWFkUm93LCBzaGlwSGVhZENvbCArIGldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IDEpIHsgIC8vIFZlcnRpY2FsXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFggKyAxIC0gc2hpcC5sZW5ndGgpKSArIHN0YXJ0WDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWSAtIHN0YXJ0WSArIDEpKSArIHN0YXJ0WTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtzaGlwSGVhZFJvdyArIGksIHNoaXBIZWFkQ29sXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwQ29vcmRzLmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMudG90YWxDb29yZHMoKTtcbiAgICB9XG5cblxuICAgIHRvdGFsQ29vcmRzKCkge1xuICAgICAgICBsZXQgdGVtcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuXG4gICAgZmlsdGVyT3V0U2hvb3RlZENvb3JkaW5hdGUoY29vcmQpIHtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy5ub3RTaG9vdGVkLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChjWzBdICE9PSBjb29yZFswXSkgJiYgKGNbMV0gIT09IGNvb3JkWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBGb3IgQ29tcHV0ZXIgdG8gcGljayBhIHJhbmRvbSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMubm90U2hvb3RlZFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubm90U2hvb3RlZC5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0U2hvb3RlZENvb3JkaW5hdGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERPTSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTsgLy8gY29tcHV0ZXIgQm9hcmRcblxuICAgICAgICAvLyBQbGF5ZXJzXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihcImh1bWFuXCIpO1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gbmV3IFBsYXllcihcImNvbXB1dGVyXCIpO1xuXG4gICAgICAgIC8vIFNoaXBzIHdoaWNoIGFyZSB0byBiZSBwbGFjZWQgaW4gdGhlIGJvYXJkIGl0c2VsZi5cbiAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2UgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksXG4gICAgICAgICAgICBuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksXG4gICAgICAgICAgICBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJwYXRyb2xCb2F0XCIsIDIpXG4gICAgICAgIF1cbiAgICB9XG5cblxuICAgIC8vIENyZWF0ZXMgYSAxMHgxMCBncmlkXG4gICAgY3JlYXRlQm9hcmRHcmlkKHNoaXBQbGFjaW5nR3JpZCkge1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBib2FyZEdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgYCR7an1gKTtcbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZEdyaWQ7XG4gICAgfVxuXG5cbiAgICBzaGlwUGxhY2VtZW50KCkge1xuICAgICAgICBjb25zdCBib2FyZEdyaWRDZWxscyA9IHRoaXMuc2hpcFBsYWNpbmdHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzIGZvciBlYWNoIGNlbGwgdG8gY2hlY2sgaG92ZXIgYW5kIGNsaWNrIGV2ZW50c1xuICAgICAgICAvLyBhbmQgY2hhbmdlIEJhY2tncm91bmQgY29sb3JzIGFjY29yZGluZ2x5LlxuICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpO1xuICAgIH1cblxuXG4gICAgc2hpcFBsYWNpbmdIYW5kbGVyKGV2ZW50LCBib2FyZEdyaWRDZWxscykge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50R3JpZENlbGwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBjb25zdCByb3cgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBjb25zdCBnYXBDb29yZHMgPSBbWy0xLCAtMV0sIFstMSwgMV0sIFsxLCAtMV0sIFsxLCAxXSwgWzAsIC0xXSwgWy0xLCAwXSwgWzAsIDFdLCBbMSwgMF1dO1xuXG4gICAgICAgIGxldCBuZXh0Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IHNoaXBHYXBDZWxscyA9IFtdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IGNlbGxBdmFpbGFiaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzdG9QbGFjZVswXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aDtcblxuICAgICAgICAvLyBDcmVhdGluZyBhbiBhcnJheSBvZiBjZWxscyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgLy8gQWxzbyBnZXR0aW5nIHRoZWlyIGNvb3JkaW5hdGVzIGluIG90aGVyIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudENlbGw7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7cm93fVwiXVtjb2w9XCIkeytjb2wgKyBpfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgZ2FwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBpICsgY29vcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5wdXNoKGdhcENlbGwpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgICAgICAgIGdhcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpICsgY29vcmRbMF19XCJdW2NvbD1cIiR7K2NvbCArIGNvb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwR2FwQ2VsbHMucHVzaChnYXBDZWxsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCArY29sICsgaV0pO1xuICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmICgoIWNlbGwpIHx8IGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImdhcFwiKSB7XG4gICAgICAgICAgICAgICAgY2VsbEF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2VsbEF2YWlsYWJpbGl0eSkge1xuICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwR2FwQ2VsbHMpO1xuXG4gICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZ2FwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIFBsYWNpbmcgU2hpcCBPYmplY3QgaW4gdGhlIGFjdHVhbCAxMHgxMCBHYW1lYm9hcmQgYXJyYXkuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyB0aGUgZmlyc3Qgc2hpcCBhZnRlciBiZWluZyBwbGFjZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2Uuc2hpZnQoKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHN0b1BsYWNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZXMgdGhlIHNoaXAgaWNvbiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNoaXBJY29uKHRoaXMuc2hpcHN0b1BsYWNlWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIGNsb25lIG9mIGVhY2ggY2VsbCBhbmQgcmVwbGFjZXMgd2l0aCBvcmlnaW5hbCBvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gcmVtb3ZlIGFsbCB0aGUgZXZlbnQgTGlzdGVuZXJzIGZyb20gaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBubyBzaGlwcyBhcmUgbGVmdCB0byBiZSBwbGFjZWQuIFxuICAgICAgICAgICAgICAgICAgICAvLyAoVGhhbmtzIHRvIENoYXRHUFQgZm9yIGhlbHBpbmcgOnApXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmUgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlU3RhcnRHYW1lQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwidmVydGljYWxcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHVwZGF0ZUN1cnJlbnRTaGlwSWNvbihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2YXRlU3RhcnRHYW1lQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBzaGlwUGxhY2luZ0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYVwiKTtcbiAgICAgICAgY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydEdhbWVCdG5cIik7XG4gICAgICAgIGNvbnN0IG1haW5HYW1lU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIC5jb250YWluZXJcIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwUGxhY2luZ0FyZWEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbWFpbkdhbWVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZU1haW5HYW1lUGxheWVyR3JpZCgpOyAgICAvLyBUbyBwbGFjZSBzaGlwcyBvbiB0aGUgUGxheWVyIEJvYXJkXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlTWFpbkdhbWVPcHBvbmVudEdyaWQoKTsgIC8vIFRvIHBsYWNlIHNoaXBzIG9uIHRoZSBQbGF5ZXIgQm9hcmRcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvcHVsYXRlTWFpbkdhbWVQbGF5ZXJHcmlkKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJHcmlkQ2VsbHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLnBsYXllckdhbWVib2FyZC5nZXRCb2FyZCgpO1xuICAgICAgICBwbGF5ZXJHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaGlwbmFtZVwiLCBgJHtjdXJyZW50RWxlbWVudC5nZXROYW1lKCl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwb3B1bGF0ZU1haW5HYW1lT3Bwb25lbnRHcmlkKCkge1xuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpO1xuXG4gICAgICAgIGNvbnN0IG9wcG9uZW50R3JpZENlbGxzID0gdGhpcy5vcHBvbmVudEdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgYm9hcmQgPSB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICAgICAgb3Bwb25lbnRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyZW50RWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInNoaXBcIik7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaGlwbmFtZVwiLCBgJHtjdXJyZW50RWxlbWVudC5nZXROYW1lKCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob290T3Bwb25lbnRCb2FyZCgpIHtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRHcmlkQ2VsbHMgPSB0aGlzLm9wcG9uZW50R3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBvcHBvbmVudEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSwgb3Bwb25lbnRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSwgb3Bwb25lbnRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSwgb3Bwb25lbnRHcmlkQ2VsbHMpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZXZlbnQsIG9wcG9uZW50R3JpZENlbGxzKSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInNob3RcIikpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwic2hvdFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm93ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IHRoaXMub3Bwb25lbnRHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBib2FyZFtyb3ddW2NvbF07XG4gICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGV2ZW50TGlzdGVuZXJzIGFmdGVyIG9uZSBoaXRcbiAgICAgICAgICAgICAgICAgICAgb3Bwb25lbnRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbG9uZSA9IGNlbGwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjbG9uZSwgY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBldmVudC50YXJnZXQuc2V0QXR0cmlidXRlKFwiZXZlbnRcIiwgZXZlbnQudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdFBsYXllckJvYXJkKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICAgICAgICB3aGlsZSAoIWdhbWVPdmVyKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob290T3Bwb25lbnRCb2FyZCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSB0aGlzLm9wcG9uZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UGxheWVyID09PSB0aGlzLnBsYXllcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RQbGF5ZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2UgZ2FtZSBpZiBlaXRoZXIgb2YgdGhlIGJvYXJkcyBkb24ndCBoYXZlIGFueSBzaGlwIGxlZnQuXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJHYW1lYm9hcmQuaXNFbXB0eSgpIHx8IHRoaXMub3Bwb25lbnRHYW1lYm9hcmQuaXNFbXB0eSgpKSB7XG4gICAgICAgICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmNvbnN0IGRvbSA9IG5ldyBET00oKTtcbmRvbS5zaGlwUGxhY2VtZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9