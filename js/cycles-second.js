function nod(obj){
    let res = document.getElementById('res');
    let n=obj.numl.value 
    let m=obj.num2.value 
    let p = n%m 
    while (p!=0) {
    n=m 
    m=p 
    p=n%m 
    }
    res.innerHTML='Найбільший спільний дільник: ' + m;
}        
    

   