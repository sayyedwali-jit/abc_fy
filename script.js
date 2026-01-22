document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded Successfully');

    // --- Profile Image Slider Logic ---
    const slides = document.querySelectorAll('.profile-img');
    let currentSlide = 0;
    const slideInterval = 3000; // Change image every 3 seconds

    function nextSlide() {
        // Remove 'active' class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Calculate next slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add 'active' class to next slide
        slides[currentSlide].classList.add('active');
    }

    // Start automatic sliding if slides exist
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }
    // ----------------------------------

    // Optional: Add smooth scrolling for anchor links if not supported natively
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
