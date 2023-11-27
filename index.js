const btnCart= document.querySelector('.conteiner-ico')
const conteinerCartProducts= document.querySelector('.conteiner-cart-productos')

btnCart.addEventListener('click',()=>{
    conteinerCartProducts.classList.toggle('hidden-cart')
})