document.addEventListener('DOMContentLoaded' , function (event) {
    document.querySelector('button').addEventListener('click' , function(event) {
    let inputBox  = document.querySelector('#item');
    console.log(inputBox.value);
    //console.log(document.getElementById('item').value);
    });
});