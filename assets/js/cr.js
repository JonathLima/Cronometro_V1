const btnStart = document.getElementById('start')
const btnPause = document.getElementById('pause')
const btnReset = document.getElementById('reset')

let s = 0;
let m = 0;
let h = 0;

btnStart.addEventListener("click", () => {
    cron = setInterval(() => {
        s++;

        if (s == 99) { s = 0; m++; }
        if (m == 60) { m = 0; h++; }

        let format = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
        document.getElementById('contador').innerText = format;
    }, 50);

})

btnPause.addEventListener("click", () => {
    clearInterval(cron)
})

btnReset.addEventListener("click", () => {
    clearInterval(cron);
    s = 0;
    m = 0;
    h = 0;

    document.getElementById('contador').innerText = '00:00:00';
})
