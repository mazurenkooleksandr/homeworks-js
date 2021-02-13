let text = document.querySelector('.function-third-task-result');

document.querySelector('.function-third-button').onclick = function(){
    let a = document.querySelector('.function-third-a-input').value;
    let b = document.querySelector('.function-third-b-input').value;
    let c = document.querySelector('.function-third-c-input').value;

    a = Number.parseInt(a);
    b = Number.parseInt(b);
    c = Number.parseInt(c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert("Введите цифры правильно");
      return;
    }
    
    if ((a < 1 || a > 9) || (b < 0 || b > 9) || (c < 0 || c > 9)) {
      alert("Введите цифры правильно");
      return;
    }

    let result = a * 100 + b * 10 + c;
    
    text.textContent = `Результат: ${result}`;
}
