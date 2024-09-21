let min = 0;
let second = 0;
let counter = 0;
let interval = null;
document.getElementById("time").innerHTML = "00"+":"+"00"+"."+"00";

function startwatch() {
    if (!interval) {
        interval = setInterval(timeupdate , 10);   
    } 
}

function stopwatch() {
    clearInterval(interval);
    interval = null;  
}

function stopreset() {
    clearInterval(interval);
    interval = null;
    counter = 0;
    second = 0;
    min = 0;
    document.getElementById("time").innerHTML = "00"+":"+"00"+"."+"00";
    document.getElementById("laptimestore").innerHTML = "";
    let lapText = document.getElementById("lapstext");
    lapText.textContent = "";
}

function lap() {
    let lapdata = document.createElement("div");
    lapdata.className = "lapTime";
    lapdata.textContent = laptime; 

    let lapText = document.getElementById("lapstext"); // Fixed method name
    lapText.textContent = "Laps";

    document.getElementById("laptimestore").appendChild(lapdata); 
}


function timeupdate() {
    counter++;
    if (counter === 100) {
        counter = 0;
        second++;
    }
    if (second === 60) {
        min++;
        second = 0;
    }

    laptime = (min < 10 ? "0"+min : min) +":" + (second < 10 ? "0" + second : second)+"."+ (counter < 10 ? "0" + counter : counter);

    document.getElementById("time").innerHTML = (min < 10 ? "0"+min : min) + ":" + (second < 10 ? "0"+second : second) +"."+ (counter < 10 ? "0"+counter : counter); 
}

document.getElementById("stopwatchstart").addEventListener("click" , startwatch);
document.getElementById("stopwatchstop").addEventListener("click" , stopwatch);
document.getElementById("stopwatchreset").addEventListener("click" , stopreset);
document.getElementById("lap").addEventListener("click" , lap);