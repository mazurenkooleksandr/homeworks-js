let text = document.querySelector('.function-third-task-result');

document.querySelector('.function-third-button').onclick = function(){
    let a = document.querySelector('.function-third-a-input').value;
    let b = document.querySelector('.function-third-b-input').value;
    let c = document.querySelector('.function-third-c-input').value;
    let newArray = [];

    if(a != '' && b != '' && c != ''){
        newArray.push([a]);
        newArray.push([b]);
        newArray.push([c]);
    } else {
        alert('Введіть число');
    }
    
    text.textContent = `Результат: ${newArray.join('')}`;
}