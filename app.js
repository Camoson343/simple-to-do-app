function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        let title = newToDoText.value;

        let newLi = document.createElement('li');

        let checkbox = document.createElement('input');

        checkbox.type = "checkbox";

        newLi.textContent = title;

        newLi.appendChild(checkbox);

        toDoList.appendChild(newLi);

        newToDoText.value = '';

        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'delete';

        newLi.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            newLi.parentNode.removeChild(newLi)
        });
    });
}

window.onload = function() {
    onReady();
};

