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
        
        const currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");
        this.updateHoverEffect(currentShipIcon.getAttribute("orientation"));
        this.changeCurrentShipIconOrientation(currentShipIcon);
        
    }

    updateHoverEffect(orientation){
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");
        
        boardGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", () => this.changeBackgroundColor(gridCell, orientation, "--cambridge-blue"));
            gridCell.addEventListener("mouseout", () => this.changeBackgroundColor(gridCell, orientation, "--tea-green"));
            // gridCell.addEventListener("click", () => {
            //     if (+col + n - 1 <= 9)   changeBackgroundColor(hoveringCells, "--blue-munsell")
            // });
        })
    }

    
    changeBackgroundColor(gridCell, orientation, color){
        const row = gridCell.getAttribute("row");
        const col = gridCell.getAttribute("col");
        const hoveringCells = [];
        let n = 5;

        for(let i = 0; i < n; i++){
            if (orientation === "horizontal"){
                hoveringCells.push(document.querySelector(
                    `.shipPlacingArea .boardGrid div[row="${row}"][col="${+col + i}"]`
                ));
            } else if (orientation === "vertical"){
                hoveringCells.push(document.querySelector(
                    `.shipPlacingArea .boardGrid div[row="${+row + i}"][col="${col}"]`
                ));
            }
        }

        hoveringCells.forEach(function(cell){
            if (cell)   cell.style.backgroundColor = `var(${color})`;
        })
    }

    
    changeCurrentShipIconOrientation(currentShipIcon){
        currentShipIcon.addEventListener("click", () => {
            if (currentShipIcon.getAttribute("orientation") == "horizontal"){
                currentShipIcon.style.flexDirection = "column";
                currentShipIcon.setAttribute("orientation", "vertical");
            } else {
                currentShipIcon.style.flexDirection = "row";
                currentShipIcon.setAttribute("orientation", "horizontal");
            }
            this.updateHoverEffect(currentShipIcon.getAttribute("orientation"));
        })
    }

}

