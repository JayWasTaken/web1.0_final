const display = document.querySelector('#display')
const inputSize = document.querySelector('#font-size')
const showSize = document.querySelector('#show-size')
const inputFont = document.querySelector('#font-select')
const showFont = document.querySelector('#show-font')
const inputColor = document.querySelector('#font-color')
const showColor = document.querySelector('#show-color')
const inputBgColor = document.querySelector('#background-color')
const showBgColor = document.querySelector('#show-bg-color')
const text = document.querySelector('#enter-text')

inputSize.addEventListener('input', handleInput)
inputFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
text.addEventListener('input', handleInput)

function handleInput() {
    const fontSize = inputSize.value
    display.style.fontSize = fontSize + 'px'
    showSize.innerHTML = fontSize

    const selectFont = inputFont.value
    display.style.fontFamily = selectFont
    showFont.innerHTML = selectFont

    const selectColor = inputColor.value
    display.style.color = selectColor
    showColor.innerHTML = selectColor

    const selectBgColor = inputBgColor.value
    display.style.backgroundColor = selectBgColor
    showBgColor.innerHTML = selectBgColor

    const displayText = text.value
    display.innerHTML = displayText
}