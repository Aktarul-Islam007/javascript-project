function calculate(num){
    const inputvalu = document.getElementById('input-btn').value;
    const inputtotal = inputvalu + num;
    document.getElementById('input-btn').value = inputtotal;
}

const equal= document.getElementById('equalbtn');
equal.addEventListener('click',function(){
    const equalnumber = document.getElementById('input-btn').value;
    const totol = eval(equalnumber);
    document.getElementById('input-btn').value = totol;
})

const clears= document.getElementById('clear-btn');
clears.addEventListener('click',function(){
    const equalnumber = document.getElementById('input-btn').value ="";
})
const clear= document.getElementById('clear');
clear.addEventListener('click',function(){
    const equalnumber = document.getElementById('input-btn').value ="";
})
