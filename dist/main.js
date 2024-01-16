/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
class Ship{
    constructor(name, length){
        this.name = name;
        this.length = length;
        this.timesHit = 0;
        this.sunk = this.isSunk();
    }

    hit(){
        this.timesHit += 1;
    }
    
    isSunk(){
        return this.length === this.timesHit;
    }

    getLength(){
        return this.length;
    }
}


class Gameboard{
    constructor(){
        this.board = [
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
        ]
    }

    getBoard(){
        return this.board;
    }

    //  headCoords is the coordinates of the head of the ship.
    //  orientation is either horizontal or vertical.
    placeShip(ship, coordinates){
        coordinates.forEach(([row, col]) => {
            this.board[row][col] = ship;
        })
    }

    receiveAttack(coords){
        let [x, y] = coords;
        if(typeof this.board[x][y] != "string"){
            this.board[x][y].hit();
            this.board[x][y] = "O"
        } else {
            this.board[x][y] = "X";
        }
    }

    checkIfAllShipsSunk(){
        this.board.forEach(function(row){
            row.forEach(function(cell){
                if(typeof cell != "string") return false;
            })
        })
        return true;
    }
}


class Player{
    constructor(type){
        this.type = type;
        this.score = 0;
        this.notShooted = this.totalCoords();
    }


    totalCoords(){
        let temp = [];
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                temp.push([i,j]);
            }
        }
        return temp;
    }


    filterOutShootedCoordinate(coord){
        this.notShooted = this.notShooted.filter((c) =>{
            return (c[0] !== coord[0]) && (c[1] !== coord[1]);
        });
    }


    // For Computer to pick a random coordinate to shoot
    chooseRandomCoordinate(){
        const randomCoordinate = this.notShooted[
            Math.floor(Math.random() * this.notShooted.length)
        ];
        this.filterOutShootedCoordinate(randomCoordinate);
    }
}


class DOM{
    constructor(){
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
    createBoardGrid(shipPlacingGrid){
        let boardGrid = shipPlacingGrid;
        boardGrid.textContent = "";
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                const gridItem = document.createElement("div");
                gridItem.setAttribute("row", `${i}`);
                gridItem.setAttribute("col", `${j}`);
                boardGrid.appendChild(gridItem);
            }
        }
        return boardGrid;
    }


    placeShips(){
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");

        // Event Listeners for each cell to check hover and click events
        // and change Background colors accordingly.
        boardGridCells.forEach((gridCell) => {
                gridCell.addEventListener("mouseover", (e) => this.shipPlacingHandler(e, boardGridCells));
                gridCell.addEventListener("click", (e) => this.shipPlacingHandler(e, boardGridCells));
                gridCell.addEventListener("mouseout", (e) => this.shipPlacingHandler(e, boardGridCells));
        });

        this.changeCurrentShipIconOrientation();
    }

    
    shipPlacingHandler(event, boardGridCells){
        const orientation = this.currentShipIcon.getAttribute("orientation");
        const currentGridCell = event.target;
        const row = currentGridCell.getAttribute("row");
        const col = currentGridCell.getAttribute("col");

        let nextCells = [];
        let coordinates = [];
        let cellAvailability = true;
        let currentShip = this.shipstoPlace[0];
        let length = currentShip.getLength();

        // Creating an array of cells to be modified.
        // Also getting their coordinates in other array.
        for(let i = 0; i < length; i++){
            if (orientation === "horizontal"){
                const currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${row}"][col="${+col + i}"]`);
                coordinates.push([row, +col + i]);
                nextCells.push(currentCell);
            } else if (orientation === "vertical"){
                const currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i}"][col="${col}"]`);
                coordinates.push([+row + i, col]);
                nextCells.push(currentCell);
            }
        }

        nextCells.forEach((cell) => {
            if((!cell) || cell.getAttribute("shipPlaced") === "true"){
                cellAvailability = false;
                currentGridCell.style.cursor = "not-allowed";
            }
        })

        if (cellAvailability){
            nextCells.forEach((cell) => {
                cell.setAttribute("event", event.type);
            })

            if(event.type === "click") {
                nextCells.forEach((cell) => {
                    cell.setAttribute("shipPlaced", "true");
                });
                this.playerGameboard.placeShip(currentShip, coordinates);
                console.log(this.playerGameboard.getBoard());
                this.shipstoPlace.shift();  // To get the next element at first index

                
                if(this.shipstoPlace[0]){
                    // changes the ship icon according to the length of the ship to be placed.
                    this.updateCurrentShipIcon(this.shipstoPlace[0].getLength());
                } else {
                    // Creates a clone of each cell and replaces with original one
                    // to remove all the event Listeners from it
                    // when no ships are left to be placed. 
                    // (Thanks to ChatGPT for helping :p)
                    boardGridCells.forEach((cell) => {
                        let clone = cell.cloneNode(true);
                        cell.parentNode.replaceChild(clone, cell);
                    })
                    this.activateStartGameButton();
                }
            }
        }
    }

    
    changeCurrentShipIconOrientation(){
        this.currentShipIcon.addEventListener("click", () => {
            if (this.currentShipIcon.getAttribute("orientation") == "horizontal"){
                this.currentShipIcon.style.flexDirection = "column";
                this.currentShipIcon.setAttribute("orientation", "vertical");
            } else {
                this.currentShipIcon.style.flexDirection = "row";
                this.currentShipIcon.setAttribute("orientation", "horizontal");
            }
        })
    }


    updateCurrentShipIcon(length){
        this.currentShipIcon.textContent = "";
        for(let i = 0; i < length; i++){
            const div = document.createElement("div");
            this.currentShipIcon.appendChild(div);
        }
    }

    activateStartGameButton(){
        const shipPlacingArea = document.querySelector(".shipPlacingArea");
        const startGameBtn = document.querySelector(".startGameBtn");
        startGameBtn.removeAttribute("disabled");
        startGameBtn.addEventListener("click", () => {
            shipPlacingArea.style.display = "none";
            this.startGame();
        });
    }

    startGame(){
    }
}

