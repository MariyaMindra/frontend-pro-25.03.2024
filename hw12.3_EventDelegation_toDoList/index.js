class ToDoList {
    constructor(listId) {
        this.list = document.getElementById('list');
        this.attachEventListeners();
    }
    attachEventListeners() {
        this.list.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                this.removeTask(e.target.parentElement);
            }
        })
    }
    removeTask(taskElement){
        this.list.removeChild(taskElement);
    }
    crateNewTask(newTask){
        if (newTask) {
            const li = document.createElement("li");
            li.innerText = newTask;
            const button = document.createElement("button");
            button.innerText = 'Delete';
            button.className ='button';
            li.appendChild(button);
            this.list.appendChild(li);
        } else {
            alert('Please enter a task');
        }
    }
}

const myListTask = new ToDoList('list');
const buttonAdd = document.getElementById('addBtn');
buttonAdd.addEventListener('click', () => {
    const input = document.getElementById('input');
    myListTask.crateNewTask(input.value.trim());
    input.value = '';
})



