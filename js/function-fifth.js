let text = document.querySelector('.function-fifth-result');
document.querySelector('.function-fifth-button').onclick = function(){
let numberValue = +document.querySelector('.function-fifth-input').value;
    let resultArr = [];
    for(let i = 3; i <= numberValue; i++){
        let a = 1;
        for(let j = 2, n = parseInt(i/2); j <= n; j++){
            if(!(i % j))
                a += j;
        }
        if (i == a)
        resultArr.push(i);
    }

    text.textContent = `Результат: ${resultArr}`;
    
    return resultArr;

    
    
}



