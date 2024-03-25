var nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 150){
        nav.classList.add('bg-dark' , 'shadow');
    }else{
        nav.classList.remove('bg-dark','shadow'); 
    }
});
function Welcome(){window.location.href="#"}
scrollIcon=document.getElementById("scroll-top");function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?scrollIcon.style.display="block":scrollIcon.style.display="none"}function scrollTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}scrollIcon.onclick=()=>{scrollTop()},window.onscroll=()=>{scrollFunction(),scrollToggle()};
time={
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    altInput: true,
    altFormat:"F j, Y (h : S K)"
}
    flatpickr("input[type=datetime-local]",time );

    let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(a=>{
        a.addEventListener('click', function(){
            navLinks.forEach(a=>a.classList.remove('active'));
            this.classList.add('active');
        });
    });
 
    let menu = document.querySelectorAll('.m');

    menu.forEach(a=>{
        div.addEventListener('click', function(){
            navLinks.forEach(div=>div.classList.remove('active'));
            this.classList.add('active');
        });
    });