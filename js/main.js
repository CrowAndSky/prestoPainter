"use strict"

const zz = function(toConsole) {
  console.log(toConsole)
}

const testThis = function () {
    zz('ttttt')
    (function(){
        console.log('WWWWWWWWW')
    })()
}

let num2 = 10
let num = 3.14
num %= 2

zz(num)


let sourceCanvas
let sourceCtx
// const processedCanvas = document.createElement('canvas')

// -------------------------------------------------
// After DOM load, create a new image in memory and add a listener on the load event.
// Then update the image source, triggering the parsing
// -------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    sourceCanvas = document.getElementById('sourceCanvas')
    sourceCtx = sourceCanvas.getContext('2d')

    let imageObj = new Image()
    imageObj.onload = function() {
        testThis()
        sourceCtx.drawImage(imageObj, 0, 0)
    // parseImage(this)
    }
    imageObj.crossOrigin = 'anonymous'
    imageObj.src = './images/babbage_clean.jpg'
})

// (function(){
//     console.log('eeee')
// })()
/*


















let invert = function() {
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
        data[i]     = 255 - data[i]
        data[i + 1] = 255 - data[i + 1]
        data[i + 2] = 255 - data[i + 2]
    }
    ctx.putImageData(imageData, 0, 0)
}

let grayscale = function() {
    ctx.drawImage(img, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3
        data[i]     = avg // red
        data[i + 1] = avg // green
        data[i + 2] = avg // blue
    }
    ctx.putImageData(imageData, 0, 0)
}

const inputs = document.querySelectorAll('[name=color]')
for (const input of inputs) {
    input.addEventListener("change", function(evt) {
        switch (evt.target.value) {
            case "inverted":
                return invert()
            case "grayscale":
                return grayscale()
            default:
                return original()
        }
    })
}


*/