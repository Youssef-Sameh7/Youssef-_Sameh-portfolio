document.addEventListener('DOMContentLoaded', () => {

    // 1. Auto Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            primaryNav.classList.toggle('active');
        });
    }

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formStatus = document.getElementById('formStatus');

    // Helper function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Clear previous error messages
    const clearErrors = () => {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        formStatus.textContent = '';
        formStatus.className = 'form-status';
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            // Validate Name
            if (!nameInput.value.trim()) {
                nameError.textContent = 'Please enter your name.';
                isValid = false;
            }

            // Validate Email
            if (!emailInput.value.trim()) {
                emailError.textContent = 'Please enter your email address.';
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                messageError.textContent = 'Please enter a message.';
                isValid = false;
            }

            // Handle successful submission
            if (isValid) {
                formStatus.style.color = '#10b981'; // Logic High / Signal Green
                formStatus.textContent = 'Signal sent successfully! I will get back to you soon.';
                contactForm.reset();
            } else {
                formStatus.style.color = '#ef4444'; // Error Red
                formStatus.textContent = 'Please fix the errors above before submitting.';
            }
        });
    }
});