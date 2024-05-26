const timersArray = [];
class CountDownTimer {
    constructor(timerEl, id) {
        this.displayElement = timerEl;
        this.id = id;
        this.timerId = null;
        this.totalSeconds =0;
    }

    start(minutes, seconds){
        this.totalSeconds = parseInt(minutes,10) * 60 + parseInt(seconds, 10);
        this.updateDisplay();
        this.tick();
    }

    updateDisplay(){
        const minutes =Math.floor(this.totalSeconds/60);
        const seconds = this.totalSeconds % 60;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        this.displayElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

   tick(){
        if (this.totalSeconds > 0) {
            this.totalSeconds--;
            this.updateDisplay();
            this.timerId = setTimeout(() => this.tick(), 1000);
        } else {
            this.displayElement.textContent = "00:00";
            this.displayElement.className = 'timeIsUp';
            const stpBtn = document.getElementById('stopBtn-'+this.id);
            stpBtn.className = 'disableBtn';
        }
    }
    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
    }
}

function startNewTimer(minutes, seconds){
    const timersContainer = document.getElementById('timersContainer');
    const timerBlock = document.createElement('div');
    const timerBlockId = 'timer' + timersArray.length;
    timerBlock.id = timerBlockId;
    timerBlock.className = 'timer';

    const timerElement = document.createElement('div');
    timerElement.id = 'el-'+timerBlockId;

    const stopButton = document.createElement('button');
    stopButton.innerText = 'Stop';
    stopButton.id = 'stopBtn-'+ timerBlockId;
    stopButton.onclick = () => stopTimer(timerBlockId);

    const continueButton =document.createElement('button');
    continueButton.innerText = 'Continue';
    continueButton.id = 'continueBtn-' + timerBlockId;
    continueButton.className = 'disableBtn';
    continueButton.onclick = () => continueTimer(timerBlockId);

    timerBlock.appendChild(timerElement);
    timerBlock.appendChild(stopButton);
    timerBlock.appendChild(continueButton);
    timersContainer.appendChild(timerBlock);

    const timer = new CountDownTimer(timerElement, timerBlockId);
    timersArray.push(timer);
    timer.start(minutes, seconds);
}

function stopTimer(timerId) {
    const timer = timersArray.find (timer => timer.id === timerId);
    if (timer) {
        timer.stop();
        const stpBtn = document.getElementById('stopBtn-'+timerId);
        stpBtn.className = 'disableBtn';
        const ctnBtn = document.getElementById('continueBtn-'+timerId);
        ctnBtn.className = 'activeBtn';
    }
}

function continueTimer(timerBlockId){
    const timerContinue = timersArray.find (timer => timer.id === timerBlockId);
    if (timerContinue) {
        timerContinue.tick();
        const stpBtn = document.getElementById('stopBtn-'+timerBlockId);
        stpBtn.className = 'activeBtn';
        const ctnBtn = document.getElementById('continueBtn-'+timerBlockId);
        ctnBtn.className = 'disableBtn';
    }
}

document.getElementById('timerForm').addEventListener('submit', (e) =>{
    e.preventDefault();
    const minutes = document.getElementById('minutesId').value;
    console.log (minutes);
    const seconds = document.getElementById('secondsId').value;
    startNewTimer(minutes, seconds);
})