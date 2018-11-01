//get all elements from webpage

// text area ^
const textForm = document.querySelector('#create-task-form')
// entire text form (reason unknown so far)
const taskList = document.querySelector('#tasks')
// the list where the tasks will go

const addTask = () => {
  event.preventDefault()

  const textInput = document.querySelector('#new-task-description').value

  const taskElement = document.createElement('li')

  taskElement.innerHTML =
  `${textInput}`


   taskList.appendChild(taskElement)
}

textForm.addEventListener('submit', addTask)
