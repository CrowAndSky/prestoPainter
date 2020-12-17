const stateWrapper = document.getElementById('stateWrapper')
// const processedCanvas = document.createElement('canvas')
// const highlightShadowMap = document.getElementById('highlight_shadow_map')

function createHueAndLuminositymap() {
    // -------------------------------------------------
    // 
    // -------------------------------------------------
}



// -------------------------------------------------
// After DOM load, create a new image in memory and add a listener on the load event.
// Then update the image source, triggering the parsing
// -------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    // var imageObj = new Image()
    // imageObj.onload = function() {
    //     parseImage(this)
    // }
		// imageObj.src = './images/imgSegMap.png'
		let UIcounter = 0
		let currentNoiseMap
		//let UItimer 

    function CounterES6() {
			UIcounter = UIcounter + 1

			if (UIcounter > 5) {
				currentNoiseMap = UIcounter % 6
			} else {
				currentNoiseMap = UIcounter
			}

			console.log(currentNoiseMap)

			stateWrapper.className = 'state' + currentNoiseMap

			if (UIcounter === 72) {
				window.clearInterval(UItimer)
			} 
		}
		
		// let counterB = new CounterES6();
		let UItimer = window.setInterval(CounterES6, 500);
})

/*


*/