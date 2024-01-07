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
        // Ships which are to be placed in the board itself.
        this.shipstoPlace = [
            new Ship("carrier", 5),
            new Ship("battleship", 4),
            new Ship("destroyer", 3),
            new Ship("submarine", 3),
            new Ship("patrolBoat", 2)
        ]
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

        // Event Listeners for each cell to check hover and click events
        // and change Background colors accordingly.
        boardGridCells.forEach((gridCell) => {
                gridCell.addEventListener("mouseover", (e) => this.changeBackgroundColor(e, boardGridCells));
                gridCell.addEventListener("click", (e) => this.changeBackgroundColor(e, boardGridCells));
                gridCell.addEventListener("mouseout", (e) => this.changeBackgroundColor(e, boardGridCells));
        })

    }

    
    changeBackgroundColor(event, boardGridCells){
        const orientation = this.currentShipIcon.getAttribute("orientation");
        const currentGridCell = event.target;
        const row = currentGridCell.getAttribute("row");
        const col = currentGridCell.getAttribute("col");

        let nextCells = [];
        let cellAvailability = true;
        let currentShip = this.shipstoPlace[0];
        let length = currentShip.getLength();

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
                this.shipstoPlace.shift();  // To get the next element at first index

                // Creates a clone of each cell and replaces with original one
                // to remove all the event Listeners from it
                // when no ships are left to be placed. 
                // (Thanks to ChatGPT for helping :p)
                if(this.shipstoPlace[0]){
                    // changes the ship icon according to the length of the ship to be placed.
                    this.updateCurrentShipIcon(this.shipstoPlace[0].getLength());
                } else {
                    boardGridCells.forEach((cell) => {
                        let clone = cell.cloneNode(true);
                        cell.parentNode.replaceChild(clone, cell);
                    })
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

}

const dom = new DOM();
dom.placeShips();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQiwyQkFBMkIsUUFBUTtBQUNuQztBQUNBLGdEQUFnRCxFQUFFO0FBQ2xELGdEQUFnRCxFQUFFO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQSxtR0FBbUcsSUFBSSxVQUFVLFNBQVM7QUFDMUg7QUFDQSxjQUFjO0FBQ2QsbUdBQW1HLFNBQVMsVUFBVSxJQUFJO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50aW1lc0hpdCA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICB9XG4gICAgXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy50aW1lc0hpdDtcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICAgIH1cbn1cblxuXG5jbGFzcyBHYW1lYm9hcmR7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgICAgIFtcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiXSxcbiAgICAgICAgXVxuICAgIH1cblxuICAgIC8vICBoZWFkQ29vcmRzIGlzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgaGVhZCBvZiB0aGUgc2hpcC5cbiAgICAvLyAgb3JpZW50YXRpb24gaXMgZWl0aGVyIGhvcml6b250YWwgb3IgdmVydGljYWwuXG4gICAgcGxhY2VTaGlwKHNoaXAsIGhlYWRDb29yZHMsIG9yaWVudGF0aW9uKXtcbiAgICAgICAgbGV0IFt4LCB5XSA9IGhlYWRDb29yZHM7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikgICAgdGhpcy5ib2FyZFt4XVt5K2ldID0gc2hpcDtcbiAgICAgICAgICAgIGVsc2UgaWYob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikgdGhpcy5ib2FyZFt4K2ldW3ldID0gc2hpcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRzKXtcbiAgICAgICAgbGV0IFt4LCB5XSA9IGNvb3JkcztcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuYm9hcmRbeF1beV0gIT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IFwiT1wiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gXCJYXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0lmQWxsU2hpcHNTdW5rKCl7XG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaChmdW5jdGlvbihyb3cpe1xuICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24oY2VsbCl7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGNlbGwgIT0gXCJzdHJpbmdcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5cbmNsYXNzIFBsYXllcntcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMudG90YWxDb29yZHMoKTtcbiAgICB9XG5cbiAgICB0b3RhbENvb3Jkcygpe1xuICAgICAgICBsZXQgdGVtcCA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGVtcC5wdXNoKFtpLGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cbiAgICBmaWx0ZXJPdXRTaG9vdGVkQ29vcmRpbmF0ZShjb29yZCl7XG4gICAgICAgIHRoaXMubm90U2hvb3RlZCA9IHRoaXMubm90U2hvb3RlZC5maWx0ZXIoKGMpID0+e1xuICAgICAgICAgICAgcmV0dXJuIChjWzBdICE9PSBjb29yZFswXSkgJiYgKGNbMV0gIT09IGNvb3JkWzFdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRm9yIENvbXB1dGVyIHRvIHBpY2sgYSByYW5kb20gY29vcmRpbmF0ZSB0byBzaG9vdFxuICAgIGNob29zZVJhbmRvbUNvb3JkaW5hdGUoKXtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZSA9IHRoaXMubm90U2hvb3RlZFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubm90U2hvb3RlZC5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZmlsdGVyT3V0U2hvb3RlZENvb3JkaW5hdGUocmFuZG9tQ29vcmRpbmF0ZSk7XG4gICAgfVxufVxuXG5cbmNsYXNzIERPTXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyBTaGlwcyB3aGljaCBhcmUgdG8gYmUgcGxhY2VkIGluIHRoZSBib2FyZCBpdHNlbGYuXG4gICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlID0gW1xuICAgICAgICAgICAgbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJiYXR0bGVzaGlwXCIsIDQpLFxuICAgICAgICAgICAgbmV3IFNoaXAoXCJkZXN0cm95ZXJcIiwgMyksXG4gICAgICAgICAgICBuZXcgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgICAgICAgICAgIG5ldyBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKVxuICAgICAgICBdXG4gICAgICAgIHRoaXMuc2hpcFBsYWNpbmdHcmlkID0gdGhpcy5jcmVhdGVCb2FyZEdyaWQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmJvYXJkR3JpZFwiKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwUGxhY2luZ0FyZWEgLmN1cnJlbnRTaGlwSWNvblwiKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZUJvYXJkR3JpZChzaGlwUGxhY2luZ0dyaWQpe1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gc2hpcFBsYWNpbmdHcmlkO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcInJvd1wiLCBgJHtpfWApO1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnNldEF0dHJpYnV0ZShcImNvbFwiLCBgJHtqfWApXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRHcmlkO1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwcygpe1xuICAgICAgICB0aGlzLnVwZGF0ZUhvdmVyRWZmZWN0KCk7XG4gICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFNoaXBJY29uT3JpZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICB1cGRhdGVIb3ZlckVmZmVjdCgpe1xuICAgICAgICBjb25zdCBib2FyZEdyaWRDZWxscyA9IHRoaXMuc2hpcFBsYWNpbmdHcmlkLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG5cbiAgICAgICAgLy8gRXZlbnQgTGlzdGVuZXJzIGZvciBlYWNoIGNlbGwgdG8gY2hlY2sgaG92ZXIgYW5kIGNsaWNrIGV2ZW50c1xuICAgICAgICAvLyBhbmQgY2hhbmdlIEJhY2tncm91bmQgY29sb3JzIGFjY29yZGluZ2x5LlxuICAgICAgICBib2FyZEdyaWRDZWxscy5mb3JFYWNoKChncmlkQ2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHRoaXMuY2hhbmdlQmFja2dyb3VuZENvbG9yKGUsIGJvYXJkR3JpZENlbGxzKSk7XG4gICAgICAgICAgICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcihlLCBib2FyZEdyaWRDZWxscykpO1xuICAgICAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4gdGhpcy5jaGFuZ2VCYWNrZ3JvdW5kQ29sb3IoZSwgYm9hcmRHcmlkQ2VsbHMpKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIFxuICAgIGNoYW5nZUJhY2tncm91bmRDb2xvcihldmVudCwgYm9hcmRHcmlkQ2VsbHMpe1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpO1xuICAgICAgICBjb25zdCBjdXJyZW50R3JpZENlbGwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHJvdyA9IGN1cnJlbnRHcmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJyb3dcIik7XG4gICAgICAgIGNvbnN0IGNvbCA9IGN1cnJlbnRHcmlkQ2VsbC5nZXRBdHRyaWJ1dGUoXCJjb2xcIik7XG5cbiAgICAgICAgbGV0IG5leHRDZWxscyA9IFtdO1xuICAgICAgICBsZXQgY2VsbEF2YWlsYWJpbGl0eSA9IHRydWU7XG4gICAgICAgIGxldCBjdXJyZW50U2hpcCA9IHRoaXMuc2hpcHN0b1BsYWNlWzBdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIke3Jvd31cIl1bY29sPVwiJHsrY29sICsgaX1cIl1gKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNoaXBQbGFjaW5nQXJlYSAuYm9hcmRHcmlkIGRpdltyb3c9XCIkeytyb3cgKyBpfVwiXVtjb2w9XCIke2NvbH1cIl1gKTtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMucHVzaChjdXJyZW50Q2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgaWYoKCFjZWxsKSB8fCBjZWxsLmdldEF0dHJpYnV0ZShcInNoaXBQbGFjZWRcIikgPT09IFwidHJ1ZVwiKXtcbiAgICAgICAgICAgICAgICBjZWxsQXZhaWxhYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY3VycmVudEdyaWRDZWxsLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY2VsbEF2YWlsYWJpbGl0eSl7XG4gICAgICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZXZlbnRcIiwgZXZlbnQudHlwZSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZihldmVudC50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZShcInNoaXBQbGFjZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHN0b1BsYWNlLnNoaWZ0KCk7ICAvLyBUbyBnZXQgdGhlIG5leHQgZWxlbWVudCBhdCBmaXJzdCBpbmRleFxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlcyBhIGNsb25lIG9mIGVhY2ggY2VsbCBhbmQgcmVwbGFjZXMgd2l0aCBvcmlnaW5hbCBvbmVcbiAgICAgICAgICAgICAgICAvLyB0byByZW1vdmUgYWxsIHRoZSBldmVudCBMaXN0ZW5lcnMgZnJvbSBpdFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gbm8gc2hpcHMgYXJlIGxlZnQgdG8gYmUgcGxhY2VkLiBcbiAgICAgICAgICAgICAgICAvLyAoVGhhbmtzIHRvIENoYXRHUFQgZm9yIGhlbHBpbmcgOnApXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaGlwc3RvUGxhY2VbMF0pe1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGFuZ2VzIHRoZSBzaGlwIGljb24gYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnRTaGlwSWNvbih0aGlzLnNoaXBzdG9QbGFjZVswXS5nZXRMZW5ndGgoKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRHcmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsb25lID0gY2VsbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lLCBjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBjaGFuZ2VDdXJyZW50U2hpcEljb25PcmllbnRhdGlvbigpe1xuICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNoaXBJY29uLmdldEF0dHJpYnV0ZShcIm9yaWVudGF0aW9uXCIpID09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcInZlcnRpY2FsXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTaGlwSWNvbi5zZXRBdHRyaWJ1dGUoXCJvcmllbnRhdGlvblwiLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICB1cGRhdGVDdXJyZW50U2hpcEljb24obGVuZ3RoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U2hpcEljb24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNoaXBJY29uLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgZG9tID0gbmV3IERPTSgpO1xuZG9tLnBsYWNlU2hpcHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=