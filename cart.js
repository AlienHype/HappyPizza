let cart = [];
const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');

function addToCart(item) {
    cart.push(item);
    updateCartSidebar();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartSidebar();
}

function updateCartSidebar() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <li>
                <span>${item.name} - Rs.${item.price.toFixed(2)}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </li>
        `;
    });
    cartTotal.textContent = `Rs.${total.toFixed(2)}`;
}
