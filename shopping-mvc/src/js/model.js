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
    this.items_ = [
      new ShoppingListItem('first item', 'q1'),
      new ShoppingListItem('second item', 'q2'),
      new ShoppingListItem('third item', 'q3')
    ];

    /** @private {!View} view for this model. */
    this.view_ = new View(this, controller);
    this.view_.update();
  }

  get items() {
    return this.items_.slice();
  }
}
