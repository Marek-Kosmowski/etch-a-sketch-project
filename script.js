const container = document.querySelector('.container');
const removeBgBtn = document.querySelector('.remove');



function createGridSmall() {
    container.classList.add('containerSmall');
    for (let i = 0; i < 400; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

}

function createGridMedium() {
    container.classList.add('containerMed');
    for (let i = 0; i < 1600; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}


function createGridLarge() {
    container.classList.add('containerLarge');
    for (let i = 0; i < 3600; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}


function createGridExtraLarge() {
    container.classList.add('containerExtraLarge');
    for (let i = 0; i < 6400; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}

function createGridSuperLarge() {
    container.classList.add('containerSuperLarge');
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
createGridLarge();
// createGridExtraLarge();
// createGridSuperLarge();