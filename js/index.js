// event listeners 

// mouseover & mouseleave
document.querySelectorAll('img')
  .forEach(elem => {
    elem.addEventListener('mouseover', event => event.target.style.opacity = 2)
    console.log(`mouseover event on ${elem}`)
    elem.addEventListener('mouseleave', event => event.target.style.opacity = 1.5)
    console.log(`mouseover event on ${elem}`)
  })

//key press
document.querySelector('html').addEventListener('keypress', event => {
  console.log(`Key press`)
  event.target.style.backgroundColor = 'crimson'
})

// wheel
document.querySelector('html').addEventListener('wheel', event => {
  console.log(`wheel scroll`)
  event.target.style.backgroundColor = 'teal'
})

// drag / drop
const dragStart = (e) => {
  initialX = e.clientX - xOffset
  initialY = e.clientY - yOffset

  if (e.target) {
    active = true
  }
}

const drop = () =>{
  initialX = currentX
  initialY = currentY

  active = false
}

const drag = (e) => {
  if (active) {

    e.preventDefault()

    currentX = e.clientX - initialX
    currentY = e.clientY - initialY

    xOffset = currentX
    yOffset = currentY

    setTranslate(currentX, currentY, e.target)
  }
}

const setTranslate = (xPos, yPos, el) => {
  el.style.transform = `translate3d(${xPos}px,  ${yPos}px, 0)`
}


document.querySelectorAll('img').forEach(elem => {
  elem.draggable = true
  elem.ondragstart = dragStart
})

const dropZone = document.querySelector('.home')

let active = false
let currentX
let currentY
let initialX
let initialY
let xOffset = 0
let yOffset = 0

dropZone.ondragover = drag
dropZone.ondrop = drop


// load
window.addEventListener('load', () => {
  console.log(`site loaded!`)
  document.querySelectorAll('h1, h2, h4').forEach(elem => {
    elem.textContent = `site loaded!`
  })
})

// focus
// document.querySelector('.text-content h2').addEventListener('focus', (e) => {
//   console.log(`Event is: ${JSON.stringify(e)}`)
//   e.target.style.color = 'purple'
// })

// resize
window.addEventListener('resize', (e) => {
  alert(`Page reset`)
  location.reload()
})

// scroll
window.addEventListener('scroll', (e) => {
  console.log(`Scroll event: ${e}`)

  document.querySelectorAll('p').forEach(elem => {
    elem.style.opacity = 0.5
  })
})

// select
// code based on MDN example: https://developer.mozilla.org/en-US/docs/Web/Events/select#Example
const input = document.createElement('input')
input.value = `select some text in this element.`
input.setAttribute(
  `style`,
  `
    display: block;
    width: 35%;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 1.5rem;
    text-align: center;
    `
)
document.querySelector('footer').prepend(input)

input.addEventListener('select', e => {
  let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)
  console.log(`${selection}`)
  const selectedText = document.createElement('p')
  selectedText.textContent = `You selected: ${selection}`
  document.querySelector('footer').prepend(selectedText)
})

// double click
document.querySelectorAll('.btn ').forEach(elem => {
  elem.addEventListener('doubleclick', (e) => {
    console.log(`Event is: ${JSON.stringify(e)}`)
    e.target.style.color = 'yellow'
    e.target.style.backgroundColor = 'lightgrey'
    e.target.textContent = 'Double-Clicked!'
  })
})