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
        let length = this.currentShipIcon.querySelectorAll("div").length;
        let nextCells = [];
        let cellAvailability = true;

        for(let i = 0; i < length; i++){
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
                if(event.type === "click") {
                    cell.setAttribute("shipPlaced", "true");
                    this.changeCurrentShipIcon(3);
                }
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


    changeCurrentShipIcon(length){
        this.currentShipIcon.textContent = "";
        for(let i = 0; i < length; i++){
            const div = document.createElement("div");
            this.currentShipIcon.appendChild(div);
        }
    }

}

const dom = new DOM();
dom.placeShips();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQiwyQkFBMkIsUUFBUTtBQUNuQztBQUNBLGdEQUFnRCxFQUFFO0FBQ2xELGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLG1HQUFtRyxJQUFJLFVBQVUsU0FBUztBQUMxSDtBQUNBLGNBQWM7QUFDZCxtR0FBbUcsU0FBUyxVQUFVLElBQUk7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoaXB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMudGltZXNIaXQgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuICAgIH1cblxuICAgIGhpdCgpe1xuICAgICAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgfVxuICAgIFxuICAgIGlzU3Vuaygpe1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IHRoaXMudGltZXNIaXQ7XG4gICAgfVxufVxuXG5cbmNsYXNzIEdhbWVib2FyZHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgICAgICAgdGhpcy5iYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gICAgICAgIHRoaXMuZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHRoaXMuc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gICAgICAgIHRoaXMucGF0cm9sQm9hdCA9IG5ldyBTaGlwKDIpO1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICAgICAgW1wiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCJdLFxuICAgICAgICBdXG4gICAgfVxuXG4gICAgLy8gIGhlYWRDb29yZHMgaXMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBoZWFkIG9mIHRoZSBzaGlwLlxuICAgIC8vICBvcmllbnRhdGlvbiBpcyBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbC5cbiAgICBwbGFjZVNoaXAoc2hpcCwgaGVhZENvb3Jkcywgb3JpZW50YXRpb24pe1xuICAgICAgICBsZXQgW3gsIHldID0gaGVhZENvb3JkcztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSAgICB0aGlzLmJvYXJkW3hdW3kraV0gPSBzaGlwO1xuICAgICAgICAgICAgZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB0aGlzLmJvYXJkW3graV1beV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZHMpe1xuICAgICAgICBsZXQgW3gsIHldID0gY29vcmRzO1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5ib2FyZFt4XVt5XSAhPSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJPXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBcIlhcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrSWZBbGxTaGlwc1N1bmsoKXtcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKGZ1bmN0aW9uKHJvdyl7XG4gICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbihjZWxsKXtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgY2VsbCAhPSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cblxuY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpe1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy50b3RhbENvb3JkcygpO1xuICAgIH1cblxuICAgIHRvdGFsQ29vcmRzKCl7XG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goW2ksal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cblxuICAgIGZpbHRlck91dFNob290ZWRDb29yZGluYXRlKGNvb3JkKXtcbiAgICAgICAgdGhpcy5ub3RTaG9vdGVkID0gdGhpcy5ub3RTaG9vdGVkLmZpbHRlcigoYykgPT57XG4gICAgICAgICAgICByZXR1cm4gKGNbMF0gIT09IGNvb3JkWzBdKSAmJiAoY1sxXSAhPT0gY29vcmRbMV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGb3IgQ29tcHV0ZXIgdG8gcGljayBhIHJhbmRvbSBjb29yZGluYXRlIHRvIHNob290XG4gICAgY2hvb3NlUmFuZG9tQ29vcmRpbmF0ZSgpe1xuICAgICAgICBjb25zdCByYW5kb21Db29yZGluYXRlID0gdGhpcy5ub3RTaG9vdGVkW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ub3RTaG9vdGVkLmxlbmd0aClcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5maWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShyYW5kb21Db29yZGluYXRlKTtcbiAgICB9XG59XG5cblxuY2xhc3MgRE9Ne1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZUJvYXJkR3JpZChzaGlwUGxhY2luZ0dyaWQpe1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcInJvd1wiLCBgJHtpfWApO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNvbFwiLCBgJHtqfWApXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRHcmlkO1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwcygpe1xuICAgICAgICB0aGlzLnVwZGF0ZUhvdmVyRWZmZWN0KCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICB1cGRhdGVIb3ZlckVmZmVjdCgpe1xuICAgICAgICBjb25zdCBib2FyZEdyaWRDZWxscyA9IHRoaXMuc2hpcFBsYWNpbmdHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGJvYXJkR3JpZENlbGxzLmZvckVhY2goKGdyaWRDZWxsKSA9PiB7XG4gICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcihlLCBncmlkQ2VsbCkpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcihlLCBncmlkQ2VsbCkpO1xuICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChlKSA9PiB0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcihlLCBncmlkQ2VsbCkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIGNoYW5nZUJhY2tncm91bmRDb2xvcihldmVudCwgZ3JpZENlbGwpe1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IGdyaWRDZWxsLmdldEF0dHJpYnV0ZShcInJvd1wiKTtcbiAgICAgICAgY29uc3QgY29sID0gZ3JpZENlbGwuZ2V0QXR0cmlidXRlKFwiY29sXCIpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gdGhpcy5jdXJyZW50U2hpcEljb24ucXVlcnlTZWxlY3RvckFsbChcImRpdlwiKS5sZW5ndGg7XG4gICAgICAgIGxldCBuZXh0Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IGNlbGxBdmFpbGFiaWxpdHkgPSB0cnVlO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHtyb3d9XCJdW2NvbD1cIiR7K2NvbCArIGl9XCJdYCk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZCBkaXZbcm93PVwiJHsrcm93ICsgaX1cIl1bY29sPVwiJHtjb2x9XCJdYCk7XG4gICAgICAgICAgICAgICAgbmV4dENlbGxzLnB1c2goY3VycmVudENlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV4dENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmKCghY2VsbCkgfHwgY2VsbC5nZXRBdHRyaWJ1dGUoXCJzaGlwUGxhY2VkXCIpID09PSBcInRydWVcIil7XG4gICAgICAgICAgICAgICAgY2VsbEF2YWlsYWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGdyaWRDZWxsLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2VsbEF2YWlsYWJpbGl0eSl7XG4gICAgICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNoaXBQbGFjZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRTaGlwSWNvbigzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJldmVudFwiLCBldmVudC50eXBlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBjaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpe1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpID09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjaGFuZ2VDdXJyZW50U2hpcEljb24obGVuZ3RoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgZG9tID0gbmV3IERPTSgpO1xuZG9tLnBsYWNlU2hpcHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=