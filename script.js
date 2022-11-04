const container = document.querySelector('.container');
const removeBgBtn = document.querySelector('.remove');
const confirmBtn = document.querySelector('.confirm');
const gridSlider = document.querySelector('.gridSlider');
const rangeValue = document.querySelector('.rangeValue');
const blackBtn = document.querySelector('.black');
const randomBtn = document.querySelector('.random');


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
//random number 0-255 for color
function getRandomInt() {
    return Math.floor(Math.random() * 255);
}
//
function setRandomColor() {
    const paintSquares = document.querySelectorAll('.square');
    paintSquares.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`;
        })
    })
}

function paintBlack() {
    const paintSquare = document.querySelectorAll('.square');
    paintSquare.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.background = 'black';
        })
    })
}

//function that removes background color of squares
function removeBg() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('fill');
        square.removeAttribute('style');
    })

}
//function that removes squares and classes from a parent(which is a container)
function removeSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.remove('containerMed', 'containerSmall', 'containerLarge', 'containerExtraLarge', 'containerSuperLarge');
}

removeBgBtn.addEventListener('click', removeBg); //removes color
gridSlider.addEventListener('change', () => { //updates span with input.value
    rangeValue.innerHTML = gridSlider.value;
})
confirmBtn.addEventListener('click', () => {
    removeSquares();
    container.classList.remove('containerMed', 'containerSmall', 'containerLarge', 'containerExtraLarge', 'containerSuperLarge');

    if (gridSlider.value === '20') {
        createGridSmall();
    } else if (gridSlider.value === '40') {
        createGridMedium();
    } else if (gridSlider.value === '60') {
        createGridLarge();
    } else if (gridSlider.value === '80') {
        createGridExtraLarge();
    } else if (gridSlider.value === '100') {
        createGridSuperLarge();
    } else {
        alert('Something went wrong, try refreshing!')
    }
})

blackBtn.addEventListener('click', paintBlack);
randomBtn.addEventListener('click', setRandomColor);