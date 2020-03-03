
const list = document.querySelector('ul');
const input = document.querySelector('input');

input.onkeyup = (e) => {
  const inputElement = e.target as HTMLInputElement;

  if (e.key === 'Enter') {
    const listItem = document.createElement('li');
    const div = document.createElement('div');
    const span = document.createElement('span');
    const icon = document.createElement('i');
    const check = document.createElement('input');

    console.log(inputElement.value);
    span.textContent = inputElement.value;
    check.setAttribute('type', 'checkbox');
    icon.textContent = 'delete_outline';
    icon.setAttribute('class', 'material-icons btn-delete');

    list.appendChild(listItem);
    listItem.appendChild(div);
    listItem.appendChild(icon);
    div.appendChild(check);
    div.appendChild(span);
    input.value = '';
  }
}

