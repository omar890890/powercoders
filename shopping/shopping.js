document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const warning = document.getElementById('hidden');
  const btn = document.getElementById('clear');

  btn.addEventListener('click', function (event) {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(function (el) {
      el.remove();
      console.log('shopping list is deleted');
    });
    btn.disabled = true;
  });

  document.querySelector('button').addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();
    /*const inputValue = inputBox.value;*/
    const listItem = createNewListItem(trimmedValue);
    // we can delete the following if statement because click eventListener
    if (trimmedValue === '') {
      return
    }
    shoppingList.appendChild(listItem);

    addItemButton.disabled = true;
    btn.disabled = false;

    inputBox.value = '';
    inputBox.focus();
  });

  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    // addItemButton.disabled =  false;
    if (event.key !== 'Enter') {
      return;
    }
    const li = createNewListItem(trimmedValue);
    shoppingList.appendChild(li);
    inputBox.value = '';
    btn.disabled = false;

    console.log(event.key);
    addItemButton.disabled = inputBox.value.trim() === '';

    /* if (inputBox.value.trim() !== '') {
       warning.className = ('warning');
     }
      else {
       addItemButton.disabled = true;
     }
     if (inputBox.value.trim() === '') {
      addItemButton.disabled = true;
      }*/
  });
  addItemButton.disabled = true;
  inputBox.focus();
  btn.disabled = true;
});

/**
 * creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemText Name of the item to add to the list
 * @returns {HTMLElement} li element
 */
function createNewListItem(itemText) {
  console.log(itemText);
  const inputBox = document.getElementById('item');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(itemText);

  span.appendChild(spanText);
  li.appendChild(span);

  const button = document.createElement('button');
  const text = document.createTextNode('delete');
  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);

  button.addEventListener('click', function (event) {
    const btn = document.getElementById('clear');
    console.log('item list deleted: ' + itemText);
    /* const accept = '';
     if(prompt(accept) !== ''){
     }*/
    li.remove();
    inputBox.focus();
    const listItems = document.querySelectorAll('li');
    btn.disabled = listItems.length === 0;
  });
  return li;
}

/*
function elseTest(num) {
  if (num < 10) {
    console.log('less than 10');

  } else if (num > 10) {
    console.log('bigger than 10');
  } else if (num === 10) {
    console.log('exactly 10');
  }
}

function elseTest2(num) {
  if (num < 10) {
    console.log('less than 10');
  } else if (num > 10) {
    console.log('bigger than 10');
  } else if (num === 10) {
    console.log('exactly 10');
  }
}

*/
