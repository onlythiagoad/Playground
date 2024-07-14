const inputBackground = document.querySelector('#ibackGround')
const inputRadius = document.querySelector('#iborderRadius')
const inputColorBorder = document.querySelector('#icolorBorder')
const gradient = document.querySelector('#igradient')
const widthInput = document.querySelector("#iwidthInput")
const heightInput = document.querySelector('#iheightInput')
const caixa = document.getElementById('cubo')



inputBackground.addEventListener("input",()=>{
    caixa.style.backgroundColor = inputBackground.value
})

function emptyBorder(){
    if(inputRadius.value == ''){
        caixa.style.borderRadius = ''
    }
}

inputRadius.addEventListener("input",()=>{
    caixa.style.borderRadius = `${inputRadius.value}px`
    emptyBorder()
})

inputRadius.addEventListener('keydown',(evt)=>{
    if(evt.key === '%'){
        caixa.style.borderRadius = `${inputRadius.value}%`
        emptyBorder()
    }
})

// const color1 = 'blue'
// const color2 = 'red'
// const position = 'to top'

// // caixa.style.backgroundImage = `linear-gradient(${position}, ${color1}, ${color2})`

inputColorBorder.addEventListener("input",()=>{
    caixa.style.borderColor = inputColorBorder.value
})


gradient.addEventListener("input",()=>{
    caixa.style.backgroundImage = `linear-gradient(${gradient.value})`
    if(gradient.value == ''){
        caixa.style.backgroundImage = ''
    }
})

widthInput.addEventListener("input",()=>{
    caixa.style.width = `${widthInput.value}px`

    if(widthInput.value > 450){
        caixa.style.width = `${200}px`
        widthInput.value = ''
        alert('VALOR INAPROPRIADO')
    }
})

heightInput.addEventListener("input",()=>{
    caixa.style.height = `${heightInput.value}px`
    if(heightInput.value > 300){
        caixa.style.height = `${200}px`
        heightInput.value = ''
        alert('VALOR INAPROPRIADO')
    }
})
