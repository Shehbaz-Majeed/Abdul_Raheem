let hamburger=document.querySelector('.hamburger');
let navlist=document.querySelector('.nav-list');
hamburger.onclick=()=>{
    hamburger.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}