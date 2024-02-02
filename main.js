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
        this.sunk = false;
    }

    hit() {
        this.timesHit += 1;
        this.sunk = this.isSunk();
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
        this.opponentGameboard = new Gameboard(); // computer

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
            gridCell.addEventListener("mouseover", (e) => this.playerShootingHandler(e));
            gridCell.addEventListener("mouseout", (e) => this.playerShootingHandler(e));
            gridCell.addEventListener("click", (e) => this.playerShootingHandler(e));
        })
    }

    shootPlayerBoard() {

    }

    playerShootingHandler(event) {
        if (!event.target.getAttribute("shot")) {
            if (event.type === "click") {
                event.target.setAttribute("shot", "true");
                if (event.target.getAttribute("type") === "ship") {
                    let row = event.target.getAttribute("row");
                    let col = event.target.getAttribute("col");
                    let board = this.opponentGameboard.getBoard();
                    let ship = board[row][col];
                    ship.hit();
                    console.log(ship);
                }
            }
            else event.target.setAttribute("event", event.type);
        }
    }

    startGame() {
        this.shootOpponentBoard();
    }
}

const dom = new DOM();
dom.shipPlacement();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtEO0FBQ2xEO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx5QkFBeUI7QUFDMUU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx5QkFBeUI7QUFDMUU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0O1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuXG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgICAgICBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0sXG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBnZXRCb2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gIGhlYWRDb29yZHMgaXMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgIC8vICBvcmllbnRhdGlvbiBpcyBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbC5cbiAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoW3JvdywgY29sXSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgICAgIGxldCBzaGlwT2JqID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBzaGlwT2JqID09PSBcIm9iamVjdFwiKSBzaGlwT2JqLmhpdCgpO1xuICAgIH1cblxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2VsbCAhPSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByYW5kb21seVBsYWNlU2hpcHMoKSB7XG4gICAgICAgIC8vIFdhc3RlZCBhIGxvdCBvZiB0aW1lIHRvIHRoaW5rIG9uIGhvdyB0byBtYWtlIGl0IGEgcHVyZWx5IHJhbmRvbSBwbGFjZW1lbnQuXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgYXNzaWduaW5nIGEgc2VjdGlvbiBpbiB0aGUgZ3JpZCBmb3IgZWFjaCBzaGlwLlxuICAgICAgICAvLyBTaW5jZSBJIGRvbid0IHdhbnQgdG8gZGVhbCB3aXRoIG92ZXJsYXBzIDstO1xuICAgICAgICAvLyBTbyBpdCBpcyBzb21ld2hhdCByYW5kb20gYXRsZWFzdCBpbiBpdHMgb3duIHNlY3Rpb24uXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgW25ldyBTaGlwKFwiY2FycmllclwiLCA1KSwgW1swLCAwXSwgWzQsIDRdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLCBbWzAsIDZdLCBbNCwgOV1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSwgW1s2LCAwXSwgWzksIDJdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksIFtbNiwgNF0sIFs5LCA2XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKSwgW1s2LCA4XSwgWzksIDldXV1cbiAgICAgICAgXVxuXG4gICAgICAgIHNoaXBzLmZvckVhY2goKFtzaGlwLCBbc2VjdGlvblN0YXJ0LCBzZWN0aW9uRW5kXV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICBjb25zdCBbc3RhcnRYLCBzdGFydFldID0gc2VjdGlvblN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgW2VuZFgsIGVuZFldID0gc2VjdGlvbkVuZDtcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRzID0gW107XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IDApIHsgIC8vIEhvcml6b250YWxcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWCAtIHN0YXJ0WCArIDEpKSArIHN0YXJ0WDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWSAtIHN0YXJ0WSArIDEgLSBzaGlwLmxlbmd0aCkpICsgc3RhcnRZO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3NoaXBIZWFkUm93LCBzaGlwSGVhZENvbCArIGldKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IDEpIHsgIC8vIFZlcnRpY2FsXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFggKyAxIC0gc2hpcC5sZW5ndGgpKSArIHN0YXJ0WDtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRDb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWSAtIHN0YXJ0WSArIDEpKSArIHN0YXJ0WTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcENvb3Jkcy5wdXNoKFtzaGlwSGVhZFJvdyArIGksIHNoaXBIZWFkQ29sXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwQ29vcmRzLmZvckVhY2goKFt4LCB5XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBzaGlwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMudG90YWxDb29yZHMoKTtcbiAgICB9XG5cblxuICAgIHRvdGFsQ29vcmRzKCkge1xuICAgICAgICBsZXQgdGVtcCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChbaSwgal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuXG4gICAgZmlsdGVyT3V0U2hvb3RlZENvb3JkaW5hdGUoY29vcmQpIHtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy5ub3RTaG9vdGVkLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChjWzBdICE9PSBjb29yZFswXSkgJiYgKGNbMV0gIT09IGNvb3JkWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBGb3IgQ29tcHV0ZXIgdG8gcGljayBhIHJhbmRvbSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMubm90U2hvb3RlZFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubm90U2hvb3RlZC5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0U2hvb3RlZENvb3JkaW5hdGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERPTSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTsgLy8gY29tcHV0ZXJcblxuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICAvLyBDcmVhdGVzIGEgMTB4MTAgZ3JpZFxuICAgIGNyZWF0ZUJvYXJkR3JpZChzaGlwUGxhY2luZ0dyaWQpIHtcbiAgICAgICAgbGV0IGJvYXJkR3JpZCA9IHNoaXBQbGFjaW5nR3JpZDtcbiAgICAgICAgYm9hcmRHcmlkLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwicm93XCIsIGAke2l9YCk7XG4gICAgICAgICAgICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKFwiY29sXCIsIGAke2p9YCk7XG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRHcmlkO1xuICAgIH1cblxuXG4gICAgc2hpcFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRHcmlkQ2VsbHMgPSB0aGlzLnNoaXBQbGFjaW5nR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVycyBmb3IgZWFjaCBjZWxsIHRvIGNoZWNrIGhvdmVyIGFuZCBjbGljayBldmVudHNcbiAgICAgICAgLy8gYW5kIGNoYW5nZSBCYWNrZ3JvdW5kIGNvbG9ycyBhY2NvcmRpbmdseS5cbiAgICAgICAgYm9hcmRHcmlkQ2VsbHMuZm9yRWFjaCgoZ3JpZENlbGwpID0+IHtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKTtcbiAgICB9XG5cblxuICAgIHNoaXBQbGFjaW5nSGFuZGxlcihldmVudCwgYm9hcmRHcmlkQ2VsbHMpIHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudEdyaWRDZWxsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjdXJyZW50R3JpZENlbGwucGFyZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgY29uc3Qgcm93ID0gY3VycmVudEdyaWRDZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgY29uc3QgY29sID0gY3VycmVudEdyaWRDZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgY29uc3QgZ2FwQ29vcmRzID0gW1stMSwgLTFdLCBbLTEsIDFdLCBbMSwgLTFdLCBbMSwgMV0sIFswLCAtMV0sIFstMSwgMF0sIFswLCAxXSwgWzEsIDBdXTtcblxuICAgICAgICBsZXQgbmV4dENlbGxzID0gW107XG4gICAgICAgIGxldCBzaGlwR2FwQ2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBjZWxsQXZhaWxhYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gdGhpcy5zaGlwc3RvUGxhY2VbMF07XG4gICAgICAgIGxldCBsZW5ndGggPSBjdXJyZW50U2hpcC5sZW5ndGg7XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgYW4gYXJyYXkgb2YgY2VsbHMgdG8gYmUgbW9kaWZpZWQuXG4gICAgICAgIC8vIEFsc28gZ2V0dGluZyB0aGVpciBjb29yZGluYXRlcyBpbiBvdGhlciBhcnJheS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRDZWxsO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIke3Jvd31cIl1bY29sPVwiJHsrY29sICsgaX1cIl1gKTtcblxuICAgICAgICAgICAgICAgIGdhcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBjb29yZFswXX1cIl1bY29sPVwiJHsrY29sICsgaSArIGNvb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwR2FwQ2VsbHMucHVzaChnYXBDZWxsKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHsrcm93ICsgaX1cIl1bY29sPVwiJHtjb2x9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICBnYXBDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FwQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHsrcm93ICsgaSArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBjb29yZFsxXX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLnB1c2goZ2FwQ2VsbCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3JvdywgK2NvbCArIGldKTtcbiAgICAgICAgICAgIG5leHRDZWxscy5wdXNoKGN1cnJlbnRDZWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBpZiAoKCFjZWxsKSB8fCBjZWxsLmdldEF0dHJpYnV0ZShcInR5cGVcIikgPT09IFwic2hpcFwiIHx8IGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJnYXBcIikge1xuICAgICAgICAgICAgICAgIGNlbGxBdmFpbGFiaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjdXJyZW50R3JpZENlbGwucGFyZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGNlbGxBdmFpbGFiaWxpdHkpIHtcbiAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJldmVudFwiLCBldmVudC50eXBlKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4gY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2hpcFwiKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hpcEdhcENlbGxzKTtcblxuICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsICYmIGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSAhPT0gXCJzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImdhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBQbGFjaW5nIFNoaXAgT2JqZWN0IGluIHRoZSBhY3R1YWwgMTB4MTAgR2FtZWJvYXJkIGFycmF5LlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcChjdXJyZW50U2hpcCwgY29vcmRpbmF0ZXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGZpcnN0IHNoaXAgYWZ0ZXIgYmVpbmcgcGxhY2VkLlxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlLnNoaWZ0KCk7XG5cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzdG9QbGFjZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2VzIHRoZSBzaGlwIGljb24gYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTaGlwSWNvbih0aGlzLnNoaXBzdG9QbGFjZVswXS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBjbG9uZSBvZiBlYWNoIGNlbGwgYW5kIHJlcGxhY2VzIHdpdGggb3JpZ2luYWwgb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHJlbW92ZSBhbGwgdGhlIGV2ZW50IExpc3RlbmVycyBmcm9tIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gbm8gc2hpcHMgYXJlIGxlZnQgdG8gYmUgcGxhY2VkLiBcbiAgICAgICAgICAgICAgICAgICAgLy8gKFRoYW5rcyB0byBDaGF0R1BUIGZvciBoZWxwaW5nIDpwKVxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsb25lID0gY2VsbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVN0YXJ0R2FtZUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2hpcEljb24uZ2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIikgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICB1cGRhdGVDdXJyZW50U2hpcEljb24obGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZVN0YXJ0R2FtZUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWFcIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRHYW1lQnRuXCIpO1xuICAgICAgICBjb25zdCBtYWluR2FtZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiAuY29udGFpbmVyXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcFBsYWNpbmdBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG1haW5HYW1lU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVNYWluR2FtZVBsYXllckdyaWQoKTsgICAgLy8gVG8gcGxhY2Ugc2hpcHMgb24gdGhlIFBsYXllciBCb2FyZFxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZU1haW5HYW1lT3Bwb25lbnRHcmlkKCk7ICAvLyBUbyBwbGFjZSBzaGlwcyBvbiB0aGUgUGxheWVyIEJvYXJkXG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZU1haW5HYW1lUGxheWVyR3JpZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyR3JpZENlbGxzID0gdGhpcy5wbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5wbGF5ZXJHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hpcG5hbWVcIiwgYCR7Y3VycmVudEVsZW1lbnQuZ2V0TmFtZSgpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcG9wdWxhdGVNYWluR2FtZU9wcG9uZW50R3JpZCgpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKTtcblxuICAgICAgICBjb25zdCBvcHBvbmVudEdyaWRDZWxscyA9IHRoaXMub3Bwb25lbnRHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gdGhpcy5vcHBvbmVudEdhbWVib2FyZC5nZXRCb2FyZCgpO1xuXG4gICAgICAgIG9wcG9uZW50R3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudEVsZW1lbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwic2hpcG5hbWVcIiwgYCR7Y3VycmVudEVsZW1lbnQuZ2V0TmFtZSgpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG9vdE9wcG9uZW50Qm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50R3JpZENlbGxzID0gdGhpcy5vcHBvbmVudEdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgb3Bwb25lbnRHcmlkQ2VsbHMuZm9yRWFjaCgoZ3JpZENlbGwpID0+IHtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHRoaXMucGxheWVyU2hvb3RpbmdIYW5kbGVyKGUpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5wbGF5ZXJTaG9vdGluZ0hhbmRsZXIoZSkpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLnBsYXllclNob290aW5nSGFuZGxlcihlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2hvb3RQbGF5ZXJCb2FyZCgpIHtcblxuICAgIH1cblxuICAgIHBsYXllclNob290aW5nSGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJzaG90XCIpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcInNob3RcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2wgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLmdldEJvYXJkKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoXCJldmVudFwiLCBldmVudC50eXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5zaG9vdE9wcG9uZW50Qm9hcmQoKTtcbiAgICB9XG59XG5cbmNvbnN0IGRvbSA9IG5ldyBET00oKTtcbmRvbS5zaGlwUGxhY2VtZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9