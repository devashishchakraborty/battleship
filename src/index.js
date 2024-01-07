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
        this.shipPlacingGrid = this.createBoardGrid(document.querySelector(".shipPlacingArea .boardGrid"));
        this.currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");

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

        // Creating an array of cells to be modified.
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