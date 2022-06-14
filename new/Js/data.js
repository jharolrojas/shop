let productos = [
{id: "1", name: "Sudadera Caqui - Academlo", img: "../img/buzo caqui.png", precio: 25},
{id: "2", name: "Sudadera Gris - Academlo", img: "../img/buzo gris.png", precio: 25 },
{id: "3", name: "Saco lana - cafe con negro", img: "../img/buzo cafe con negro.png", precio: 35.00},
{id: "4", name: "Saco lana - gris con negro", img: "../img/buzogris con blaco adelante.png", precio: 35.00},
{id: "5", name: "Saco a rayas - rojo", img: "../img/buzo-rojo-adelante.png", precio: 30.00},
{id: "6", name: "Saco a rayas - rosa", img: "../img/buzo-azul-adelante.png", precio: 30.00 },
{id: "7", name: "Sudadera los Angeles - Azul", img: "../img/buzo azul los angeles.png", precio: 25},
{id: "8", name: "Sudadera los Angeles - Cafe", img: "../img/buzo cafe los angeles.png",precio: 25},
{id: "9", name: "Sudadera decoración dinosaurio", img: "../img/buzo tierno verde.png", precio: 40.00},
{id: "10", name: "Sudadera decoración dinosaurio", img: "../img/buzo tierno.png", precio: 40.00},
{id: "11", name: "Camiseta Amarrilla - Árbol Decoración", img: "../img/camisa amarilla.png", precio: 22.00},
{id: "12", name: "Camiseta Azul - Decoración Cerveza", img: "../img/camisa azul cerveza.png", precio: 26.00},
{id: "13", name: "Camisera verde - Decoración Radio", img: "../img/camisa azul clara.png", precio: 23.00},
{id: "14", name: "Camisera Blanca - Decoración árbol", img: "../img/camisa blaca.png",precio: 28.00},
{id: "15", name: "Camiseta negra - Decoración corazón", img: "../img/camisa negra.png",precio: 28.00},
{id: "16", name: "Camiseta roja - Decoración Radio", img: "../img/camisa roja.png",precio: 23.00},
{id: "17", name: "Camiseta Rosa - Decoración Rayas",img: "../img/camisa rosa.png",precio: 27.00}];

function generateProductsCards(productos) {
    let html = "";

    for(let i = 0; i < productos.length; i++) {
        html += `<div class="card-producto">
                    <div class="img-producto">
                        <img src="${productos[i].img}" alt="...">
                    </div>
                    <div class="info-producto-card">
                        <h5 class="card-title">${productos[i].name}</h5>
                    <div class="colors-productos">
                        <div class="color1"></div>
                        <div class="color2"></div>
                    </div>
                    <div class="precio-y-icono-bag">
                        <a href=""><i class="fa-solid fa-bag-shopping"></i></a>
                        <h4 class="precio-productos">$ ${productos[i].precio}</h4>
                    </div>
                    </div>     
                </div>`;
    }
    const containerShopProduct = document.getElementById('productos-container');
    containerShopProduct.innerHTML = html;
}

generateProductsCards(productos);