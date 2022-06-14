"use strict"
const data = [
  {id : "1",name :"sudadera", brand : "adiddas", price : 54},
  {id : "2",name :"camisa", brand : "adiddas", price : 55},
  {id : "3",name :"pantalon", brand : "adiddas", price : 54},  
  {id : "4",name :"calsetines", brand : "adiddas", price : 58}  
];
let dataShopingCar = JSON.parse(localStorage.getItem('products')) || [];

function generatorProducts (array) {
    let html ='';
    for (let i = 0; i < array.length; i++) {
        html += `
                <div class="card-producto"  id="card-producto">
                <div class="img-producto">
                    <img src="img/buzo-azul-adelante.png" alt="...">
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
    <div class="button">
    <button onclick="remuve(${dataShopingCar[i].id})" type="submit" >delete</button>
</div>
    `
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
    let html = `<h4>Precio Total : <b>$${price}</b></h4>`
    let container = document.getElementById('sumPrice');
    container.innerHTML = html;
}

function remuve(id) {
    localStorage.removeItem(id);
}


generatorProducts (data);
generadorHtmlShoppingCar(dataShopingCar);
























