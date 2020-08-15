const printListTasks = (() => {

    function print(list) {
       const allLists = list.parentNode;
       allLists.querySelectorAll('.listItem').forEach(list => { //skinem oznaku za printanje sa svih
          list.classList.remove('section-to-print');
       });
       list.classList.add('section-to-print');
       window.print();

    }

    return{
        print, 
    }

})();

export {printListTasks};