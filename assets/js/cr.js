const btnStart = document.getElementById('start')
const btnPause = document.getElementById('pause')
const btnReset = document.getElementById('reset')

let ms = 0;
let s = 0;
let m = 0;

btnStart.addEventListener("click", () => {
    cron = setInterval(() => {
        ms++;

        if (ms == 99) { ms = 0; s++; }
        if (s == 60) { s = 0; m++; }

        let format = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
        document.getElementById('contador').innerText = format;
    }, 10);

})

btnPause.addEventListener("click", () => {
    clearInterval(cron)
})

btnReset.addEventListener("click", () => {
    clearInterval(cron);
    ms = 0;
    s = 0;
    m = 0;

    document.getElementById('contador').innerText = '00:00:00';
})
