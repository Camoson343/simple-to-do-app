function onReady() {
    let id = 0;
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    let createNewToDo = () => {
        if (!newToDoText.value) { return; }
    
        toDos.push({
          title: newToDoText.value,
          complete: false,
          id: id++
        });
        newToDoText.value = '';
   
        renderTheUI();
      }

    let deleteToDo = (id) => {
        toDos = toDos.filter(item => item.id !== id);
        renderTheUI();
    }

      let renderTheUI = () => {
        const toDoList = document.getElementById('toDoList');
   
        toDoList.textContent = '';
   
        toDos.forEach((toDo) => {
          const newToDo = document.createElement('li');
          const checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'delete';
   
          newToDo.textContent = toDo.title;
   
          toDoList.appendChild(newToDo);
          newToDo.appendChild(checkbox);
          newToDo.appendChild(deleteButton);

          deleteButton.addEventListener('click', () => {
            event.preventDefault();
            deleteToDo(toDo.id);
            renderTheUI();
        });
        
        });
   
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
        newToDoText.value = '';
    });

    renderTheUI();
}

window.onload = function() {
    onReady();
};

