function x(event){
    let el = document.getElementById('header');
  el.className = 'tip';
}

document.write('hello world');

document.getElementById("header").addEventListener("click", displayParagraph);

function displayParagraph() {
    let elP = document.createElement('p');
    let content = document.createTextNode('This is my new paragraph');
    elP.appendChild(content);
    let elBody =document.getElementById('body');
    elBody.appendChild(elP);
}