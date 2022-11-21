const cardWrapper = document.querySelector('.cart-wrapper');


// Отслеживаем клик по странице
window.addEventListener('click',function(event){
    // Проверяем,что клик был сделан по кнопке "Добавить в корзину"
    if(event.target.hasAttribute('data-cart')){
        // Находим карточку,внутри которой был совершён клик
        const card = event.target.closest('.card')
    
    // Собираем данные и записываем их в единый объект
    const productInfo = {
        id:card.dataset.id,
        imgSrc:card.querySelector('.product-img').getAttribute('src'),
        title:card.querySelector('.item-title').innerText,
        itemsInBox:card.querySelector('[data-items-in-box]').innerText,
        weight:card.querySelector('.price__weight').innerText,
        price:card.querySelector('.price__currency').innerText,
        counter:card.querySelector('[data-counter]').innerText,
    };
    const cardItem = `	<div class="cart-item" ${productInfo.id}>
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.counter} / ${productInfo.weight}</div>
            <div class="cart-item__details">
                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>
            </div>
        </div>
    </div>
</div>`
console.log(productInfo);
cardWrapper.insertAdjacentHTML('beforeend',cardItem);
    }
})