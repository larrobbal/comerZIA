(() => {
    const navBar = document.querySelector("#main__navbar");
    const botonMobileNavbar = document.querySelector("#botton__mobile__menu");
    let buttons = document.querySelectorAll("a");
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute("href");
        document.querySelector(target).scrollIntoView({
            behavior: "smooth",
        });
        });
    });
    document.addEventListener("scroll", (e) => {
        if (window.scrollY > 100) {
        navBar.classList.add("bg-whiteapple");
        botonMobileNavbar.classList.remove("text-whiteapple");
        botonMobileNavbar.classList.add("text-blackapple");
        } else {
        navBar.classList.remove("bg-whiteapple");
        botonMobileNavbar.classList.add("text-whiteapple");
        botonMobileNavbar.classList.remove("text-blackapple");
        }
    });
    botonMobileNavbar.addEventListener('click', (e)=>{
        if(botonMobileNavbar.getAttribute('aria-expanded')=="true")
            botonMobileNavbar.classList.replace('text-whiteapple','text-blackapple');
        else if(botonMobileNavbar.getAttribute('aria-expanded')=="false" && window.scrollY < 100)
            botonMobileNavbar.classList.replace('text-blackapple','text-whiteapple');
    });
})();