const dom = new DOM();
dom.placeShips();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRCxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBLDREQUE0RCxJQUFJLFVBQVUsU0FBUztBQUNuRjtBQUNBLGNBQWM7QUFDZDtBQUNBLDREQUE0RCxTQUFTLFVBQVUsSUFBSTtBQUNuRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsTUFBTTtBQUNsRSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgfVxuICAgIFxuICAgIGlzU3Vuaygpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IHRoaXMudGltZXNIaXQ7XG4gICAgfVxufVxuXG5cbmNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gICAgICAgIHRoaXMuZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHRoaXMuc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHRoaXMucGF0cm9sQm9hdCA9IG5ldyBTaGlwKDIpO1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgLy8gIGhlYWRDb29yZHMgaXMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgIC8vICBvcmllbnRhdGlvbiBpcyBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbC5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaGVhZENvb3Jkcywgb3JpZW50YXRpb24pe1xuICAgICAgICBsZXQgW3gsIHldID0gaGVhZENvb3JkcztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSAgICB0aGlzLmJvYXJkW3hdW3kraV0gPSBzaGlwO1xuICAgICAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB0aGlzLmJvYXJkW3graV1beV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZHMpe1xuICAgICAgICBsZXQgW3gsIHldID0gY29vcmRzO1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFt4XVt5XSAhPSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJPXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlhcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmsoKXtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKGZ1bmN0aW9uKHJvdyl7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihjZWxsKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgY2VsbCAhPSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cblxuY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpe1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy50b3RhbENvb3JkcygpO1xuICAgIH1cblxuICAgIHRvdGFsQ29vcmRzKCl7XG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuICAgIGZpbHRlck91dFNob290ZWRDb29yZGluYXRlKGNvb3JkKXtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy5ub3RTaG9vdGVkLmZpbHRlcigoYykgPT57XG4gICAgICAgICAgICByZXR1cm4gKGNbMF0gIT09IGNvb3JkWzBdKSAmJiAoY1sxXSAhPT0gY29vcmRbMV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGb3IgQ29tcHV0ZXIgdG8gcGljayBhIHJhbmRvbSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpe1xuICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5ub3RTaG9vdGVkW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ub3RTaG9vdGVkLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShyYW5kb21Db29yZGluYXRlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRE9Ne1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgfVxuXG5cbiAgICBjcmVhdGVCb2FyZEdyaWQoc2hpcFBsYWNpbmdHcmlkKXtcbiAgICAgICAgbGV0IGJvYXJkR3JpZCA9IHNoaXBQbGFjaW5nR3JpZDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJyb3dcIiwgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoXCJjb2xcIiwgYCR7an1gKVxuICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hcHBlbmRDaGlsZChncmlkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkR3JpZDtcbiAgICB9XG5cblxuICAgIHBsYWNlU2hpcHMoKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcFBsYWNpbmdBcmVhIC5jdXJyZW50U2hpcEljb25cIik7XG4gICAgICAgIHRoaXMudXBkYXRlSG92ZXJFZmZlY3QoY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbihjdXJyZW50U2hpcEljb24pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVIb3ZlckVmZmVjdChvcmllbnRhdGlvbil7XG4gICAgICAgIGNvbnN0IGJvYXJkR3JpZENlbGxzID0gdGhpcy5zaGlwUGxhY2luZ0dyaWQucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKTtcbiAgICAgICAgXG4gICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGdyaWRDZWxsKSA9PiB7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHRoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKGdyaWRDZWxsLCBvcmllbnRhdGlvbiwgXCItLWNhbWJyaWRnZS1ibHVlXCIpKTtcbiAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcihncmlkQ2VsbCwgb3JpZW50YXRpb24sIFwiLS10ZWEtZ3JlZW5cIikpO1xuICAgICAgICAgICAgLy8gZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoK2NvbCArIG4gLSAxIDw9IDkpICAgY2hhbmdlQmFja2dyb3VuZENvbG9yKGhvdmVyaW5nQ2VsbHMsIFwiLS1ibHVlLW11bnNlbGxcIilcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIGNoYW5nZUJhY2tncm91bmRDb2xvcihncmlkQ2VsbCwgb3JpZW50YXRpb24sIGNvbG9yKXtcbiAgICAgICAgY29uc3Qgcm93ID0gZ3JpZENlbGwuZ2V0QXR0cmlidXRlKFwicm93XCIpO1xuICAgICAgICBjb25zdCBjb2wgPSBncmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG4gICAgICAgIGNvbnN0IGhvdmVyaW5nQ2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IG4gPSA1O1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuOyBpKyspe1xuICAgICAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgICAgICAgaG92ZXJpbmdDZWxscy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7cm93fVwiXVtjb2w9XCIkeytjb2wgKyBpfVwiXWBcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIil7XG4gICAgICAgICAgICAgICAgaG92ZXJpbmdDZWxscy5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIGAuc2hpcFBsYWNpbmdBcmVhIC5ib2FyZEdyaWQgZGl2W3Jvdz1cIiR7K3JvdyArIGl9XCJdW2NvbD1cIiR7Y29sfVwiXWBcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhvdmVyaW5nQ2VsbHMuZm9yRWFjaChmdW5jdGlvbihjZWxsKXtcbiAgICAgICAgICAgIGlmIChjZWxsKSAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigke2NvbG9yfSlgO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIGNoYW5nZUN1cnJlbnRTaGlwSWNvbk9yaWVudGF0aW9uKGN1cnJlbnRTaGlwSWNvbil7XG4gICAgICAgIGN1cnJlbnRTaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTaGlwSWNvbi5nZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiKSA9PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBJY29uLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2hpcEljb24uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XG4gICAgICAgICAgICAgICAgY3VycmVudFNoaXBJY29uLnNldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlSG92ZXJFZmZlY3QoY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuY29uc3QgZG9tID0gbmV3IERPTSgpO1xuZG9tLnBsYWNlU2hpcHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=