const dom = new DOM();
dom.placeShips();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0EsbUdBQW1HLElBQUksVUFBVSxTQUFTO0FBQzFIO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsbUdBQW1HLFNBQVMsVUFBVSxJQUFJO0FBQzFIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIH1cbiAgICBcbiAgICBpc1N1bmsoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0O1xuICAgIH1cblxuICAgIGdldExlbmd0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxufVxuXG5cbmNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgZ2V0Qm9hcmQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuXG4gICAgLy8gIGhlYWRDb29yZHMgaXMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgIC8vICBvcmllbnRhdGlvbiBpcyBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbC5cbiAgICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMpe1xuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChbcm93LCBjb2xdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IHNoaXA7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZHMpe1xuICAgICAgICBsZXQgW3gsIHldID0gY29vcmRzO1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFt4XVt5XSAhPSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJPXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlhcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmsoKXtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKGZ1bmN0aW9uKHJvdyl7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihjZWxsKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgY2VsbCAhPSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cblxuY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpe1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy50b3RhbENvb3JkcygpO1xuICAgIH1cblxuXG4gICAgdG90YWxDb29yZHMoKXtcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChbaSxqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuXG5cbiAgICBmaWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShjb29yZCl7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMubm90U2hvb3RlZC5maWx0ZXIoKGMpID0+e1xuICAgICAgICAgICAgcmV0dXJuIChjWzBdICE9PSBjb29yZFswXSkgJiYgKGNbMV0gIT09IGNvb3JkWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBGb3IgQ29tcHV0ZXIgdG8gcGljayBhIHJhbmRvbSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpe1xuICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5ub3RTaG9vdGVkW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ub3RTaG9vdGVkLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShyYW5kb21Db29yZGluYXRlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRE9Ne1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcblxuICAgICAgICAvLyBWaXN1YWwgZ3JpZHMgb24gc2NyZWVuXG4gICAgICAgIHRoaXMucGxheWVyR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyIC5wbGF5ZXJHcmlkXCIpKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdyaWQgPSB0aGlzLmNyZWF0ZUJvYXJkR3JpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lciAub3Bwb25lbnRHcmlkXCIpKTtcblxuICAgICAgICAvLyBHcmlkYm9hcmQgb2JqZWN0c1xuICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5vcHBvbmVudEdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTsgLy8gY29tcHV0ZXJcblxuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG4gICAgfVxuXG5cbiAgICAvLyBDcmVhdGVzIGEgMTB4MTAgZ3JpZFxuICAgIGNyZWF0ZUJvYXJkR3JpZChzaGlwUGxhY2luZ0dyaWQpe1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBib2FyZEdyaWQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcInJvd1wiLCBgJHtpfWApO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNvbFwiLCBgJHtqfWApO1xuICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkR3JpZDtcbiAgICB9XG5cblxuICAgIHBsYWNlU2hpcHMoKXtcbiAgICAgICAgY29uc3QgYm9hcmRHcmlkQ2VsbHMgPSB0aGlzLnNoaXBQbGFjaW5nR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVycyBmb3IgZWFjaCBjZWxsIHRvIGNoZWNrIGhvdmVyIGFuZCBjbGljayBldmVudHNcbiAgICAgICAgLy8gYW5kIGNoYW5nZSBCYWNrZ3JvdW5kIGNvbG9ycyBhY2NvcmRpbmdseS5cbiAgICAgICAgYm9hcmRHcmlkQ2VsbHMuZm9yRWFjaCgoZ3JpZENlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB0aGlzLnNoaXBQbGFjaW5nSGFuZGxlcihlLCBib2FyZEdyaWRDZWxscykpO1xuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5zaGlwUGxhY2luZ0hhbmRsZXIoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHRoaXMuc2hpcFBsYWNpbmdIYW5kbGVyKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBcbiAgICBzaGlwUGxhY2luZ0hhbmRsZXIoZXZlbnQsIGJvYXJkR3JpZENlbGxzKXtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKTtcbiAgICAgICAgY29uc3QgY3VycmVudEdyaWRDZWxsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCByb3cgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBjdXJyZW50R3JpZENlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuXG4gICAgICAgIGxldCBuZXh0Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIGxldCBjZWxsQXZhaWxhYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgbGV0IGN1cnJlbnRTaGlwID0gdGhpcy5zaGlwc3RvUGxhY2VbMF07XG4gICAgICAgIGxldCBsZW5ndGggPSBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTtcblxuICAgICAgICAvLyBDcmVhdGluZyBhbiBhcnJheSBvZiBjZWxscyB0byBiZSBtb2RpZmllZC5cbiAgICAgICAgLy8gQWxzbyBnZXR0aW5nIHRoZWlyIGNvb3JkaW5hdGVzIGluIG90aGVyIGFycmF5LlxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7cm93fVwiXVtjb2w9XCIkeytjb2wgKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3JvdywgK2NvbCArIGldKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFsrcm93ICsgaSwgY29sXSk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmKCghY2VsbCkgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJzaGlwUGxhY2VkXCIpID09PSBcInRydWVcIil7XG4gICAgICAgICAgICAgICAgY2VsbEF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRHcmlkQ2VsbC5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGNlbGxBdmFpbGFiaWxpdHkpe1xuICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImV2ZW50XCIsIGV2ZW50LnR5cGUpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJzaGlwUGxhY2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoY3VycmVudFNoaXAsIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXllckdhbWVib2FyZC5nZXRCb2FyZCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzdG9QbGFjZS5zaGlmdCgpOyAgLy8gVG8gZ2V0IHRoZSBuZXh0IGVsZW1lbnQgYXQgZmlyc3QgaW5kZXhcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hpcHN0b1BsYWNlWzBdKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hhbmdlcyB0aGUgc2hpcCBpY29uIGFjY29yZGluZyB0byB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50U2hpcEljb24odGhpcy5zaGlwc3RvUGxhY2VbMF0uZ2V0TGVuZ3RoKCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZXMgYSBjbG9uZSBvZiBlYWNoIGNlbGwgYW5kIHJlcGxhY2VzIHdpdGggb3JpZ2luYWwgb25lXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHJlbW92ZSBhbGwgdGhlIGV2ZW50IExpc3RlbmVycyBmcm9tIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gbm8gc2hpcHMgYXJlIGxlZnQgdG8gYmUgcGxhY2VkLiBcbiAgICAgICAgICAgICAgICAgICAgLy8gKFRoYW5rcyB0byBDaGF0R1BUIGZvciBoZWxwaW5nIDpwKVxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xvbmUgPSBjZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlU3RhcnRHYW1lQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKSA9PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgdXBkYXRlQ3VycmVudFNoaXBJY29uKGxlbmd0aCl7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVTdGFydEdhbWVCdXR0b24oKXtcbiAgICAgICAgY29uc3Qgc2hpcFBsYWNpbmdBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWFcIik7XG4gICAgICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRHYW1lQnRuXCIpO1xuICAgICAgICBzdGFydEdhbWVCdG4ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcFBsYWNpbmdBcmVhLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0R2FtZSgpe1xuICAgIH1cbn1cblxuY29uc3QgZG9tID0gbmV3IERPTSgpO1xuZG9tLnBsYWNlU2hpcHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=