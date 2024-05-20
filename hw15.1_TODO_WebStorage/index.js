//Заплуталась. Кожен раз, коли додається нова Task сторінка перемальовується updateLocalStorage(). Але коли намагалась
// зробити, щоб renderTasks() викликав addTask та обновляв LokalStorage, то рекурсивно перезаповнював lokal Storage при
// спробі додати 1 task. Не зрозуміла як зробити інакше.
class ToDoList {
    constructor() {
        this.list = document.getElementById("list");
        this.tasks = [];
        if (localStorage.getItem("tasks")) {
            this.tasks = this.tasks.concat(JSON.parse(localStorage.getItem("tasks")));
        }
        this.renderTasks();
        this.attachEventListeners();
    }
    attachEventListeners() {
        this.list.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            const id = li.dataset.id;
            if (e.target.tagName === 'BUTTON') {
                this.removeTask(id);
            } else if (e.target.type === 'checkbox') {
                this.checkedTask(id, e.target.checked);
            }
        });

        window.addEventListener('storage', () => {
           this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
           this.renderTasks();
        });
    }

    renderTasks(){
        this.list.innerHTML = '';
        if (this.tasks.length) {
            this.tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.setAttribute('data-id', index);
                li.className = "todoItem";
                const fragment = document.createDocumentFragment();
                const checkBox = document.createElement("input")
                checkBox.type = "checkbox";
                checkBox.checked = task.done;
                fragment.append(checkBox);
                const textField = document.createElement("span");
                textField.className = "todoItem_description";
                textField.innerText = task.newTask;
                if (task.done) {
                    textField.style.textDecoration = 'line-through';
                    textField.style.color = 'green';
                } else {
                    textField.style.textDecoration = 'none';
                    textField.style.color = 'black';
                }
                fragment.append(textField);
                const button = document.createElement("button");
                button.innerText = 'Delete';
                button.className ='button todoItem_delete';
                fragment.append(button);
                li.appendChild(fragment);
                this.list.appendChild(li);
            });
        }
    }

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        this.renderTasks();
    }
    removeTask(taskId){
        this.tasks.splice(taskId, 1);
        this.updateLocalStorage();
    }

    checkedTask(id, checked){
        this.tasks[id].done = checked;
        this.updateLocalStorage();
    }
    addTask(newTask){
            this.tasks.push({ newTask, done: false });
            this.updateLocalStorage();
    }
}

const myListTask = new ToDoList('list');
const buttonAdd = document.getElementById('addBtn');
buttonAdd.addEventListener('click', () => {
    const input = document.getElementById('input');
    const inputValue = input.value.trim();
    if (inputValue !== ''){
        myListTask.addTask(inputValue);
        input.value = '';
    } else {
        alert('Please enter a task');
    }
});



