"use strict"
let data = [
    {id: "1", name: "Sudadera Caqui - Academlo", img: "img/buzo-caqui.png", price: 25},
    {id: "2", name: "Sudadera Gris - Academlo", img: "img/buzo-gris.png", price: 25 },
    {id: "3", name: "Saco lana - cafe con negro", img: "img/buzo-cafe-con-negro.png", price: 35.00},
    {id: "4", name: "Saco lana - gris con negro", img: "img/buzo-gris-con-blaco-adelante.png", price: 35.00},
    {id: "5", name: "Saco a rayas - rojo y blanco", img: "img/buzo-rojo-adelante.png", price: 30.00},
    {id: "6", name: "Saco a rayas - rosa y blanco", img: "img/buzo-azul-adelante.png", price: 30.00 },
    {id: "7", name: "Sudadera los Angeles - Azul", img: "img/buzo-azul-los-angeles.png", price: 25},
    {id: "8", name: "Sudadera los Angeles - Cafe", img: "img/buzo-cafe-los-angeles.png",price: 25},
    {id: "9", name: "Sudadera decoración dinosaurio", img: "img/buzo-tierno-verde.png", price: 40.00},
    {id: "10", name: "Sudadera decoración dinosaurio", img: "img/buzo-tierno.png", price: 40.00},
    {id: "11", name: "Camiseta Amarrilla - Árbol Decoración", img: "img/camisa-amarilla.png", price: 22.00},
    {id: "12", name: "Camiseta Azul - Decoración Cerveza", img: "img/camisa-azul-cerveza.png", price: 26.00},
    {id: "13", name: "Camisera verde - Decoración Radio", img: "img/camisa-azul-clara.png", price: 23.00},
    {id: "16", name: "Camiseta roja - Decoración Radio", img: "img/camisa-roja.png",price: 23.00},
    {id: "17", name: "Camiseta Rosa - Decoración Rayas",img: "img/camisa-rosa.png",price: 27.00}];


let dataShopingCar = JSON.parse(localStorage.getItem('products')) || [];

function generatorProducts (array) {
    let html ='';
    for (let i = 0; i < array.length; i++) {
        html += `
                <div class="card-producto"  id="card-producto">
                <div class="img-producto">
                    <img src="${array[i].img}" alt="...">
                </div>
                <div class="info-producto-card">
                    <h3 class="card-title">${array[i].name}</h3>
                <div class="colors-productos">
                    <div class="color1"></div>
                    <div class="color2"></div>
                </div>
                <h4 class="precio-productos">$${array[i].price}</h4>
                </div>
                <div class="button">
                    <button onclick="getProductToCarShopping(${array[i].id})" type="submit" >Agregar</button>
                </div>
                </div>`
        
    }
    let container = document.getElementById('containerShopProduct');
    container.innerHTML += html;
    
}
function find(array, cb) {
    for(let i=0; i<array.length; i++) {
        let result = cb(array[i]);
        if(result===true) {
            return array[i];
        }
    }
}


function getProductToCarShopping(idProduct) {
    
    function cbById(data){
        return data.id == idProduct;
    }

    let filtrado =  find(data,cbById);

    dataShopingCar.push(filtrado);

    localStorage.setItem('products',JSON.stringify(dataShopingCar));
    generadorHtmlShoppingCar(dataShopingCar);
    sumPrice(dataShopingCar);
    
}
function generadorHtmlShoppingCar(dataShopingCar) {
    let htmlProduct = '';
    for (let i = 0; i < dataShopingCar.length; i++) {
        htmlProduct += `<div class="productShow">
        <div class="img-producto">
            <img src="img/buzo-azul-adelante.png" alt="...">
        </div>
        <div class="data">
            <h3>${dataShopingCar[i].name}</h3>
            <h3 >$${dataShopingCar[i].price}</h3>
        </div>    
    </div>
    `
    sumPrice(dataShopingCar);
    }
    // generatorProducts(dataShopingCar)
    const container = document.getElementById('carShopping');
    container.innerHTML = htmlProduct;
    
}
function sumPrice(dataShopingCar) {
    let price = 0;
    for (let i = 0; i < dataShopingCar.length; i++) {
        price +=dataShopingCar[i].price;
        
    }
    let html = `<h4>Precio Total : <b>$${price}</b></h4>
    `
    let button = `        <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>`
      
      
    let container = document.getElementById('sumPrice');
    container.innerHTML = html + button;
    function allPrice(price) {
        let html = `   <div class="re-com">
        <h4 class="mb-4">Resumen del Pedido</h4>
        <div class="info-re-com">
            <h5>Subtotal:</h5>
            <h5>$${price}</h5>
        </div>
        <div class="info-re-com">
            <h5>Envío:</h5>
            <h5>$${price*0.03}</h5>
        </div>
        <div class="info-re-com">
            <h5>Total:</h5>
            <h5>$${price*0.03 + price}</h5>
        </div>
       </div`;
       const container = document.getElementById('resumenCompra');
       container.innerHTML = html;   
       }
       allPrice(price)
    
}





function remuve(id) {
    localStorage.clear();
   location.reload();
}


generatorProducts (data);
generadorHtmlShoppingCar(dataShopingCar);
























