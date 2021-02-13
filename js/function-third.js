let text = document.querySelector('.function-third-task-result');

document.querySelector('.function-third-button').onclick = function(){
    let letters = ['a', 'b', 'c'];
    let digits = [];
    let allIsOK = true;
    for (let i = 0; i < letters.length; i++) {
      digits[i] = Number.parseInt(
        document.querySelector(`.function-third-${letters[i]}-input`).value
      );

      if (isNaN(digits[i]) || (digits[i] < 0 || digits[i] > 9)) {
        allIsOK = false;
        break;
      }
    }
    
    if (!allIsOK || digits[0] == 0) {
      alert("Введите цифры правильно");
      return;
    }

    let result = 0;
    for (let i = 0, j = digits.length - 1; i < digits.length; i++, j--) {
      result+= digits[j] * (10**i);
    }
    
    text.textContent = `Результат: ${result}`;
}
