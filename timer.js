document.addEventListener("DOMContentLoaded", function () {
    function countdown(mins) {
        let seconds = 60;
        function tick() {
            let counter = document.getElementById("counter");
            let current_minutes = mins - 1;
            seconds--;
            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1000);
            } else if (mins > 1) {
                countdown(mins - 1);
            } else {
                counter.innerHTML = "00:00";
            }
        }
        tick();
    }

    countdown(3); 
});