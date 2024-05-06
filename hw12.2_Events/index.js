class ButtonHandlers {
    constructor(el){
        this._el=el;
        el.onclick = this.onClick.bind(this);
    }
    onClick(e) {
        const action = e.target.dataset.action;
        if (action){
            alert('Button '+action);
        }
    }
}

const container =document.getElementById('container');
new ButtonHandlers(container);




