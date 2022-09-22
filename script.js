const container = document.querySelector('.container');



function createGrid() {
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

}

createGrid();