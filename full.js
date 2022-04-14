let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let nav = document.getElementById('nav');
    nav.classList.toggle('responsive-menu');
    let show2 = document.getElementById('show2');
    let show1 = document.getElementById('show');
    if(nav.className == 'navBar responsive-menu')
    {
        show1.style.display = "block";
        show2.style.display = "none";
                 
    }
    else{
        show2.style.display = "block";
        show1.style.display = "none";
    }
    

})