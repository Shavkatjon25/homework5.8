const sorov=new XMLHttpRequest();
sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/ferghana");
function havo(){
    sorov.setRequestHeader("X-Api-Key","Ivpxt/fXWg4GYzocx/eq2Q==rwJbw7VWZtdSxgQS");
    sorov.send();
    const malumot=document.querySelector(".continer");
    sorov.addEventListener("load", ()=>{
        const bekentMalumot=JSON.parse(sorov.response);
        malumot.innerHTML=bekentMalumot.data;
        const lic=document.querySelector(".padd-block");
        const asos=document.querySelector(".continer1");
        asos.innerHTML="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='36' height='36' class='absolute ml-[300px] cursor-pointer blok'><path d='M3 4H21V6H3V4ZM3 19H21V21H3V19ZM3 14H21V16H3V14ZM3 9H21V11H3V9Z' fill='rgba(247,242,242,1)'></path></svg>" + lic.innerHTML;
        const turri=document.querySelector(".blok");
        turri.addEventListener("click", function(){
        b.style.display="grid";
})
    });
}
havo();
const b1 =document.getElementById("a1");
const b2 =document.getElementById("a2");
const b3 =document.getElementById("a3");
const b4 =document.getElementById("a4");
const b5 =document.getElementById("a5");
const b6 =document.getElementById("a6");
const b7 =document.getElementById("a7");
const b8 =document.getElementById("a8");
const b9 =document.getElementById("a9");
const b10 =document.getElementById("a10");
const  b11=document.getElementById("a11");
const  b12=document.getElementById("a12");
const  b=document.getElementById("a");

b1.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/tashkent");
    havo();
    b.style.display="none";
})
b2.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/ferghana");
    havo();
    b.style.display="none";
})
b3.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/andijan");
    havo();
    b.style.display="none";
})
b4.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/namangan");
    havo();
    b.style.display="none";
})
b5.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/bukhara");
    havo();
    b.style.display="none";
})
b6.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/samarkand");
    havo();
    b.style.display="none";
})
b7.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/karshi");
    havo();
    b.style.display="none";
})
b8.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/khiva");
    havo();
    b.style.display="none";
})
b9.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/termez");
    havo();
    b.style.display="none";
})
b10.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/jizzakh");
    havo();
    b.style.display="none";
})
b11.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/urgench");
    havo();
    b.style.display="none";
})
b12.addEventListener("click", function(){
    sorov.open("GET", "https://api.api-ninjas.com/v1/webscraper?url=https://obhavo.uz/nukus");
    havo();
    b.style.display="none";
})