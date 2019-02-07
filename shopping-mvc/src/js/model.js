/**
 * Shopping list model.
 *
 * the list is modelled as an array.
 */
class Model {
  /** @param controller {!Controller} App controller*/

  constructor(controller) {
    console.log('model initialised');

    /** @private {!ShoppingListItem[]} Items in the list */
    this.items_ = [];

    /** @private {!View} view for this model. */
    this.view_ = new View(this, controller);
    this.view_.update();
  }

  get items() {
    return this.items_.slice();
  }

  /**
   * appends a new item to list.
   * @param item {!ShoppingListItem}
   * @returns {ShoppingListItem[]}
   */
  append(item) {
    this.items_.push(item);
    this.view_.update();
  }

  /**
   * Delete the i'th item from the list.
   * @param i {number}
   * @returns {ShoppingListItem[]}
   */
delete(i) {
  this.items_.splice(i, 1);
  this.view_.update();
  }


  /** Clear the shopping list of all items.
   *
   */
  clear() {
    this.items_ = [];
    this.view_.update();
  }
}
