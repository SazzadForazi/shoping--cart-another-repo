const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippinField = document.getElementById('shipping');

const total = document.getElementById('total');
function isContain(elem) {
    //return is class present
    return elem.classList.contains('selected');
}


free.addEventListener('click', function () {

    shippinField.innerText = '5';
    updateTotal();
});
express.addEventListener('click', function () {

    shippinField.innerText = '30';
    updateTotal();

});
//update Total
function updateTotal() {
    const shippingCharge = Number(shippinField.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;

}

div1.addEventListener('click', function () {
    img.src = 'images/1.jpg';
    desc.innerText = "This is first img!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!"
    price.innerText = '750';
    updateTotal()

});
div2.addEventListener('click', function () {
    img.src = 'images/2.jpg';
    desc.innerText = "This is second img!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!"
    price.innerText = '680'
    updateTotal()
});
div3.addEventListener('click', function () {
    img.src = 'images/3.jpg';
    desc.innerText = "This is third img!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!"
    price.innerText = '950'
    updateTotal()
});