const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0, minutes = 0, hours = 0;
let leadingSec = 0, leadingMin = 0, leadingHour = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch(){
    seconds++;

    if (seconds/60 === 1){
        seconds = 0;
        minutes++;

        if (minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if (seconds<10){
        leadingSec = "0" + seconds.toString();
    }else{
        leadingSec = seconds;
    }
    
    if (minutes<10){
        leadingMin = "0" + minutes.toString();
    }else{
        leadingMin = minutes;
    }
    
    if (hours<10){
        leadingHour = "0" + hours.toString();
    }else{
        leadingHour = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHour+":"+leadingMin+":"+leadingSec;
}

// window.setInterval(stopWatch, 1000);
startStopBtn.addEventListener('click', function(){
    if (timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener('click', function(){
    window.clearInterval(timerInterval);

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
})

