import {ToDoItem} from './todoItem';
import {todoTaskDOM } from './todoTaskDOM';
import {taskModalDOM} from './taskModalDOM';
const addTaskFromModal = (() => {

    const addTask = (e) => {
        e.preventDefault();
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#dueDate');
        const priority = document.querySelector('#priority');
        const note = document.querySelector('#note');
        const btnAddTask = document.querySelector('#addTask');

        const data = {
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priotity: priority.value,
            note: note.value,
        }
        if(btnAddTask.classList.contains('enabled')){
            const task = ToDoItem(data);
            const currList = todoTaskDOM.getCurrentList();
            currList.addItem(task);
            todoTaskDOM.renderListTasks(undefined, currList.getName()); //render liste
            taskModalDOM.exitModalOnButton(); // iskljuciti prozor
            //todo sacuvati u loacal storage-u
        }else{
            title.style.backgroundColor = 'rgba(156, 54, 54, 0.5)';
        }        
    }

    return{
        addTask, 
    }
})();

export {addTaskFromModal};