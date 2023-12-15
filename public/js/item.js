const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantily = document.querySelector('#quantity');

add.addEventListener('click', () => quantity.value = Number(quantity.value)+1);
subtract.addEventListener('click', () => {
    quantity.value = Number(quantity.value)-1
    if (quantily.value >= 1) {
        quantity.value = Number(quantity.value)-1;
    }
    else {
    quantity.value = 0;
    } 
});