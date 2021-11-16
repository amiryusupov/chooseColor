const container = document.querySelector('.colors')
const cards = document.querySelectorAll('.color')
var i = 1

document.body.addEventListener('keydown', (event)=> {
    event.preventDefault()
    if (event.shiftKey && event.keyCode === 9) {
        if(!container.classList.contains("colors-show")) {
            container.classList.add('colors-show')
        }
        else {
            cards[i].classList.remove('color-active')
            if (i < 4) {
                i++
            }
            else {
                i = 0
            }
            cards[i].classList.add('color-active')
        }
    }
})

document.body.addEventListener('keyup', (event) => {
    if(!event.shiftKey) {
        container.classList.remove("colors-show")
        colorChoosen = window.getComputedStyle(cards[i]).getPropertyValue('background-color')
        document.body.style.backgroundColor = colorChoosen
    }
})