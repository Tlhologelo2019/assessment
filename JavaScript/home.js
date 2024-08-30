const products = [
    { id: 1, name: "Grey Three piece Suit", price: 3500.00, image: "../images/Suit.jpg" },
    { id: 9, name: "3", price: 2600.00, image: "../images/dress3.jpg" },
    { id: 10, name: "4", price: 2600.00, image: "../images/dress4.jpg" },
    { id: 4, name: "Navy Blue Three piece Suit", price:  3200.00, image: "../images/suit3.jpg" },
    { id: 5, name: "Navy Blue Three piece Suit", price:  3200.00, image: "../images/suit4.jpg" },
    { id: 12, name: "4", price: 2600.00, image: "../images/dress6.jpg" }
];


const productList = document.getElementById("product-list");

function displayProducts(productArray) {
    productList.innerHTML = '';
    productArray.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("col-md-4", "product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>R${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {

        alert(`${product.name} already in the cart!`);
    } else {
        cart.push({...product, quantity: 1});
        alert(`${product.name} added to cart!`);
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}



displayProducts(products);


