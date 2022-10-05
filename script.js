const container = document.querySelector('.container');
const removeBgBtn = document.querySelector('.remove');



function createGridSmall() {
    container.classList.add('containerSmall');
    for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

}

function createGridMedium() {
    container.classList.add('containerMed');
    for (let i = 0; i < 1024; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}


function createGridBig() {
    container.classList.add('containerBig');
    for (let i = 0; i < 4096; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function createGridHuge() {
    container.classList.add('containerHuge');
    for (let i = 0; i < 10000; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function paint() {
    const paintSquare = document.querySelectorAll('.square');
    paintSquare.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.classList.add('fill');
        })
    })
}

function removeBg() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(el => {
        el.classList.remove('fill')
    })

}


removeBgBtn.addEventListener('click', removeBg);
addEventListener('mouseover', paint);
// createGridSmall();
// createGridMedium();
createGridBig();
// createGridHuge();