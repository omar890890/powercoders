/**
 *controller for the shopping list application.
 */
class Controller {
  constructor() {
    console.log('controller running');

    /** @private {!model} Application model */
    this.model_ = new Model(this);
  }
}