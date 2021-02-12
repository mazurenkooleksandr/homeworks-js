let text = document.querySelector('.function-first-task-result');

document.querySelector('.function-first-button').onclick = function(){
    let a = +document.querySelector('.function-first-a-input').value;
    let b = +document.querySelector('.function-first-b-input').value;

        if(a < b) {
            text.textContent = `Результат: перше число менше, ніж друге  -1`
        } else if (a > b) {
            text.textContent = `Результат: перше число більше, ніж друге  1`
        } else if (a == 0 || b == 0){
            alert('Введіть значення');  
        } else {
        text.textContent = `Результат: числа рівні  0`
    }
}
    
    
    




