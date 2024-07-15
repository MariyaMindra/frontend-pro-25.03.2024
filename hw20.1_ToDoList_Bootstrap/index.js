class StorageManager {
    constructor (storageKey) {
        this.storageKey = storageKey;
    }
    load() {
        this.tasks = [];
        if (localStorage.getItem("tasks")) {
            this.tasks = this.tasks.concat(JSON.parse(localStorage.getItem(this.storageKey)));
        }
        return this.tasks;
    }

    save(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
}
class ToDoList {
    constructor(elementId, storageManager) {
        this.list = document.getElementById(elementId);
        this.storageManager = storageManager;
        this.tasks = this.storageManager.load();
        // if (localStorage.getItem("tasks")) {
        //     this.tasks = this.tasks.concat(JSON.parse(localStorage.getItem("tasks")));
        // }
        this.renderTasks();
        this.attachEventListeners();
    }
    attachEventListeners() {
        this.list.addEventListener('click', (e) => {
            const li = e.target.closest('li');
            const id = li.dataset.id;
            if (e.target.tagName === 'BUTTON') {
                console.log (e.target.className)
                if (e.target.className === 'todoItem_delete') {
                    console.log ('Ura')
                }
                this.removeTask(id);
            } else if (e.target.type === 'checkbox') {
                this.checkedTask(id, e.target.checked);
            } else if (e.target.tagName === 'SPAN') {
                this.showTaskModal(id);
                console.log(e.target.tagName)
            }
        });

        this.list.addEventListener('mouseover', (e) => {
            if (e.target.classList.contains('todoItem_description')) {
                e.target.classList.add('hovered');
            }
        });

        this.list.addEventListener('mouseout', (e) => {
            if (e.target.classList.contains('todoItem_description')) {
                e.target.classList.remove('hovered');
            }
        });

        window.addEventListener('storage', () => {
           this.tasks = this.storageManager.load();
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

    updateTasks() {
        this.storageManager.save(this.tasks);
        this.renderTasks();
    }
    removeTask(taskId) {
        this.tasks.splice(taskId, 1);
        this.updateTasks();
    }

    checkedTask(id, checked){
        this.tasks[id].done = checked;
        this.updateTasks();
    }
    addTask(newTask, descriptionValue){
            this.tasks.push({ newTask, description: descriptionValue, done: false });
            this.updateTasks();
    }

    showTaskModal(taskId) {
        const task = this.tasks[taskId];
        document.getElementById('taskModalLabel').innerText = task.newTask;
        document.getElementById('taskModalDescription').innerText = task.description;
        $('#taskModal').modal('show')
    }
}

const storageManager = new StorageManager('tasks');
const myListTask = new ToDoList('list', storageManager);
const buttonAdd = document.getElementById('addBtn');
buttonAdd.addEventListener('click', () => {
    const input = document.getElementById('input');
    const description = document.getElementById('taskDescription');
    const descriptionValue = description.value.trim();
    const inputValue = input.value.trim();
    if (inputValue !== ''){
        myListTask.addTask(inputValue, descriptionValue);
        input.value = '';
        description.value='';
    } else {
        alert('Please enter a task');
    }
});



