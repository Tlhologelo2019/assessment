let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById("product-list");
const totalPriceElement = document.getElementById("total-price");

// Function to display cart items
function displayCart() {
    const cartItems = document.getElementById("product-list");
    const totalPriceElement = document.getElementById("total-price");
    const cartSummary = document.getElementById("cart-summary");

    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartSummary.style.display = 'none';
    } else {
        cartSummary.style.display = 'block';

        // Display each item in the cart
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("col-md-4", "product-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h5>${item.name}</h5>
                <p>R${(item.price * item.quantity).toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="addQuantity(${item.id})">Add</button>
                <button onclick="removeFromCart(${item.id})" class="remove-button">Remove</button>
            `;
            cartItems.appendChild(cartItem);

            total += item.price * item.quantity;
        });

        totalPriceElement.textContent = total.toFixed(2);
    }
}

// Function to remove an item from the cart or decrease its quantity
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

// Function to add quantity of an item in the cart
function addQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}
// Initialize cart display on page load
displayCart();
