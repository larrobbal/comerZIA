(() => {
    const navBar = document.querySelector("#main__navbar");
    const botonMobileNavbar = document.querySelector("#botton__mobile__menu");
    const desktopOptions = document.querySelector("#desktop__options");
    const options = desktopOptions.querySelectorAll(":scope > li > a");
    const navbarLogo = document.querySelector("#navbar__logo");
    // Get the button
    const mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button

    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.classList.remove("hidden");
        } else {
            mybutton.classList.add("hidden");
        }
    };
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    window.addEventListener("scroll", scrollFunction);

    let buttons = document.querySelectorAll("a[data-navigation]");
    //Smooth scroll animation with click event
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            let target = e.currentTarget.getAttribute("href");
            document.querySelector(target).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
    //Navbar animation color with scroll event
    document.addEventListener("scroll", (e) => {
        if (window.scrollY > 100) {
            navbarLogo.src = 'assets/img/main__logo.svg';
            navBar.classList.add("bg-whiteapple");
            navBar.classList.add("shadow");
            botonMobileNavbar.classList.remove("text-whiteapple");
            botonMobileNavbar.classList.add("text-blackapple");
            options.forEach(op => {
                op.classList.replace('text-whiteapple', 'text-blackapple');
            });
        } else {
            navbarLogo.src = 'assets/img/alt__logo.svg';
            navBar.classList.remove("bg-whiteapple");
            navBar.classList.remove("shadow");
            botonMobileNavbar.classList.add("text-whiteapple");
            botonMobileNavbar.classList.remove("text-blackapple");
            options.forEach(op => {
                op.classList.replace('text-blackapple', 'text-whiteapple');
            });
        }
    });
})();
