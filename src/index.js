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
        const boardGridCells = this.shipPlacingGrid.querySelectorAll("div");
        this.changeCurrentShipIconOrientation(currentShipIcon);
        // Trying to create hover effect for 5 squares first
        boardGridCells.forEach(function(gridCell){
            const row = gridCell.getAttribute("row");
            const col = gridCell.getAttribute("col");
            const nextCells = [];

            for(let i = 0; i < 5; i++){
                if (true){
                    nextCells.push(document.querySelector(
                        `.shipPlacingArea .boardGrid div[row="${row}"][col="${+col + i}"]`
                        ));
                }
                
            }
            
            gridCell.addEventListener("mouseover", function(){
                nextCells.forEach(function(cell){
                    if (cell)   cell.style.backgroundColor = "var(--cambridge-blue)";
                })
            })
            
            gridCell.addEventListener("mouseout", function(){
                nextCells.forEach(function(cell){
                    if (cell)   cell.style.backgroundColor = "var(--tea-green)";
    
                })
            })
        })
    }

    changeCurrentShipIconOrientation(currentShipIcon){
        currentShipIcon.addEventListener("click", function(event){
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