/**
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
 *
 * @returns {HTMLElement} li element
 *
 */
ShoppingListItem.prototype.toListItem = function() {
  console.log(this.name);
  const inputBox = document.getElementById('item');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const spanText = document.createTextNode(this.name);

  span.appendChild(spanText);
  li.appendChild(span);

  if (this.quantity !== '') {
    li.appendChild(document.createTextNode(' '));
    const quantityText = document.createElement('span');
    quantityText.textContent = `(${this.quantity})`;
    li.appendChild(quantityText);
  }

  const button = document.createElement('button');
  const text = document.createTextNode('delete');
  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);

  button.addEventListener('click', function (event) {
    const btn = document.getElementById('clear');
    console.log('item list deleted: ' + this);
    /* const accept = '';
     if(prompt(accept) !== ''){
     }*/
    li.remove();
    inputBox.focus();
    const listItems = document.querySelectorAll('li');
    btn.disabled = listItems.length === 0;
  });
  return li;
};

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

    const listItem = item.toListItem();
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

    const li = item.toListItem();
    shoppingList.appendChild(li);
    inputBox.value = '';
    inputQuantity.value = '';
    btn.disabled = false;

    console.log(event.key);
    addItemButton.disabled = inputBox.value.trim() === '';
  }

  addItemButton.disabled = true;
  inputBox.focus();
  btn.disabled = true;
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
