/**
 * create the controller to run the application
 *
 */

function domContentLoaded() {

  new Controller();
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


