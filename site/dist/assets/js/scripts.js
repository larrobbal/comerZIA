(function($)
{
  'use strict';
  $(document).on("scroll", function()
  {
    var navbar = document.querySelector('#nav-bar');
    var optionsNavbar = document.querySelectorAll('.navbarOptions a');
    var $window = $(window);
    if($window.width()>240)
    {
      if ($(document).scrollTop() > 150)
      {
        navbar.classList.remove('bg-gradient-to-b','from-black/70','via-black/35','to-white/0','text-whiteCmz');
        navbar.classList.add('bg-whiteCmz','text-colormain','shadow-bottomShadow');
        optionsNavbar.forEach((option)=>
        {
            option.classList.remove('from-white/70','via-white/35','to-white/0','hover:text-colormain');
            option.classList.add('from-colormain/70','via-colormain/35','to-colormain/0','hover:text-whiteCmz');
        });
      } 
      else 
      {
        navbar.classList.add('bg-gradient-to-b','from-black/70','via-black/35','to-white/0','text-whiteCmz');
        navbar.classList.remove('bg-whiteCmz','text-colormain','shadow-bottomShadow');
        optionsNavbar.forEach((option)=>
        {
            option.classList.remove('from-colormain/70','via-colormain/35','to-colormain/0','hover:text-whiteCmz');
            option.classList.add('from-white/70','via-white/35','to-white/0','hover:text-colormain');
        });
      }
    }
  });
  $(document).on("scroll", function()
  {
    const height = window.innerHeight;
    var aboutSectionViewportHeight = document.getElementById('about-us').getBoundingClientRect().top;
    if(aboutSectionViewportHeight<=(height*0.6666))
      document.getElementById('about-us-content').classList.remove('invisible');
  });
  function mobileButtonEvent()
  {
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  function dropdownMenuAboutUs()
  {
    const dropdownLink = document.querySelector("a#dropdownNavbarLink");
    const dropdownMenu = document.querySelector("#dropdownNavbar");
    dropdownLink.addEventListener("click", () => {
      if(dropdownMenu.classList.contains('hidden'))
        dropdownMenu.classList.remove('hidden');
      else
        dropdownMenu.classList.add('hidden');
    });
    window.onclick = function(e) {
      if (!e.target.matches('a#dropdownNavbarLink')&&!dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('hidden');
      }
    }
  }
  function dropdownMenuAboutUsMobile()
  {
    const dropdownLink = document.querySelector("a#dropdownNavbarLinkMobile");
    const dropdownMenu = document.querySelector("#dropdownNavbarMobile");
    dropdownLink.addEventListener("click", () => {
      if(dropdownMenu.classList.contains('hidden'))
        dropdownMenu.classList.remove('hidden');
      else
        dropdownMenu.classList.add('hidden');
    });
    window.onclick = function(e) {
      if (!e.target.matches('a#dropdownNavbarLinkMobile')&&!dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('hidden');
      }
    }
  }
  $(document).ready(mobileButtonEvent);
  $(document).ready(dropdownMenuAboutUs);
  $(document).ready(dropdownMenuAboutUsMobile);
})(jQuery);