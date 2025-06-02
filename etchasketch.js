function createGrid(numofsquares)
{
    let squareX = container.clientWidth / numofsquares;
    let squareY = container.clientHeight / numofsquares;
    let gridSquares = [[]];
    for (i = 0; i < numofsquares; i++)
    {
        gridSquares.push([]);
        for (y = 0; y < numofsquares; y++)
        {
            let gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridSquare.style.width = squareX.toString() + "px";
            gridSquare.style.height = squareY.toString() + "px";
            gridSquare.style.backgroundColor = '#'+(Math.random()*(1<<24)|0).toString(16);

            container.appendChild(gridSquare);
            gridSquares[i].push(gridSquare);
        }
    }


    for( const row of gridSquares)
    {
        for (const square of row)
        {
            square.addEventListener("mouseenter", gridSquareMouseEnter);
            square.addEventListener("mouseleave", gridSquareMouseExit);
        }
    }


    return gridSquares;
}

function clearGrid()
{
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function gridSquareMouseEnter(e) {
    e.target.style.backgroundColor = "green";
}

function gridSquareMouseExit(e) {
    e.target.style.backgroundColor = "white";
}

function handleGenerateGridButton(e) {
    let promptString = prompt("Enter number of squares per side: ");
    let numberPerSide = +promptString;

    clearGrid();
    createGrid(numberPerSide);
}


const container = document.querySelector(".container");
let grid = createGrid(16);

const generateGridButton = document.querySelector(".btn");
generateGridButton.addEventListener("click", handleGenerateGridButton);


