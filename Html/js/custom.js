const toggleMenuElement = document.getElementById('carshopping');
const mainMenuElement = document.getElementById('hide');

toggleMenuElement.addEventListener('click', ()=>{

  mainMenuElement.classList.toggle('show');
  
}); 