// Добавляем прослушку на всём окне
window.addEventListener('click',function(event){
    let counter;
    if(event.target.dataset.action==='plus'||event.target.dataset.action==='minus'){
// Находим обёртку счётчика
const counterWrapper = event.target.closest('.counter-wrapper');
// Находим div с числом счётчика    
counter = counterWrapper.querySelector('[data-counter]')
}


// Проверяем является ли элемент ,по которому был совершён клик кнопкой Плюс
if(event.target.dataset.action==='plus'){
    counter.innerText=++counter.innerText;
}

// Проверяем является ли элемент,по которому был совершён клик кнопкой Минус
if(event.target.dataset.action==='minus'){
//Проверям,чтобы счётчик был больше 1
if(parseInt(counter.innerText)>1){
          // Изменяем текст в счётчике,уменьшая его на 1   
          counter.innerText=--counter.innerText;
}
}

})