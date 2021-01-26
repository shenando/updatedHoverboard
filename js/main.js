const container = document.getElementById('container')
const peachy = ['#FFAC81', '#FF928B', '#FEC3A6', '#EFE9AE', '#CDEAC0'] 
const icy = ['#0A369D', '#4472CA', '#5E7CE2', '#92B4F4', '#CFDEE7'] 
const lovey = ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF']   
const SQUARES = 500
const sb = document.querySelector('#colorScheme')


for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
    }


function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    if (sb.value === '1') {
        return peachy[Math.floor(Math.random() * peachy.length)]
    } else if (sb.value === '2') {
        return icy[Math.floor(Math.random() * icy.length)]
    } else if (sb.value === '3') {
        return lovey[Math.floor(Math.random() * lovey.length)]
    } else {
        return peachy[Math.floor(Math.random() * peachy.length)] 
    }
}