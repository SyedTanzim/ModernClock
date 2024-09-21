let alarmDisabller = document.querySelector(".alarm");
let setAlarmButton = document.getElementById("setalarm");
let hourSelect = document.getElementById("alarmHour");
let minutesSelect = document.getElementById("alarmMinute");
let amPmSelect = document.getElementById("alarmAmPm");
let alarmTime = "";
let alarmSound = new Audio("iPhone Radar AlarmRingtone (Apple Sound) - Sound Effect for Editing.mp3")

for (let h = 12; h > 0; h--) {
    let hourString  = h < 10 ? "0"+h : h;
    let houroption = `<option value="${hourString}">${hourString}</option>`;
    hourSelect.insertAdjacentHTML("beforeend" , houroption)  
}

for (let m = 0; m < 60; m++) {
    let minString = m < 10 ? "0" + m : m;
    let minoption = `<option value="${minString}">${minString}</option>`;
    minutesSelect.insertAdjacentHTML("beforeend", minoption);
}

for (let i = 0; i < 2; i++) {
    let amPm = i === 0 ? "AM" : "PM";
    let option = `<option value="${amPm}">${amPm}</option>`;
    amPmSelect.insertAdjacentHTML("beforeend", option);
}

function clock() {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hr >= 12) {
        if (hr > 12) hr -= 12;
        am_pm = "PM";
    } else if (hr === 0) {
        hr = 12;
    }

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentClockTime = `${hr}:${min}:${sec} ${am_pm}`;
    
    if (alarmTime == `${hr}:${min} ${am_pm}`) {
        console.log("Alarm ringing!");
        alarmSound.play();
    }

    document.getElementsByClassName("clocktime")[0].innerHTML = `<p>${currentClockTime}</p>`;
}

setInterval(clock, 1000);

function setAlarm() {
    let selectedHour = hourSelect.value;
    let selectedMinute = minutesSelect.value;
    let selectedAmPm = amPmSelect.value;

    if (!selectedHour || !selectedMinute || !selectedAmPm) {
        console.log("Please select a valid alarm time.");
        return;
    }

    alarmTime = `${selectedHour}:${selectedMinute} ${selectedAmPm}`;
    console.log("Alarm Time Set:", alarmTime);

    let displayAlarmTimeHead = document.getElementById("alarmTimeDisplayHead");
    displayAlarmTimeHead.innerHTML = "Upcoming Alarms";

    let displayAlarmTime = document.getElementById("displayAlarmTime");
    displayAlarmTime.textContent = `${alarmTime}`;

}
    setAlarmButton.addEventListener("click", setAlarm);