let searchbtn = document.querySelector('#search');
let searchfrm = document.querySelector('.head .search-bar');

searchbtn.onclick = () => {
    searchfrm.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.head .navbar');
document.querySelector('#bars').onclick = () => {
    menu.classList.toggle('active');
    searchfrm.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    searchfrm.classList.remove('active');
}

const cartIcon = document.querySelector('#cart');
const cartSidebar = document.querySelector('#cart-sidebar');
const closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cartSidebar.classList.toggle('active');
}

closeCart.onclick = () => {
    cartSidebar.classList.remove('active');
}



// Show the login popup when the login icon is clicked
document.getElementById('login-icon').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'block';
});

// Show the registration popup when the register icon is clicked
document.getElementById('register-icon').addEventListener('click', function() {
    document.getElementById('register-popup').style.display = 'block';
});

// Close the login popup when the close button is clicked
document.getElementById('close-login').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none';
});

// Close the registration popup when the close button is clicked
document.getElementById('close-register').addEventListener('click', function() {
    document.getElementById('register-popup').style.display = 'none';
});

// Close the popups if the user clicks outside of them
window.addEventListener('click', function(event) {
    const loginPopup = document.getElementById('login-popup');
    const registerPopup = document.getElementById('register-popup');
    const popupContent = document.querySelectorAll('.popup-content');
    
    if (event.target === loginPopup && !popupContent[0].contains(event.target)) {
        loginPopup.style.display = 'none';
    }

    if (event.target === registerPopup && !popupContent[1].contains(event.target)) {
        registerPopup.style.display = 'none';
    }
});


function handleLogin(userName) {
    // Update the welcome message
    const welcomeMessage = document.getElementById('welcome-message');
    const userNameSpan = document.getElementById('user-name');
    
    userNameSpan.textContent = userName;
    welcomeMessage.style.display = 'block'; // Show the welcome message

    // Close the login popup
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none';

    // Redirect to index.html#menu
    window.location.href = 'index.html#menu';
}

// Example: Call handleLogin when user logs in
document.querySelector('#login-popup form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Assume user login is successful and we get the username
    const userName = document.querySelector('#login-email').value.split('@')[0]; // Simple example
    handleLogin(userName);
});


