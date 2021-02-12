let text = document.querySelector('.function-fourth-result');

document.querySelector('.function-fourth-button').onclick = function () {
    let a = document.querySelector('.function-fourth-a-input').value;
    let b = document.querySelector('.function-fourth-b-input').value;
    let s = 0;
    let c;

    if (a !='' && b !='') {
        s=a*b;
    } else if (a =='' && b !='' ) {
        c = b;
        s =c*c;
        
    } else if (a !='' && b ==''){
        c = a;
        s =c*c;
    } else {
        alert('Введи значення')
    }
   
    text.innerHTML = `Площа: ${s}<span>(м)<sup>2</sup></span>`;
}

