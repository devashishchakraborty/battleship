/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
class Ship{
    constructor(length){
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
}


class Gameboard{
    constructor(){
        this.carrier = new Ship(5);
        this.battleship = new Ship(4);
        this.destroyer = new Ship(3);
        this.submarine = new Ship(3);
        this.patrolBoat = new Ship(2);
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

    //  headCoords is the coordinates of the head of the ship.
    //  orientation is either horizontal or vertical.
    placeShip(ship, headCoords, orientation){
        let [x, y] = headCoords;
        for(let i = 0; i < ship.length; i++){
            if(orientation === "horizontal")    this.board[x][y+i] = ship;
            else if(orientation === "vertical") this.board[x+i][y] = ship;
        }
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
    }


    createBoardGrid(shipPlacingGrid){
        let boardGrid = shipPlacingGrid;
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                const gridItem = document.createElement("div");
                gridItem.setAttribute("row", `${i}`);
                gridItem.setAttribute("col", `${j}`)
                boardGrid.appendChild(gridItem);
            }
        }
        return boardGrid;
    }


    placeShips(){
        this.updateHoverEffect();
        this.changeCurrentShipIconOrientation();
    }

    updateHoverEffect(){
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");
        boardGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", (e) => this.changeBackgroundColor(e, gridCell));
            gridCell.addEventListener("click", (e) => this.changeBackgroundColor(e, gridCell));
            gridCell.addEventListener("mouseout", (e) => this.changeBackgroundColor(e, gridCell));
        })
    }

    
    changeBackgroundColor(event, gridCell){
        const orientation = this.currentShipIcon.getAttribute("orientation");

        const row = gridCell.getAttribute("row");
        const col = gridCell.getAttribute("col");
        let n = 5;
        let nextCells = [];
        let cellAvailability = true;

        for(let i = 0; i < n; i++){
            if (orientation === "horizontal"){
                const currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${row}"][col="${+col + i}"]`);
                nextCells.push(currentCell);
            } else if (orientation === "vertical"){
                const currentCell = document.querySelector(`.shipPlacingArea .boardGrid div[row="${+row + i}"][col="${col}"]`);
                nextCells.push(currentCell);
            }
        }

        nextCells.forEach((cell) => {
            if((!cell) || cell.getAttribute("shipPlaced") === "true"){
                cellAvailability = false;
                gridCell.style.cursor = "not-allowed";
            }
        })

        if (cellAvailability){
            nextCells.forEach((cell) => {
                if(event.type === "click") cell.setAttribute("shipPlaced", "true");
                cell.setAttribute("event", event.type);
            })
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

}

const dom = new DOM();
dom.placeShips();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQiwyQkFBMkIsUUFBUTtBQUNuQztBQUNBLGdEQUFnRCxFQUFFO0FBQ2xELGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBLG1HQUFtRyxJQUFJLFVBQVUsU0FBUztBQUMxSDtBQUNBLGNBQWM7QUFDZCxtR0FBbUcsU0FBUyxVQUFVLElBQUk7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwe1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCl7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLnRpbWVzSGl0ID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBoaXQoKXtcbiAgICAgICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIH1cbiAgICBcbiAgICBpc1N1bmsoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoID09PSB0aGlzLnRpbWVzSGl0O1xuICAgIH1cbn1cblxuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gICAgICAgIHRoaXMuYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xuICAgICAgICB0aGlzLmRlc3Ryb3llciA9IG5ldyBTaGlwKDMpO1xuICAgICAgICB0aGlzLnN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuICAgICAgICB0aGlzLnBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgXVxuICAgIH1cblxuICAgIC8vICBoZWFkQ29vcmRzIGlzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICAvLyAgb3JpZW50YXRpb24gaXMgZWl0aGVyIGhvcml6b250YWwgb3IgdmVydGljYWwuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGhlYWRDb29yZHMsIG9yaWVudGF0aW9uKXtcbiAgICAgICAgbGV0IFt4LCB5XSA9IGhlYWRDb29yZHM7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikgICAgdGhpcy5ib2FyZFt4XVt5K2ldID0gc2hpcDtcbiAgICAgICAgICAgIGVsc2UgaWYob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikgdGhpcy5ib2FyZFt4K2ldW3ldID0gc2hpcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRzKXtcbiAgICAgICAgbGV0IFt4LCB5XSA9IGNvb3JkcztcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuYm9hcmRbeF1beV0gIT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiT1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0lmQWxsU2hpcHNTdW5rKCl7XG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChmdW5jdGlvbihyb3cpe1xuICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24oY2VsbCl7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGNlbGwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5cbmNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMudG90YWxDb29yZHMoKTtcbiAgICB9XG5cbiAgICB0b3RhbENvb3Jkcygpe1xuICAgICAgICBsZXQgdGVtcCA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cbiAgICBmaWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShjb29yZCl7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMubm90U2hvb3RlZC5maWx0ZXIoKGMpID0+e1xuICAgICAgICAgICAgcmV0dXJuIChjWzBdICE9PSBjb29yZFswXSkgJiYgKGNbMV0gIT09IGNvb3JkWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRm9yIENvbXB1dGVyIHRvIHBpY2sgYSByYW5kb20gY29vcmRpbmF0ZSB0byBzaG9vdFxuICAgIGNob29zZVJhbmRvbUNvb3JkaW5hdGUoKXtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMubm90U2hvb3RlZFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubm90U2hvb3RlZC5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0U2hvb3RlZENvb3JkaW5hdGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERPTXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnNoaXBQbGFjaW5nR3JpZCA9IHRoaXMuY3JlYXRlQm9hcmRHcmlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWRcIikpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5jdXJyZW50U2hpcEljb25cIik7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVCb2FyZEdyaWQoc2hpcFBsYWNpbmdHcmlkKXtcbiAgICAgICAgbGV0IGJvYXJkR3JpZCA9IHNoaXBQbGFjaW5nR3JpZDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgYCR7an1gKVxuICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkR3JpZDtcbiAgICB9XG5cblxuICAgIHBsYWNlU2hpcHMoKXtcbiAgICAgICAgdGhpcy51cGRhdGVIb3ZlckVmZmVjdCgpO1xuICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTaGlwSWNvbk9yaWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSG92ZXJFZmZlY3QoKXtcbiAgICAgICAgY29uc3QgYm9hcmRHcmlkQ2VsbHMgPSB0aGlzLnNoaXBQbGFjaW5nR3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2XCIpO1xuICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4gdGhpcy5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoZSwgZ3JpZENlbGwpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoZSwgZ3JpZENlbGwpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoZSwgZ3JpZENlbGwpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBcbiAgICBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoZXZlbnQsIGdyaWRDZWxsKXtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSB0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKTtcblxuICAgICAgICBjb25zdCByb3cgPSBncmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGNvbCA9IGdyaWRDZWxsLmdldEF0dHJpYnV0ZShcImNvbFwiKTtcbiAgICAgICAgbGV0IG4gPSA1O1xuICAgICAgICBsZXQgbmV4dENlbGxzID0gW107XG4gICAgICAgIGxldCBjZWxsQXZhaWxhYmlsaXR5ID0gdHJ1ZTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbjsgaSsrKXtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIke3Jvd31cIl1bY29sPVwiJHsrY29sICsgaX1cIl1gKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYoKCFjZWxsKSB8fCBjZWxsLmdldEF0dHJpYnV0ZShcInNoaXBQbGFjZWRcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgICAgICBjZWxsQXZhaWxhYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChjZWxsQXZhaWxhYmlsaXR5KXtcbiAgICAgICAgICAgIG5leHRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiKSBjZWxsLnNldEF0dHJpYnV0ZShcInNoaXBQbGFjZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZXZlbnRcIiwgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG4gICAgY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKSA9PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24uc2V0QXR0cmlidXRlKFwib3JpZW50YXRpb25cIiwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5jb25zdCBkb20gPSBuZXcgRE9NKCk7XG5kb20ucGxhY2VTaGlwcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==