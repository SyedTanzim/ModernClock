document.getElementById("timecounter").innerHTML = "00:00";

let intervalId;
let isRunning = false;
let remainingSeconds = 0;

function timer() {
    if (isRunning) {
        return;
    }

    let minInput = document.getElementById("minInput").value;
    let secInput = document.getElementById("secInput").value;

    minInput = parseInt(minInput, 10) || 0;
    secInput = parseInt(secInput, 10) || 0;

    if (isNaN(minInput) || minInput < 0 || isNaN(secInput) || secInput < 0) {
        alert("Enter Valid Value");
        return;
    }

    let totalseconds = remainingSeconds || (minInput * 60 + secInput);

    function displayUpdate() {
        let minutes = Math.floor(totalseconds / 60);
        let seconds = totalseconds % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        document.getElementById("timecounter").innerHTML = minutes + ":" + seconds;
    }

    document.getElementById("minInput").disabled = true;
    document.getElementById("secInput").disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false;

    displayUpdate();

    intervalId  = setInterval(() => {
        totalseconds--;
        remainingSeconds = totalseconds;
        if (totalseconds < 0) {
            clearInterval(intervalId);
            alert("time's Up")
            document.getElementById("minInput").disabled = false;
            document.getElementById("start").disabled = false;
            document.getElementById("secInput").disabled = false;
            document.getElementById("stop").disabled = false;
            document.getElementById("reset").disabled = false;
            document.getElementById("timecounter").innerHTML = "00:00";
            isRunning = false;
            remainingSeconds = 0;

        }

        else {
            displayUpdate();
        }

    }, 1000);

    isRunning = true;
}

function stoptimer() {
    if (!isRunning) {
        return;
    }

    clearInterval(intervalId);
    document.getElementById("minInput").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("secInput").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = false;
    isRunning = false;
    remainingSeconds = totalseconds;
}

function reset() {
    clearInterval(intervalId);
    document.getElementById("minInput").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("secInput").disabled = false;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = false;
    document.getElementById("reset").disabled = false; 
    document.getElementById("minInput").value = "";
    document.getElementById("secInput").value = "";
    document.getElementById("timecounter").innerHTML = "00:00";
    isRunning = false;
    remainingSeconds = 0;
}

document.getElementById("stop").addEventListener("click", stoptimer);
document.getElementById("start").addEventListener("click", timer);  
document.getElementById("reset").addEventListener("click", reset);    