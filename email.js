
import emailjs from 'emailjs-com';

function sendEmail(event) {
    event.preventDefault(); 

    const form = event.target;

    emailjs.sendForm('service_6otqoam', 'template_aw1u3f6', form, 'hm29-LwOzj5z22Ye0')
        .then((result) => {
            console.log('Success:', result.text);
            alert('Your message has been sent successfully!');
            form.reset(); 
        }, (error) => {
            console.error('Error:', error.text);
            alert('Oops! Something went wrong. Please try again.');
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', sendEmail);
    }
});
