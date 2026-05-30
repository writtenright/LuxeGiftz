lucide.createIcons();

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        header.style.height = "75px";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.height = "90px";
        header.style.boxShadow = "none";

    }

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

reveals.forEach(item => observer.observe(item));