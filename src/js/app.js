var slideIndex = 1;
const currentSlide = (n) => {
    showSlides(slideIndex = n)
}

const showSlides = (n) => {
    const slides = document.getElementsByClassName("the-slides")
    const dots = document.getElementsByClassName("dot")

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for(var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    for(var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " active"
}

showSlides(slideIndex)

const navItems = document.querySelectorAll(".menu-item")
navItems.forEach( (e) => {
    e.addEventListener("click", () => {
        navItems.forEach( (e2) => {
            e2.classList.remove("menu-item-active")
        })
        e.classList.add("menu-item-active")
    })
})


