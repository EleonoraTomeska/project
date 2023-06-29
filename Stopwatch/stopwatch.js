function initializeStopWatch() {
    const stopWatch = document.getElementById("stopWatch");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");

    let startTimer = [];

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function disabled(...elems) {
        for (let i = 0; i < elems.length; i++) {
            elems[i].setAttribute("disabled", "true");
        }
    }

    function unDisabled(...elems) {
        for (let i = 0; i < elems.length; i++) {
            elems[i].removeAttribute("disabled");
        }
    }

    function displayTime() {
        seconds++;

        if (seconds >= 60) {
            minutes++;
            seconds = 0;

            if (minutes >= 60) {
                hours++;
                minutes = 0;
            }
        }

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;

        stopWatch.innerHTML = h + " : " + m + " : " + s;
    }

    function startBtnClick() {
        if (startTimer !== null) {
            clearInterval(startTimer);
        }

        startTimer = setInterval(displayTime, 1000);

        disabled(startBtn);
        unDisabled(stopBtn, resetBtn);
    }

    startBtn.addEventListener("click", startBtnClick);



    function stopBtnClick() {
        clearInterval(startTimer);

        disabled(stopBtn);
        unDisabled(startBtn);
    }
    stopBtn.addEventListener("click", stopBtnClick);



    function resetBtnClick() {
        clearInterval(startTimer);

        disabled(resetBtn, stopBtn);
        unDisabled(startBtn);

        hours = 0;
        minutes = 0;
        seconds = 0;

        stopWatch.innerHTML = "00 : 00 : 00";

    };

    resetBtn.addEventListener("click", resetBtnClick);

}

window.addEventListener("DOMContentLoaded", initializeStopWatch);