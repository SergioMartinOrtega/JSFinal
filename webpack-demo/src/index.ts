
const list = document.querySelector('ul');
const input = document.querySelector('input');


function countTask() {
  const tasks = document.getElementById('tasks');
  const allList = document.getElementsByTagName('li');
  tasks.textContent = 'Quedan '+ allList.length + ' tareas';
}

function openContainer(x) {
  
  x.addEventListener('click', () => {
    //console.log('Hace algo 1'+x.setAttribute('id'));
    const deleteTask =  document.querySelector('#deleted-container')
    deleteTask.classList.add('open');
    const nameTask = document.querySelector('#nameTask');
    nameTask.textContent = 'prueba ';
  });
}

input.onkeyup = (e) => {
  const inputElement = e.target as HTMLInputElement;

  if (e.key === 'Enter') {
    const listItem = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const icon = document.createElement('i');
    const check = document.createElement('input');

    listItem.setAttribute('id', inputElement.value);
    console.log(inputElement.value);
    span.textContent = inputElement.value;
    check.setAttribute('type', 'checkbox');
    icon.textContent = 'delete_outline';
    icon.setAttribute('class', 'material-icons btn-delete');
    icon.setAttribute('id', inputElement.value);

    list.appendChild(listItem);
    listItem.appendChild(div);
    listItem.appendChild(icon);
    div.appendChild(check);
    div.appendChild(span);
    input.value = '';
    countTask();
    openContainer(icon);
  }
}
