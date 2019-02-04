/**
 * Shopping list model.
 *
 * the list is modelled as an array.
 */
class Model {
  /** @param controller {!controller} App controller*/
  constructor(controller) {
    console.log('model initialised');

/** @private {!shoppingListItem[]} Items in the list */
this.items_ = [];

/** @private {!view} view for this model. */
this.view_ = new View(this, controller);

  }
}
