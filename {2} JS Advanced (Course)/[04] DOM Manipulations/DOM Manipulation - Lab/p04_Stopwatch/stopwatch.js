window.onload = function () {
    function stopwatch() {
        let startBtn = document.getElementById("startBtn");
        let stopBtn = document.getElementById("stopBtn");

        startBtn.addEventListener("click", start);
        stopBtn.addEventListener("click", stop);

        let output = document.getElementById("time");
        let seconds, interval;

        function start() {
            output.textContent = "00:00";
            seconds = 1;

            startBtn.disabled = true;
            stopBtn.disabled = false;

            interval = setInterval( function () {
                output.textContent = ("0" + Math.floor(seconds / 60)).slice(-2) + ":" + ("0" + seconds % 60).slice(-2);
                seconds++;
            }, 1000);
        }

        function stop() {
            stopBtn.disabled = true;
            startBtn.disabled = false;
            clearInterval(interval);
        }
    }

    stopwatch();
};