window.onload = function () {
    function $(element) {
        return document.getElementsByClassName(element);
    }

    var millisec = 00;
    var min = 00;
    var sec = 00;
    var MIN = $("text")[0].children[0];
    var SEC = $("text")[0].children[1];
    var MILLISEC = $("text")[0].children[2];
    var Interval;

    $("start")[0].addEventListener("click", () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        $("start")[0].style.backgroundColor="rgb(54, 53, 53)";
        $("stop")[0].style.backgroundColor="black";
        $("restart")[0].style.backgroundColor="black";
    });
    $("stop")[0].addEventListener("click", () => {
        clearInterval(Interval);
        $("start")[0].style.backgroundColor="black";
        $("stop")[0].style.backgroundColor="rgb(54, 53, 53)";
        $("restart")[0].style.backgroundColor="black";
    });
    $("restart")[0].addEventListener("click", () => {
        clearInterval(Interval);
        millisec = "00";
        sec = "00";
        min = "00";
        MILLISEC.innerHTML = millisec;
        SEC.innerHTML = sec;
        MILLISEC.innerHTML = min;
        $("start")[0].style.backgroundColor="black";
        $("stop")[0].style.backgroundColor="black";
        $("restart")[0].style.backgroundColor="rgb(54, 53, 53)";
    });


    function startTimer() {
        millisec++;

        if (millisec <= 9) {
            MILLISEC.innerHTML = "0" + millisec;
        }
        if (millisec > 9) {
            MILLISEC.innerHTML = millisec;
        }

        if (sec > 9) {
            SEC.innerHTML = sec;
        }
        if (min > 9) {
            MIN.innerHTML = min;
        }


        if (millisec > 99) {
            sec++;
            SEC.innerHTML = "0" + sec;
            millisec = 0;
            MILLISEC.innerHTML = "0" + 0;
        }

        if (sec > 60) {
            min++;
            MIN.innerHTML = min;
            sec = 0;
            SEC.innerHTML = "0" + 0;
        }
    }
}
