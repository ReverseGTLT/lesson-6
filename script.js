const header = document.querySelector('.asidel')
 window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    console.log(scrollPos)
    if (scrollPos >=100) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
 })

 document.addEventListener('DOMContentLoaded', function() {
    let scrollPos = window.scrollY;
    if (scrollPos >=100) {
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
 })

 const heade = document.querySelector('.asider')
 window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    if (scrollPos >=100) {
        heade.classList.add('scrolling');
    } else {
        heade.classList.remove('scrolling');
    }
 })

 document.addEventListener('DOMContentLoaded', function() {
    let scrollPos = window.scrollY;
    if (scrollPos >=100) {
        heade.classList.add('scrolling');
    } else {
        heade.classList.remove('scrolling');
    }
 })
 
 //1580
 const hiden = document.querySelector('.hiden')
 if (document.documentElement.clientWidth < 1600) {
    hiden.classList.add('hidenon')
 } else {
    hiden.classList.remove('hidenon')
 }

 const head = document.querySelector('.head')
 window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    if (scrollPos >=100) {
        head.classList.add('new');
    } else {
        head.classList.remove('new');
    }
 })

 const footer = document.querySelector('.heade')
 window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    if (scrollPos >=100) {
        footer.classList.add('new');
    } else {
        footer.classList.remove('new');
    }
 })