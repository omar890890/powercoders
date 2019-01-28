document.addEventListener('DOMContentLoaded', function () {
  const menuItem = document.getElementById('menu').getElementsByTagName('li');
  const headLine = document.getElementById('text');
  const btn = document.getElementById('clickButton');
  const myMenu = document.getElementById('menu');
  let counter = 1;
  //menuItem[0].innerHTML = "hello World";

  /*for (el = 0; el < menuItem.length; el++) {
    menuItem[el].addEventListener('click', selectItem);
  }*/
    myMenu.addEventListener('click', selectItem);

  btn.addEventListener('click', newItem);

  function newItem() {
    myMenu.innerHTML += '<li> new line' + counter + '</li>';
    counter++;
    /*headLine.innerHTML = 'Hello world';
    btn.innerHTML = 'click here please';
    menuItem[0].innerHTML = 'java script';*/
  }

  function selectItem(n) {
    //alert("the page is updated");
    if (n.target.nodeName === 'LI') {
      headLine.innerHTML = n.target.innerHTML;
      for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove('selected');
      }
      n.target.classList.add('selected');
    }
  }
});

function changeToTab(event, className) {
  let listItem = document.getElementById('text');
  listItem.className = className;
}


