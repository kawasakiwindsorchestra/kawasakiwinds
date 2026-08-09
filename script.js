const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));
const topBtn=document.querySelector(".top");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",scrollY>450));
topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));
document.getElementById("year").textContent=new Date().getFullYear();
