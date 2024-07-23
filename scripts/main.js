// JavaScript para agregar la clase "visible" cuando la sección está en vista
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.skills-category');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    categories.forEach(category => {
        observer.observe(category);
    });
});

// JavaScript para agregar la clase "visible" cuando la sección está en vista
document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero-section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(heroSection);
});


document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.querySelector('.skills-section');
    const skillCategories = document.querySelectorAll('.skills-category');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(skillsSection);
    skillCategories.forEach(category => {
        observer.observe(category);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const skillsSection = document.querySelector('.skills-section');

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo
            skillsSection.classList.remove('hidden');
        } else {
            // Scroll hacia arriba
            skillsSection.classList.add('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    document.querySelectorAll('.skills-section, .skills-category, .projects-section, .project-card').forEach(section => {
        observer.observe(section);
    });
});


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})

var check=document.querySelector(".check");
check.addEventListener( 'click' , idioma) ;

function idioma(){
    let id=check. checked;
    if(id == true){
        location.href="en/index.html";

    }
    else{
        location.href="../index.html";
    }
}
