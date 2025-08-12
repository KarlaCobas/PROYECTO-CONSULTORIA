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

            const testimonialCards = document.querySelectorAll('.testimonial-card');
            const prevBtn = document.querySelector('.testimonial-prev');
            const nextBtn = document.querySelector('.testimonial-next');
            let currentTestimonial = 0;

            function showTestimonial(index) {
                testimonialCards.forEach(card => {
                    card.classList.remove('active');
                });

                testimonialCards[index].classList.add('active');
                currentTestimonial = index;
            }

            prevBtn.addEventListener('click', function () {
                let newIndex = currentTestimonial - 1;
                if (newIndex < 0) {
                    newIndex = testimonialCards.length - 1;
                }
                showTestimonial(newIndex);
            });

            nextBtn.addEventListener('click', function () {
                let newIndex = currentTestimonial + 1;
                if (newIndex >= testimonialCards.length) {
                    newIndex = 0;
                }
                showTestimonial(newIndex);
            });

            setInterval(() => {
                let newIndex = currentTestimonial + 1;
                if (newIndex >= testimonialCards.length) {
                    newIndex = 0;
                }
                showTestimonial(newIndex);
            }, 3000);

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