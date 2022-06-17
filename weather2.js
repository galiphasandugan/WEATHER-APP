const form =document.querySelector(".top-banner form");
const input  = document.querySelector('.top-banner input');
const msg  = document.querySelector('span.msg');
const list = document.querySelector(".ajax-section .cities");



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi = ()=>{
    alert("https request was sent");
    // input.value='';
    let tokenKey = DecryptStringAES(localStorage.getItem("apiKey"));
    let inputVal =input.ariaValueMax; 
    form.reset();
}