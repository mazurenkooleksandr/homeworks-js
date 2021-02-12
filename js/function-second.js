let text = document.querySelector('#function-second-result');

document.querySelector('.function-second-button').onclick = function factorial() {
    let result = 1;
    let b = +document.querySelector('#function-second-input').value;
    let n = Math.floor(b);
    console.log(n);
    if(n > 0) {
        while(n){
            result *= n--;
        }
        text.textContent = `Факторіалом числа ${b} являється ${result}`;
    } else {
        alert('Введіть позитивне ціле число');
    }
    return result;
}





