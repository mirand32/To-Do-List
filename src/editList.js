import {todo} from './todoInitialLists';
import {List} from './todoList';
import {editListModalDOM} from './editListModalDOM';
import {todoMenuDOM} from './todoMenuDOM';
import {todoTaskDOM} from './todoTaskDOM';
import {addTaskFromModal} from './addTaskFromModal'
const editList = (() => {


    function saveList(listMenu, oldName, newName) {
        const list = todo.getList(oldName); //! citati iz trenutnih lista

        list.name = newName;
        //samo da promenim ime u listi
        listMenu.childNodes[1].textContent = newName;
        //pamcenje tek kad kliknem na check
        //localStorage.setItem('lists', JSON.stringify(todo.lists));
        editListModalDOM.exitModalOnButton();

        
    }

    function deleteList(listName){


        editListModalDOM.exitModalOnButton();

    }

    function saveEdit() {
        localStorage.setItem('lists', JSON.stringify(todo.lists));
        const activeListName = todoMenuDOM.getActiveListName();
        console.log('a');
        
        if(activeListName !== undefined){ // ako je aktivna lista
            localStorage.setItem('lists', JSON.stringify(todo.lists));
            //console.log(todo.lists);
            todoMenuDOM.renderLists();
            todoMenuDOM.renderShortcuts();
            todoTaskDOM.renderListTasks(undefined, activeListName);

        }else{
            todoMenuDOM.renderLists();
        }
        
    }

    function cancelEdit() {
        todoMenuDOM.renderLists(); // cita se iz local storage-a                                
    }                              // pa se ne cuva edit

    return{
        saveList, deleteList, saveEdit, cancelEdit
    }
})();

export {editList};