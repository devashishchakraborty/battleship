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
        this.updateHoverEffect();
        this.changeCurrentShipIconOrientation();
    }

    updateHoverEffect(){
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");
        
        boardGridCells.forEach((gridCell) => {
            gridCell.addEventListener("mouseover", () => this.changeBackgroundColor(gridCell, "--cambridge-blue"));
            gridCell.addEventListener("mouseout", () => this.changeBackgroundColor(gridCell, "--tea-green"));
            // gridCell.addEventListener("click", () => {
            //     if (+col + n - 1 <= 9)   changeBackgroundColor(hoveringCells, "--blue-munsell")
            // });
        })
    }

    
    changeBackgroundColor(gridCell, color){
        const currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");
        const orientation = currentShipIcon.getAttribute("orientation");

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

    
    changeCurrentShipIconOrientation(){
        const currentShipIcon = document.querySelector(".shipPlacingArea .currentShipIcon");
        currentShipIcon.addEventListener("click", () => {
            if (currentShipIcon.getAttribute("orientation") == "horizontal"){
                currentShipIcon.style.flexDirection = "column";
                currentShipIcon.setAttribute("orientation", "vertical");
            } else {
                currentShipIcon.style.flexDirection = "row";
                currentShipIcon.setAttribute("orientation", "horizontal");
            }
        })
    }

}

const dom = new DOM();
dom.placeShips();