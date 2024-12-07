// seleção de elementos 
const todoForm = document.querySelector('#to-do-form')
const todoInput = document.querySelector('#to-do-input')
const todoList = document.querySelector('#to-do-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
let oldInputValue 


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

const toggleForms = () => {
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.to-do')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3')

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}

//eventos: criar tarefa
todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
   
    const inputValue = todoInput.value

    if (inputValue) {
        saveToDo(inputValue)
    }
})

//eventos: identificar diferentes cliques 
document.addEventListener('click', (e) =>{
    const targetEl = e.target
    const parentEl = targetEl.closest('div')
    let todoTitle

    if(parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText
    }

    if(targetEl.classList.contains('finish-to-do')) {
       parentEl.classList.toggle('done')
    }

    if(targetEl.classList.contains('remove-to-do')) {
        parentEl.remove()
    }

    if(targetEl.classList.contains('edit-to-do')) {
        toggleForms()
   
    editInput.value = todoTitle
    oldInputValue = todoTitle

    }
})

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
       updateTodo(editInputValue)
    }

    toggleForms()
})
