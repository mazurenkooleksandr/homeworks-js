document.querySelector('.dom-second-button').onclick = function () {
    let modalTwo = document.getElementById("ask_modal");
    let spanTwo = document.getElementsByClassName("close_modal_window-two")[0];
       
       
    modalTwo.style.display = "block";
       
       
    spanTwo.onclick = function () {
    modalTwo.style.display = "none";
    }
       
    windowTwo.onclick = function (event) {
    if (event.target == modalTwo) {
         modalTwo.style.display = "none";
    }
    }
}