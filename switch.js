document.addEventListener('DOMContentLoaded', () => {
    // Select buttons and sections
    const showClockButton = document.getElementById('showClock');
    const showTimerButton = document.getElementById('showTimer');
    const showStopwatchButton = document.getElementById('showStopwatch');

    const clockSection = document.getElementById('clockSection');
    const timerSection = document.getElementById('timerSection');
    const stopwatchSection = document.getElementById('stopwatchSection');

    // Function to hide all sections
    function hideAllSections() {
        clockSection.classList.remove('active');
        timerSection.classList.remove('active');
        stopwatchSection.classList.remove('active');
    }

    // Event listeners for buttons
    showClockButton.addEventListener('click', () => {
        hideAllSections();
        clockSection.classList.add('active');
    });

    showTimerButton.addEventListener('click', () => {
        hideAllSections();
        timerSection.classList.add('active');
    });

    showStopwatchButton.addEventListener('click', () => {
        hideAllSections();
        stopwatchSection.classList.add('active');
    });
});
