// Custom JavaScript for Rumah Tenang

document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // AOS initialization
    AOS.init();

    // Booking form handler
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('guest-name').value;
            const email = document.getElementById('guest-email').value;
            const checkin = document.getElementById('checkin-date').value;
            const checkout = document.getElementById('checkout-date').value;
            const message = document.getElementById('guest-message').value;

            const subject = `Booking Inquiry from ${name}`;
            const body = `
                Hello Rumah Tenang,

                I would like to inquire about a booking with the following details:

                Name: ${name}
                Email: ${email}
                Check-in Date: ${checkin}
                Check-out Date: ${checkout}

                Message:
                ${message}

                Thank you!
            `;

            window.location.href = `mailto:hello@rumahtenang.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    // Back to top button handler
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }
});
