import {ToDoItem} from './todoItem';
import {todoTaskDOM} from './todoTaskDOM';
import {todoMenuDOM} from './todoMenuDOM';
import { todo } from './todoInitialLists';
import {shortcuts} from './shortcuts';
const addQuickTask = (() => {
    
    function addTask() {
        const input = this.parentNode.querySelector('.quickTaskInput');
        const data = {
            title: input.value,
            description: '',
            dueDate: '',
            priority: '',
            note: '',
        }
        if(this.classList.contains('enabled')){
            const task = ToDoItem(data);
            const list = todoTaskDOM.getCurrentList();
            list.addItem(task);// cuvam u local storage
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            if(shortcuts.getAllTasks() === false){
              todoTaskDOM.renderListTasks(undefined, list.getName());
            }else{
                shortcuts.showAllTasks();
            }
        }
    }

    function addTaskOnEnter(inp) {
        const input = inp;
        const data = {
            title: input.value,
            description: '',
            dueDate: '',
            priority: '',
            note: '',
        }
        const task = ToDoItem(data);
        const list = todoTaskDOM.getCurrentList();
        list.addItem(task);
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        if(shortcuts.getAllTasks() === false){
            todoTaskDOM.renderListTasks(undefined, list.getName());
        }else{
            shortcuts.showAllTasks();
        }

    }

    return {
        addTask, addTaskOnEnter,
    }

})();

export {addQuickTask};