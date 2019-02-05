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

  /**
   * appends a new item to list.
   * @param item {!ShoppingListItem}
   * @returns {ShoppingListItem[]}
   */
  append(item) {
    this.items_.push(item);
    this.view_.update();
  }

  get items() {
    return this.items_.slice();
  }
}
