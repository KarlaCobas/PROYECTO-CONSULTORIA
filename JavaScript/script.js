        document.addEventListener('DOMContentLoaded', function () {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('.nav');
            const navLinks = document.querySelectorAll('.nav-link');

            hamburger.addEventListener('click', function () {
                hamburger.classList.toggle('active');
                nav.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                });
            });

    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const testimonialCount = testimonials.length;
    
    function updateTestimonials() {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active', 'prev', 'next');
        });
        
        testimonials[currentIndex].classList.add('active');
        
        const prevIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
        const nextIndex = (currentIndex + 1) % testimonialCount;
        
        testimonials[prevIndex].classList.add('prev');
        testimonials[nextIndex].classList.add('next');
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToTestimonial(index) {
        currentIndex = index;
        updateTestimonials();
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialCount;
        updateTestimonials();
    }
    
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
        updateTestimonials();
    }
    
    prevBtn.addEventListener('click', prevTestimonial);
    nextBtn.addEventListener('click', nextTestimonial);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToTestimonial(index));
    });
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const testimonialsWrapper = document.querySelector('.testimonials-wrapper');
    
    testimonialsWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    testimonialsWrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextTestimonial();
        }
        if (touchEndX > touchStartX + 50) {
            prevTestimonial();
        }
    }
    
    let autoplayInterval = setInterval(nextTestimonial, 5000);
    
    testimonialsWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    testimonialsWrapper.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextTestimonial, 5000);
    });
    
    updateTestimonials();
            const header = document.querySelector('.header');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            const sections = document.querySelectorAll('.section');
            
            function checkScroll() {
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (sectionTop < windowHeight - 100) {
                        section.classList.add('visible');
                    }
                });
            }

            window.addEventListener('load', checkScroll);
            window.addEventListener('scroll', checkScroll);
            
            if (sections.length > 0) {
                sections[0].classList.add('visible');
            }
        });