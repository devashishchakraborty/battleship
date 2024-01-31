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
        this.sunk = this.isSunk();
    }

    hit() {
        this.timesHit += 1;
    }

    isSunk() {
        return this.length === this.timesHit;
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

    receiveAttack(coords) {
        let [x, y] = coords;
        if (typeof this.board[x][y] != "string") {
            this.board[x][y].hit();
            this.board[x][y] = "O"
        } else {
            this.board[x][y] = "X";
        }
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
            [new Ship("carrier", 5),    [[0, 0], [4, 4]]],
            [new Ship("battleship", 4), [[0, 5], [4, 9]]],
            [new Ship("destroyer", 3),  [[5, 0], [9, 3]]],
            [new Ship("submarine", 3),  [[5, 4], [9, 7]]],
            [new Ship("patrolBoat", 2), [[5, 8], [9, 9]]]
        ]

        ships.forEach(([ship, [sectionStart, sectionEnd]]) => {
            const orientation = Math.floor(Math.random() * 2);
            const [startX, startY] = sectionStart;
            const [endX, endY] = sectionEnd;
            let shipCoords = [];
            if (orientation === 0) {  // Horizontal
                let shipHeadRow = Math.floor(Math.random() * (endX - startX + 1)) + startX;
                let shipHeadCol = Math.floor(Math.random() * (endY - startY + 1 - ship.length)) + startY;
                for(let i = 0; i < ship.length; i++){
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


    placeShips() {
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
                    this.createMainGamePlayerGrid();    // To place ships on the Player Board
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
        startGameBtn.removeAttribute("disabled");
        startGameBtn.addEventListener("click", () => {
            shipPlacingArea.style.display = "none";
            this.opponentGameboard.randomlyPlaceShips();
            console.log(this.opponentGameboard);
            this.startGame();
        });
    }

    createMainGamePlayerGrid() {
        let playerGridCells = this.playerGrid.querySelectorAll("div");
        let pBArr = this.playerGameboard.getBoard();
        playerGridCells.forEach((cell) => {
            let row = cell.getAttribute("row");
            let col = cell.getAttribute("col");
            if (typeof pBArr[row][col] === "object") {
                cell.setAttribute("type", "ship");
            }
        })
    }

    shootOpponentBoard() {
        const opponentGridCells = this.opponentGrid.querySelectorAll("div");
        opponentGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", (event) => {
                event.target.setAttribute("event", event.type);
            });
            gridCell.addEventListener("mouseout", (event) => {
                event.target.setAttribute("event", event.type);
            });
        })
    }

    startGame() {
        this.shootOpponentBoard();
    }
}

