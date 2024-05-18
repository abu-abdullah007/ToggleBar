let sideBar = document.querySelector('.side-bar');

let button = document.querySelector('#toggleButton');


button.addEventListener("click",()=>{
    sideBar.classList.toggle('active');
    button.classList.toggle('change');
});