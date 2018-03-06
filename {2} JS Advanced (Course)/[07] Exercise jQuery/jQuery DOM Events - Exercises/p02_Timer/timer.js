function timer() {
    let startBtn = $("#start-timer");
    let stopBtn = $("#stop-timer");

    startBtn.attr("disabled", false);
    stopBtn.attr("disabled", true);

    let timer;
    let seconds = $("#seconds");
    let minutes = $("#minutes");
    let hours = $("#hours");

    startBtn.on("click", function () {
        startBtn.attr("disabled", true);
        stopBtn.attr("disabled", false);

        if(timer) {
            clearInterval(timer);
        }

        // seconds.text("00");
        // minutes.text("00");
        // hours.text("00");

        timer = setInterval(step, 1000);
    });

    function step() {
        seconds.text((`0${Number(seconds.text()) + 1}`).slice(-2));

        if(Number(seconds.text()) > 59) {
            seconds.text("00");
            minutes.text((`0${Number(minutes.text()) + 1}`).slice(-2));

            if(Number(minutes.text()) > 59) {
              minutes.text("00");
              hours.text((`0${Number(hours.text()) + 1}`).slice(-2));
            }
        }
    }

    stopBtn.on("click", function () {
        stopBtn.attr("disabled", true);
        startBtn.attr("disabled", false);

        clearInterval(timer);
    });
}