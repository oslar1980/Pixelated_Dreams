//Menu
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToVisible = false;
    //Close the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    //Clases responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelector('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon(){
        const menuToggleBars = document.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.querySelector('menu-toggle > .fa-xmark');
        if(menuToggleBars){
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if(menuToggleTimes){
            menuToggleTimes.classList.remove('fa-bars');
            menuToggleTimes.classList.add('fa-xmark');
        }
    }

    //Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.querySelector('.scroll-to-top');
        if(document.documentElement.scrollTop > 100){
            if(!scrollToTopVisible){
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if(scrollToTopVisible){
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

//FadeOut
function fadeOut (el) {
    el.style.opacity = 1;
    (function fade(){
        if((el.style.opacity -= .1) < 0){
            el.style.display = "none";
        } else {
                requestAnimationFrame(fade);
        }
    })();
};

//FadeIn
function fadeIn (element, display) {
    element.style.opacity = 0;
    element.style.display = display || "block";
    (function fade() {
        var val = parseFloat(element.style.opacity);
        if(!((val += .1) > 1)){
            element.style.opacity = val;
        }
    })();
};
