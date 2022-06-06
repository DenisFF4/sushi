function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper')
    
    const cartEmpty = document.querySelector('[data-cart-empty]')

    const OrderForm = document.querySelector('#order-form')

    const Delliv = document.querySelector('.deliv')

    if (cartWrapper.children.length > 0) {
        cartEmpty.classList.add('none')
        OrderForm.classList.remove('none')
        Delliv.classList.remove('none')
    } else {
        cartEmpty.classList.remove('none')
        OrderForm.classList.add('none')
        Delliv.classList.add('none')
    }

}