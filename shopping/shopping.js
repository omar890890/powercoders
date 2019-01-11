document.addEventListener('DOMContentLoaded', function (event) {
  let inputBox = document.getElementById('item');
  let shoppingList = document.querySelector('ul');

  document.querySelector('button').addEventListener('click', function (event) {
    let inputValue = inputBox.value;
    let listItem = createNewListItem(inputValue);
    if (inputBox.value.trim() !== '') {
      shoppingList.appendChild(listItem).trim();
    }
    // inputBox.value = '';
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
      if (event.key === 'Enter') {
        let li = createNewListItem(inputBox.value.trim());
        shoppingList.appendChild(li);
        inputBox.value = '';
      }
      console.log(event.key);
    }
  });
  inputBox.focus();
});

function createNewListItem(itemText) {
  console.log(itemText);
  let li = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);
  let button = document.createElement('button');
  let text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    console.log('item list deleted: ' + itemText);
    li.remove();
  });
  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);
  return li;
}

