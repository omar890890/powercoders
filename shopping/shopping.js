/**
 *you write the JSDoc that goes here
 * @param name {string} Name of the Item
 * @param quantity {string} Quantity of the item
 *@constructor
 */
function ShoppingListItem(name, quantity) {
  // you write the code that goes here
  this.name = name;
  this.quantity = quantity;
}

/**
 *set up event listener and configure initial element state when
 *  the DOM is ready. *
 */

function domContentLoaded() {
  // code that needs to interact with the DOM
  const inputBox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const btn = document.getElementById('clear');
  const inputQuantity = document.getElementById('quantity');


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
    const quantity = inputQuantity.value.trim();
    /*const inputValue = inputBox.value;*/


    const item = new ShoppingListItem(trimmedValue, quantity);

    const listItem = createNewListItem(item);
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

  inputBox.addEventListener('keyup', onKeyUp);
  inputQuantity.addEventListener('keyup', onKeyUp);

  /**
   *
   * @param {ShoppingListItem} item Item to add
   * @returns {HTMLElement} li element
   */
  function createNewListItem(item) {
    console.log(item.name);
    const inputBox = document.getElementById('item');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const spanText = document.createTextNode(item.name);

    span.appendChild(spanText);
    li.appendChild(span);

    if (item.quantity !== '') {
      li.appendChild(document.createTextNode(' '));
      const quantityText = document.createElement('span');
      quantityText.textContent = `(${item.quantity})`;
      li.appendChild(quantityText);
    }

    const button = document.createElement('button');
    const text = document.createTextNode('delete');
    button.appendChild(text);
    li.appendChild(button);
    console.log("createElement", li);

    button.addEventListener('click', function (event) {
      const btn = document.getElementById('clear');
      console.log('item list deleted: ' + item.name);
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

  function onKeyUp(event) {
    const inputBox = document.getElementById('item');
    const shoppingList = document.querySelector('ul');
    const addItemButton = document.querySelector('button');
    const btn = document.getElementById('clear');
    const inputQuantity = document.getElementById('quantity');

    const trimmedValue = inputBox.value.trim();
    const quantity = inputQuantity.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }
    // addItemButton.disabled =  false;
    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantity);


    const li = createNewListItem(item);
    shoppingList.appendChild(li);
    inputBox.value = '';
    inputQuantity.value = '';
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
    addItemButton.disabled = true;
    inputBox.focus();
    btn.disabled = true;

  }
}


if (document.readyState === 'loading') {
  // DOMContentLoad has not fired yet.
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  // DOMContentLoaded has fired
  domContentLoaded();
}


/**
 * creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemText Name of the item to add to the list
 * @returns {HTMLElement} li element
 */

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
