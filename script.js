const container = document.querySelector('.container');
const removeBgBtn = document.querySelector('.remove');
const confirmBtn = document.querySelector('.confirm');



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
    squares.forEach(square => {
        square.classList.remove('fill');
    })

}

function removeSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.remove('containerMed', 'containerSmall', 'containerLarge', 'containerExtraLarge', 'containerSuperLarge');
}

removeBgBtn.addEventListener('click', removeBg);
addEventListener('mouseover', paint);


const gridSlider = document.querySelector('.gridSlider');
const rangeValue = document.querySelector('.rangeValue');

gridSlider.addEventListener('change', () => {
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