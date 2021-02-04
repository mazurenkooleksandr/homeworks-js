function thirdFun() {
    let number = document.getElementById('cycles-third-number').value;
    let arr = [];
    let resultNumber = document.getElementById("cycles-third-result");
    if(number < 0){
        number = number * -1;
    }
    for (let i = 1; i <= number; i++) {
              
        if (number % i == 0) {
                    arr.push(i);         
        }
        resultNumber.innerHTML = 'Дільники числа: ' + arr;
    }

}
