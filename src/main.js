const formOpenBtn = document.querySelector('#form-open')
const home = document.querySelector('.home')
const formContainer = document.querySelector('.form_container')
const formCloseBtn = document.querySelector('.form_close')
const signupBtn = document.querySelector('#signup')
const loginupBtn = document.querySelector('#loginup')
const  pwShowHide = document.querySelectorAll('.pw_hide')


formOpenBtn.addEventListener("click", (e)=>{
    home.classList.add("show")
})

formCloseBtn.addEventListener("click", (e)=>{
    home.classList.remove('show')
})

signupBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    formContainer.classList.add("active")
})
loginupBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    formContainer.classList.remove("active")
})

pwShowHide.forEach((icon)=>{
    icon.addEventListener("click", (e) => {
        let getPwInput =  icon.parentElement.querySelector("input")
    })
})