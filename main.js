// main.js

// Navbar Toggle for Mobile View
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Booking Form
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('.booking-form form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            let isValid = true;

            const checkin = document.getElementById('checkin');
            const checkout = document.getElementById('checkout');
            const guests = document.getElementById('guests');
            const roomType = document.getElementById('roomtype');

            // Check if fields are empty
            if (!checkin.value) {
                alert('Please select a check-in date.');
                isValid = false;
            }

            if (!checkout.value) {
                alert('Please select a check-out date.');
                isValid = false;
            }

            if (!guests.value || guests.value < 1) {
                alert('Please enter the number of guests.');
                isValid = false;
            }

            if (!roomType.value) {
                alert('Please select a room type.');
                isValid = false;
            }

            // Prevent form submission if not valid
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});

// Room Carousel on Rooms Page
document.addEventListener("DOMContentLoaded", function () {
    const roomCarousel = document.querySelector('.room-carousel');
    if (roomCarousel) {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.room-carousel .slide');
        const nextButton = document.querySelector('.next-slide');
        const prevButton = document.querySelector('.prev-slide');

        // Show first slide initially
        showSlides(slideIndex);

        // Next/Prev controls
        if (nextButton) {
            nextButton.addEventListener('click', function () {
                showSlides(++slideIndex);
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', function () {
                showSlides(--slideIndex);
            });
        }

        function showSlides(index) {
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            }

            slides.forEach(slide => {
                slide.style.display = 'none';
            });

            slides[slideIndex].style.display = 'block';
        }
    }
});

// Interactive FAQ Section (for FAQ page)
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems) {
        faqItems.forEach(item => {
            item.addEventListener('click', function () {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }
});

// Contact Form Email Validation
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const email = document.getElementById('email');
            const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (!email.value.match(emailPattern)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        });
    }
});
