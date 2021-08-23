const btn=document.querySelector('button');
const init=document.querySelector('#initial');
const fin=document.querySelector('#final');
const noOfStocks=document.querySelector('#quantity');
const output=document.querySelector('#output');

btn.addEventListener('click',()=>{
  
  if(isNaN(init.value) || isNaN(noOfStocks.value) || isNaN(fin.value)){
    output.innerHTML='pls enter all the fields.'
  } 

  else{
    let profit=(fin.value-init.value)*noOfStocks.value;
    let profitprcnt=((fin.value-init.value)/init.value)*100;

    if(profit>0)
    output.innerHTML='Hey, the profit is '+profit+' and the percent increase per stock is '+profitprcnt + '%';

    else if(profit ==0)output.innerHTML='no profit no loss';

    else output.innerHTML='Hey, the loss is '+profit*(-1)+' and the percent decrease per stock is '+profitprcnt*(-1) + '%';
  }
})