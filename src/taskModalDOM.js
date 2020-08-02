import {addTaskFromModal} from './addTaskFromModal';

const taskModalDOM = (() => {
    const container = document.querySelector('#tasksContainer');
    const taskDiv = document.querySelector('.taskItem');
    let modalBg;

    function _exitModal() {
        //console.log(event.target, this);
        if(event.target !== this){
            return;
        }
        modalBg.parentNode.removeChild(modalBg);
    }

    function showModal(e){
        modalBg = document.createElement('div');
        modalBg.classList.add('modalBg');
        //task modal
        const modal = document.createElement('div');
        modal.setAttribute('id', 'modalTask');
        modal.style.transform = `translateX(-${e.pageX/3+30}px) translateY(-${e.pageY-50}px) scale(0.1)`;
        const form = document.createElement('form');
        form.setAttribute('autocomplete', 'off');
        const inputTitle = document.createElement('input');
        inputTitle.setAttribute('type', 'text');
        inputTitle.setAttribute('id', 'title');
        inputTitle.setAttribute('size', '20');
        inputTitle.setAttribute('placeholder', 'Task name');
        const inputDescription = document.createElement('input');
        inputDescription.setAttribute('type', 'text');
        inputDescription.setAttribute('id', 'description');
        inputDescription.setAttribute('size', '20');
        inputDescription.setAttribute('placeholder', 'Description');
        const inputDate = document.createElement('input');
        inputDate.setAttribute('type', 'date');
        inputDate.setAttribute('id', 'dueDate');
        inputDate.setAttribute('name', 'dueDate');
        const select = document.createElement('select');
        select.setAttribute('id', 'priority');
        const option1 = document.createElement('option');
        option1.setAttribute('value', 'low');
        option1.setAttribute('selected', 'selected');
        option1.textContent = 'Low';
        const option2 = document.createElement('option');
        option2.setAttribute('value', 'medium');
        option2.textContent = 'Medium';
        const option3 = document.createElement('option');
        option3.setAttribute('value', 'high');
        option3.textContent = 'High';
        const option4 = document.createElement('option');
        option4.setAttribute('value', 'Urgent');
        option4.textContent = 'Urgent';
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        const textarea = document.createElement('textarea');
        textarea.setAttribute('id', 'note');
        textarea.setAttribute('cols', '20');
        textarea.setAttribute('rows', '5');
        textarea.setAttribute('placeHolder', 'Note');
        const btnAddTask = document.createElement('button');
        btnAddTask.setAttribute('id', 'addTask');
        btnAddTask.textContent = 'Add task';
        btnAddTask.addEventListener('click', addTaskFromModal.addTask);
        form.appendChild(inputTitle);
        form.appendChild(inputDescription);
        form.appendChild(inputDate);
        form.appendChild(select);
        form.appendChild(textarea);
        form.appendChild(btnAddTask);
        modal.appendChild(form);

        modalBg.addEventListener('click', _exitModal);
        modalBg.appendChild(modal);
        
        container.appendChild(modalBg);
        //modal.style.transform = `translateX(-${this.offsetLeft-modal.offsetWidth/2}px) translateY(-${this.offsetTop}px) scale(0.1)`;


    };

    return{
        showModal, 
    }
})();

export {taskModalDOM}