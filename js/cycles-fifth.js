function fifthFun() {
let arr = document.getElementById('cycles-fifth-number').value.split ` `;
let resultPositive = document.getElementById('cycles-fifth-result-positive');
let resultNegative = document.getElementById('cycles-fifth-result-negative');
let resultLoyal = document.getElementById('cycles-fifth-result-loyal');

 
let positive = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 1).length,
     negative = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == -1).length,
     loyal = [...arr].map(e => Math.sign(+e) ).filter(cur => +cur == 0).length;

    resultPositive.innerHTML = 'Позитивні числа: ' + positive;
    resultNegative.innerHTML = 'Негативні числа: ' + negative;
    resultLoyal.innerHTML = 'Кількість нулів: ' + loyal;
}


