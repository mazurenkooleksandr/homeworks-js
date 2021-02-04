function thirdFun() {
    let number = document.getElementById('cycles-third-number').value;
    let arr = [];
    let resultNumber = document.getElementById("cycles-third-result");
    for (let i = 1; i <= number; i++) {
              
        if (number % i == 0) {
                    arr.push(i);         
        }
        resultNumber.innerHTML = 'Дільники числа: ' + arr;
    }

}
