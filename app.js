//grab all buttons
const valueButtons = document.querySelectorAll('.btn');
const calcScreen = document.querySelector('.screen');
const clearButton = document.querySelector('.btn-clear');
const equalsButton = document.querySelector('.btn-equal');
let screenValue = '';


valueButtons.forEach((valueButton)=>{
  valueButton.addEventListener('click',(e)=>{
      screenValue += e.target.dataset.num;
    calcScreen.value = screenValue;
  })
});

//clear and equals button
clearButton.addEventListener('click',()=>{
  calcScreen.value='';
  screenValue='';
});

equalsButton.addEventListener('click',()=>{
  (screenValue)?calcScreen.value=eval(screenValue):'';
  screenValue = '';
})