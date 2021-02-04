function firstFun() {
    let startNumber = +document.getElementById('cycles-first-number__tab_1').value;
    let endNumber = +document.getElementById('cycles-first-number__tab_2').value;
    let resultNumber = document.getElementById("cycles-first-result");
    let sum = 0;    
    while(startNumber <= endNumber){
        sum+=startNumber;  
        startNumber++;
    }
     
    resultNumber.innerHTML = 'Сума: ' + sum;
}




