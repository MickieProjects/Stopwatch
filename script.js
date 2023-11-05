
let time = document.getElementById('timer')
let hr = 0
let min = 0
let sec = 0
let stopTime = true

// Start Timer
function startTimer() {
    if (startTimer == true) {
        stopTime = false
        timeCycle()
    }
}

// Stop Timer
fun