const dom = new DOM();
dom.placeShips();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0O1xuICAgIH1cbn1cblxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cblxuICAgIC8vICBoZWFkQ29vcmRzIGlzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICAvLyAgb3JpZW50YXRpb24gaXMgZWl0aGVyIGhvcml6b250YWwgb3IgdmVydGljYWwuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKFtyb3csIGNvbF0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xuICAgICAgICBsZXQgW3gsIHldID0gY29vcmRzO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbeF1beV0gIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIk9cIlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiWFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJZkFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjZWxsICE9IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJhbmRvbWx5UGxhY2VTaGlwcygpIHtcbiAgICAgICAgLy8gV2FzdGVkIGEgbG90IG9mIHRpbWUgdG8gdGhpbmsgb24gaG93IHRvIG1ha2UgaXQgYSBwdXJlbHkgcmFuZG9tIHBsYWNlbWVudC5cbiAgICAgICAgLy8gVGhlcmVmb3JlLCBhc3NpZ25pbmcgYSBzZWN0aW9uIGluIHRoZSBncmlkIGZvciBlYWNoIHNoaXAuXG4gICAgICAgIC8vIFNpbmNlIEkgZG9uJ3Qgd2FudCB0byBkZWFsIHdpdGggb3ZlcmxhcHMgOy07XG4gICAgICAgIC8vIFNvIGl0IGlzIHNvbWV3aGF0IHJhbmRvbSBhdGxlYXN0IGluIGl0cyBvd24gc2VjdGlvbi5cbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLCAgICBbWzAsIDBdLCBbNCwgNF1dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksIFtbMCwgNV0sIFs0LCA5XV1dLFxuICAgICAgICAgICAgW25ldyBTaGlwKFwiZGVzdHJveWVyXCIsIDMpLCAgW1s1LCAwXSwgWzksIDNdXV0sXG4gICAgICAgICAgICBbbmV3IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksICBbWzUsIDRdLCBbOSwgN11dXSxcbiAgICAgICAgICAgIFtuZXcgU2hpcChcInBhdHJvbEJvYXRcIiwgMiksIFtbNSwgOF0sIFs5LCA5XV1dXG4gICAgICAgIF1cblxuICAgICAgICBzaGlwcy5mb3JFYWNoKChbc2hpcCwgW3NlY3Rpb25TdGFydCwgc2VjdGlvbkVuZF1dKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICAgICAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHNlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIGNvbnN0IFtlbmRYLCBlbmRZXSA9IHNlY3Rpb25FbmQ7XG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkcyA9IFtdO1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAwKSB7ICAvLyBIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFggLSBzdGFydFggKyAxKSkgKyBzdGFydFg7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBIZWFkQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGVuZFkgLSBzdGFydFkgKyAxIC0gc2hpcC5sZW5ndGgpKSArIHN0YXJ0WTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBDb29yZHMucHVzaChbc2hpcEhlYWRSb3csIHNoaXBIZWFkQ29sICsgaV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gMSkgeyAgLy8gVmVydGljYWxcbiAgICAgICAgICAgICAgICBsZXQgc2hpcEhlYWRSb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZW5kWCAtIHN0YXJ0WCArIDEgLSBzaGlwLmxlbmd0aCkpICsgc3RhcnRYO1xuICAgICAgICAgICAgICAgIGxldCBzaGlwSGVhZENvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbmRZIC0gc3RhcnRZICsgMSkpICsgc3RhcnRZO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQ29vcmRzLnB1c2goW3NoaXBIZWFkUm93ICsgaSwgc2hpcEhlYWRDb2xdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBDb29yZHMuZm9yRWFjaCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IHNoaXA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy50b3RhbENvb3JkcygpO1xuICAgIH1cblxuXG4gICAgdG90YWxDb29yZHMoKSB7XG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG5cbiAgICBmaWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShjb29yZCkge1xuICAgICAgICB0aGlzLm5vdFNob290ZWQgPSB0aGlzLm5vdFNob290ZWQuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGNbMF0gIT09IGNvb3JkWzBdKSAmJiAoY1sxXSAhPT0gY29vcmRbMV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIEZvciBDb21wdXRlciB0byBwaWNrIGEgcmFuZG9tIGNvb3JkaW5hdGUgdG8gc2hvb3RcbiAgICBjaG9vc2VSYW5kb21Db29yZGluYXRlKCkge1xuICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5ub3RTaG9vdGVkW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ub3RTaG9vdGVkLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShyYW5kb21Db29yZGluYXRlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRE9NIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaGlwUGxhY2luZ0dyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBQbGFjaW5nQXJlYSAuY3VycmVudFNoaXBJY29uXCIpO1xuXG4gICAgICAgIC8vIFZpc3VhbCBncmlkcyBvbiBzY3JlZW5cbiAgICAgICAgdGhpcy5wbGF5ZXJHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXIgLnBsYXllckdyaWRcIikpO1xuICAgICAgICB0aGlzLm9wcG9uZW50R3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5vcHBvbmVudEdyaWRcIikpO1xuXG4gICAgICAgIC8vIEdyaWRib2FyZCBvYmplY3RzXG4gICAgICAgIHRoaXMucGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpOyAvLyBjb21wdXRlclxuXG4gICAgICAgIC8vIFNoaXBzIHdoaWNoIGFyZSB0byBiZSBwbGFjZWQgaW4gdGhlIGJvYXJkIGl0c2VsZi5cbiAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2UgPSBbXG4gICAgICAgICAgICBuZXcgU2hpcChcImNhcnJpZXJcIiwgNSksXG4gICAgICAgICAgICBuZXcgU2hpcChcImJhdHRsZXNoaXBcIiwgNCksXG4gICAgICAgICAgICBuZXcgU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJwYXRyb2xCb2F0XCIsIDIpXG4gICAgICAgIF1cbiAgICB9XG5cblxuICAgIC8vIENyZWF0ZXMgYSAxMHgxMCBncmlkXG4gICAgY3JlYXRlQm9hcmRHcmlkKHNoaXBQbGFjaW5nR3JpZCkge1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBib2FyZEdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgYCR7an1gKTtcbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZEdyaWQ7XG4gICAgfVxuXG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBib2FyZEdyaWRDZWxscyA9IHRoaXMuc2hpcFBsYWNpbmdHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzIGZvciBlYWNoIGNlbGwgdG8gY2hlY2sgaG92ZXIgYW5kIGNsaWNrIGV2ZW50c1xuICAgICAgICAvLyBhbmQgY2hhbmdlIEJhY2tncm91bmQgY29sb3JzIGFjY29yZGluZ2x5LlxuICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpO1xuICAgIH1cblxuXG4gICAgc2hpcFBsYWNpbmdIYW5kbGVyKGV2ZW50LCBib2FyZEdyaWRDZWxscykge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50R3JpZENlbGwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwiZGVmYXVsdFwiO1xuICAgICAgICBjb25zdCByb3cgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBjb25zdCBnYXBDb29yZHMgPSBbWy0xLCAtMV0sIFstMSwgMV0sIFsxLCAtMV0sIFsxLCAxXSwgWzAsIC0xXSwgWy0xLCAwXSwgWzAsIDFdLCBbMSwgMF1dO1xuXG4gICAgICAgIGxldCBuZXh0Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IHNoaXBHYXBDZWxscyA9IFtdO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IGNlbGxBdmFpbGFiaWxpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgY3VycmVudFNoaXAgPSB0aGlzLnNoaXBzdG9QbGFjZVswXTtcbiAgICAgICAgbGV0IGxlbmd0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aDtcblxuICAgICAgICAvLyBDcmVhdGluZyBhbiBhcnJheSBvZiBjZWxscyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgLy8gQWxzbyBnZXR0aW5nIHRoZWlyIGNvb3JkaW5hdGVzIGluIG90aGVyIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudENlbGw7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7cm93fVwiXVtjb2w9XCIkeytjb2wgKyBpfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgZ2FwQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGNvb3JkWzBdfVwiXVtjb2w9XCIkeytjb2wgKyBpICsgY29vcmRbMV19XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBHYXBDZWxscy5wdXNoKGdhcENlbGwpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgICAgICAgIGdhcENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXBDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpICsgY29vcmRbMF19XCJdW2NvbD1cIiR7K2NvbCArIGNvb3JkWzFdfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwR2FwQ2VsbHMucHVzaChnYXBDZWxsKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbcm93LCArY29sICsgaV0pO1xuICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmICgoIWNlbGwpIHx8IGNlbGwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJzaGlwXCIgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpID09PSBcImdhcFwiKSB7XG4gICAgICAgICAgICAgICAgY2VsbEF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5wYXJlbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2VsbEF2YWlsYWJpbGl0eSkge1xuICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzaGlwXCIpKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwR2FwQ2VsbHMpO1xuXG4gICAgICAgICAgICAgICAgc2hpcEdhcENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwgJiYgY2VsbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBcInNoaXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZ2FwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIFBsYWNpbmcgU2hpcCBPYmplY3QgaW4gdGhlIGFjdHVhbCAxMHgxMCBHYW1lYm9hcmQgYXJyYXkuXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCBjb29yZGluYXRlcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyB0aGUgZmlyc3Qgc2hpcCBhZnRlciBiZWluZyBwbGFjZWQuXG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc3RvUGxhY2Uuc2hpZnQoKTtcblxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHN0b1BsYWNlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoYW5nZXMgdGhlIHNoaXAgaWNvbiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudFNoaXBJY29uKHRoaXMuc2hpcHN0b1BsYWNlWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIGNsb25lIG9mIGVhY2ggY2VsbCBhbmQgcmVwbGFjZXMgd2l0aCBvcmlnaW5hbCBvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gcmVtb3ZlIGFsbCB0aGUgZXZlbnQgTGlzdGVuZXJzIGZyb20gaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBubyBzaGlwcyBhcmUgbGVmdCB0byBiZSBwbGFjZWQuIFxuICAgICAgICAgICAgICAgICAgICAvLyAoVGhhbmtzIHRvIENoYXRHUFQgZm9yIGhlbHBpbmcgOnApXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmUgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1haW5HYW1lUGxheWVyR3JpZCgpOyAgICAvLyBUbyBwbGFjZSBzaGlwcyBvbiB0aGUgUGxheWVyIEJvYXJkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVTdGFydEdhbWVCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNoYW5nZUN1cnJlbnRTaGlwSWNvbk9yaWVudGF0aW9uKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXBkYXRlQ3VycmVudFNoaXBJY29uKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVTdGFydEdhbWVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjaW5nQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhXCIpO1xuICAgICAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0R2FtZUJ0blwiKTtcbiAgICAgICAgc3RhcnRHYW1lQnRuLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBQbGFjaW5nQXJlYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aGlzLm9wcG9uZW50R2FtZWJvYXJkLnJhbmRvbWx5UGxhY2VTaGlwcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vcHBvbmVudEdhbWVib2FyZCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVNYWluR2FtZVBsYXllckdyaWQoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJHcmlkQ2VsbHMgPSB0aGlzLnBsYXllckdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgbGV0IHBCQXJyID0gdGhpcy5wbGF5ZXJHYW1lYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICAgICAgcGxheWVyR3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcEJBcnJbcm93XVtjb2xdID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2hpcFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzaG9vdE9wcG9uZW50Qm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50R3JpZENlbGxzID0gdGhpcy5vcHBvbmVudEdyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgb3Bwb25lbnRHcmlkQ2VsbHMuZm9yRWFjaCgoZ3JpZENlbGwpID0+IHtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc3RhcnRHYW1lKCkge1xuICAgICAgICB0aGlzLnNob290T3Bwb25lbnRCb2FyZCgpO1xuICAgIH1cbn1cblxuY29uc3QgZG9tID0gbmV3IERPTSgpO1xuZG9tLnBsYWNlU2hpcHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=