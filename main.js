let sideBar = document.querySelector('.side-bar');

let button = document.querySelector('#toggleButton');

let email = document.querySelector('#email');


button.addEventListener("click",()=>{
    sideBar.classList.toggle('active');
    button.classList.toggle('change');
});


email.addEventListener("change",()=>{
    email.value = "";
    email.placeholder = "No Any Database Connected...";
    setTimeout(()=>{
        email.placeholder = "Enter Email Address";
    },2000);
});