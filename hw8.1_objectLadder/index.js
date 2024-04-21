let ladder ={
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return;
    }
}

ladder.up().up().down().up().showStep();












