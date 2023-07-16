var typed  = new Typed(".text",{
    strings:["Frontend Developer", "Blogger", "Full Stack Developer","Swift UI Designer","Cyber-security analyst","Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    });
}