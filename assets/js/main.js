$(document).ready(function () {


    $('.hero-slider-wrapper').slick({
        infinite: true,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".prevBtn",
        nextArrow: ".nextBtn",
        speed: 1000,

    });

    const headerWrap = document.querySelector(".header-wrap")
    window.addEventListener("scroll", function () {
        if (this.scrollY > 50) {
            headerWrap.classList.add("active")
        } else {
            headerWrap.classList.remove("active")
        }
    })

    $("#marqueeLeft").marquee({
        direction: "left",
        speed: 20,
        loop: true,
        pausehover: false,
        spaceBetween: 10,
    });

    $("#marqueeRight").marquee({
        direction: "right",
        speed: 20,
        loop: true,
        pausehover: false,
        spaceBetween: 10,
    });

    $("#marqueeRight2").marquee({
        direction: "right",
        speed: 10,
        loop: true,
        pausehover: false,
        spaceBetween: 10,
    });

    const barsBtn = document.querySelector(".humber-btn");
    const mainNav = document.querySelector(".main-menu-nav");
    const overlay = document.querySelector(".body-overlay")

    barsBtn.addEventListener("click", function () {
        mainNav.classList.toggle("active");
        overlay.classList.toggle("active")
    })

    overlay.addEventListener("click", function () {
        mainNav.classList.remove("active")
        this.classList.remove("active")
    })


    // Counter JS

    function counterFunc() {
        function animateCounter(counter) {
            const target = +counter.getAttribute("data-target");
            const duration = 2000; // Animation duration in milliseconds
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;

            const timer = setInterval(() => {
                current += 1;
                counter.textContent = current;
                if (current >= target) {
                    clearInterval(timer); // Stop the animation when target is reached
                }
            }, stepTime);
        }

        // Select all counters and animate them
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => animateCounter(counter));
    }
    counterFunc();










})