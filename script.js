const container = document.querySelector('.container');
const removeBgBtn = document.querySelector('.remove');



function createGrid() {
    for (let i = 0; i < 256; i++) {
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
// addEventListener('mouseover', paint)
addEventListener('mouseover', paint);
// addEventListener('click', listener)
createGrid();