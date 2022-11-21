//Это версия кода,в которой работает только первый элемент,потому что addEventListener ищет первый элемент с нужными параметрами
const minus = document.querySelector('[data-action="minus"]');
const plus =  document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');


minus.addEventListener('click',function(){
    if((counter.innerText>1)){counter.innerText = --counter.innerText}

})

plus.addEventListener('click',function(){
    if(parseInt(counter.innerText)){
    counter.innerText = ++counter.innerText
    }
})
