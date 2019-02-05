/**
 * represent an item in the shopping list.
 */

class ShoppingListItem {
  /**
   * @param name {string} name
   * @param quantity {string} Quantity
   *
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  /**
   * @returns {HTMLElement} li element
   */

  toListItem() {
    // Method body here
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

    const btn = document.getElementById('clear');
    inputBox.focus();
    const listItems = document.querySelectorAll('li');
    btn.disabled = listItems.length === 0;

    return li;
  }
}
