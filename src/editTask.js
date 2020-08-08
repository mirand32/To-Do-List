import {taskInfoDOM} from './taskInfoDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todoTaskDOM} from './todoTaskDOM';
import {todo} from './todoInitialLists';
const editTask = (() => {
    function deleteTask(taskIndex) {
        const currList = todoTaskDOM.getCurrentList();
        currList.removeItemByIndex(taskIndex);
        localStorage.setItem('lists', JSON.stringify(todo.lists));

        todoMenuDOM.renderLists();
        todoMenuDOM.renderShortcuts();
        todoTaskDOM.renderListTasks(undefined, currList.name); // renderujem istu listu
        taskInfoDOM.exitModalOnButton();

    }

    function saveTask() {
        

        taskInfoDOM.exitModalOnButton();

    }

    return{
        deleteTask, saveTask, 
    }
})();

export {editTask};