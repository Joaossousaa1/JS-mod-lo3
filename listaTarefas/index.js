const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-task')
const tasks = document.querySelector('.tasks')

function createLi() {
    const li = document.createElement('li')
    return li
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return
        createTask(inputTask.value)
    }
})

function createBtnDelete(li) {
    li.innerText += ' '
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Remove'
    btnDelete.setAttribute('class', 'remove')
    btnDelete.setAttribute('title', 'Remove task')
    li.appendChild(btnDelete)
}

function cleanInput() {
    inputTask.value = ''
    inputTask.focus()
}

function createTask(textInput) {
    const li = createLi()
    li.innerText = textInput
    tasks.appendChild(li)
    cleanInput()
    createBtnDelete(li)
    saveTasks()
}

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return
    createTask(inputTask.value)
})  

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('remove')) {
        el.parentElement.remove()
        saveTasks()
    }
})

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li')
    const listTasks = []

    for (let task of liTasks) {
        let taskText = task.innerText
        taskText = taskText.replace('Remove', '').trim()
        listTasks.push(taskText)
    }
    const tasksJSON = JSON.stringify(listTasks) //stringify retorna para uma str JSON
    localStorage.setItem('tasks', tasksJSON)
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks')
    const listTasks = JSON.parse(tasks) // JSON Parse retorna para um obj js

    for (let task of listTasks) {
        createTask(task)
    }
}
addSavedTasks()