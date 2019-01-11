document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button')

  document.querySelector('button').addEventListener('click', function (event) {
    const inputValue = inputBox.value;
    const listItem = createNewListItem(inputValue);
    if (inputBox.value.trim() !== '') {
      shoppingList.appendChild(listItem);
      addItemButton.disabled = true;
    }
    inputBox.value = '';
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {
        const li = createNewListItem(inputBox.value.trim());
        shoppingList.appendChild(li);
        inputBox.value = '';
      }
      console.log(event.key);
    }
    if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
    }
  });
  addItemButton.disabled = true;
  inputBox.focus();
});

function createNewListItem(itemText) {
  console.log(itemText);
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);
  const button = document.createElement('button');
  const text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    console.log('item list deleted: ' + itemText);
    li.remove();
  });
  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);
  return li;
}

