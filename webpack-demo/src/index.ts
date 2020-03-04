
const list = document.querySelector('#list');
const input = document.querySelector('input');
const allButton = document.querySelector('#allButton');
const pendingButton = document.querySelector('#pendingButton');
const completedButton = document.querySelector('#completedButton');
const buttonYes = document.querySelector('#buttonYes');
const buttonNo = document.querySelector('#buttonNo');


function countTask() {
  let count = 0;
  const tasks = document.getElementById('tasksCount');
  //tasks.textContent = 'Quedan ' + list.children.length + ' tareas';
  for (let i = 0; i < list.children.length; i++) {
    let items = list.childNodes[i].firstChild.firstChild as HTMLInputElement;
    if (items.checked === false) {
      count++;
    }
  }
  tasks.textContent = 'Quedan ' + count+ ' tareas';
}

input.addEventListener('check', () => {
  countTask();
})

pendingButton.addEventListener('click', () => {
  const allItem = document.querySelector('li');
  allItem.style.display = 'block'
  for (let i = 0; i < list.children.length; i++) {
    let items = list.childNodes[i].firstChild.firstChild as HTMLInputElement;
    if (items.checked === true) {
      let li = list.childNodes[i] as HTMLInputElement;
      li.style.display = 'none'
    }
  }
});

completedButton.addEventListener('click', () => {
  const allItem = document.querySelector('li');
  allItem.style.display = 'block'
  for (let i = 0; i < list.children.length; i++) {
    let items = list.childNodes[i].firstChild.firstChild as HTMLInputElement;
    if (items.checked === false) {
      let li = list.childNodes[i] as HTMLInputElement;
      li.style.display = 'none'
    }
  }
});

allButton.addEventListener('click', () => {

  for (let i = 0; i < list.children.length; i++) {
    let li = list.childNodes[i] as HTMLInputElement;
    li.style.display = 'block'
  }
});

buttonNo.addEventListener('click', () => {
  const deleteTask = document.querySelector('#deleted-container');
  deleteTask.classList.remove('open');
})


function openContainer(icon, name, item) {

  icon.addEventListener('click', () => {
    console.log(name);
    const deleteTask = document.querySelector('#deleted-container');
    deleteTask.classList.add('open');
    const nameTask = document.querySelector('#nameTask');
    nameTask.textContent = name;
    buttonYes.addEventListener('click', () => {
      console.log(item);
      item.remove();
      const deleteTask = document.querySelector('#deleted-container');
      deleteTask.classList.remove('open');
      countTask();
    })
  });

}

function updateItem(item, oldValue, listItem){
  item.addEventListener('click', () => {
    console.log(item.value);
    const icon = document.createElement('i');
    const newTask =  document.createElement('input');

    icon.setAttribute('class', 'material-icons');
    icon.textContent = 'done';
    newTask.setAttribute('type','text');
    newTask.setAttribute('value', oldValue);

    listItem.setAttribute('class', 'update');
    listItem.appendChild(newTask);
    listItem.appendChild(icon);
    console.log(item);
    icon.addEventListener('click', () => {
      //console.log(input.value);
      console.log(newTask.value);
      item.textContent = newTask.value;
      listItem.classList.remove('update');
      icon.remove();
      newTask.remove();
    })
  })
}

input.onkeyup = (e) => {
  const inputElement = e.target as HTMLInputElement;

  if (e.key === 'Enter' && inputElement.value !== '') {
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
    countTask();
    openContainer(icon, inputElement.value, listItem);
    updateItem(span, inputElement.value, listItem);
    input.value = '';
  }
}
