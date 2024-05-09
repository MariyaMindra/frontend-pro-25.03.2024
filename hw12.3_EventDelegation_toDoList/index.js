// Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.
//     Покроковий план:
//     Створіть HTML-елементи: список завдань ul, текстове поле для вводу нових завдань та кнопку для додавання.
//     Додайте обробник подій до списку завдань ul, використовуючи делегування.
//     При кліку на будь-якій кнопці видалення, видаліть цей пункт.
//     Додайте можливість вводити нові завдання у текстове поле і додавати їх до списку за допомогою кнопки.

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



