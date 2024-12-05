// seleção de elementos 
const todoForm = document.querySelector('#to-do-form')
const todoInput = document.querySelector('#to-do-input')
const todoList = document.querySelector('#to-do-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')


//funções
const saveToDo = (text) => {
    const ToDo = document.createElement('div')
    ToDo.classList.add('to-do')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
    ToDo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-to-do')
    doneBtn.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'
    ToDo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-to-do')
    editBtn.innerHTML = ' <ion-icon name="pencil"></ion-icon>'
    ToDo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('remove-to-do')
    deleteBtn.innerHTML = '<ion-icon name="close"></ion-icon>'
    ToDo.appendChild(deleteBtn)

    todoList.appendChild(ToDo)
    todoInput.value = ''
    todoInput.focus()
}

//eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const inputValue = todoInput.value

    if (inputValue) {
        saveToDo(inputValue)
    }
})

//identificar diferentes cliques 
continução dos próximos em breve hehehe