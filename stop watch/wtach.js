var mili = 0;
var sec = 0;
var min = 0;
var flag = 0;
var interval
var out

function timer() {
    mili++
    document.getElementById('mili').innerHTML = mili
    if (mili >= 100) {
        document.getElementById('sec').innerHTML = sec
        mili = 0;
    }
    if (sec >= 60) {
        min++
        document.getElementById('min').innerHTML = min
        sec = 0
    }
}

function start() {
    if (flag == 0) {
        out = prompt('Enter your name')
        interval = setInterval(timer, 10)
        flag = 1
        document.getElementById('start').disabled = true
    }
}


function stop() {
    clearInterval(interval)
    document.getElementById('start').disabled = false
    flag = 0
    document.getElementById('output').innerHTML = out + ' is completed his task in ' + min + ':' + sec + ':' + mili
}
function reset() {
    min = 0
    sec = 0
    mili = 0
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec
    document.getElementById("mili").innerHTML = mili
    document.getElementById("output").innerHTML = ""
}