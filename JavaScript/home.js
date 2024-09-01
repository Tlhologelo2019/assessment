const products = [
    { id: 7, name: "Blue long dress", price: 1500.00, image: "../images/dress.jpg" },
    { id: 1, name: "Grey Three piece Suit", price: 3500.00, image: "../images/Suit.jpg" },
    { id: 8, name: "Black dress", price: 2449.00, image: "../images/dress2.jpg" },
    { id: 2, name: "Black Three piece Suit", price: 3449.00, image: "../images/suit1.jpg" },  
    { id: 9, name: "Sky blue dress", price: 2600.00, image: "../images/dress3.jpg" },
    { id: 3, name: "Blue piece Suit", price: 2600.00, image: "../images/Suit2.jpg" } ,
    { id: 10, name: "Long dress", price: 2600.00, image: "../images/dress4.jpg" },
    { id: 4, name: "Marron Three piece Suit", price:  3200.00, image: "../images/suit3.jpg" },
    { id: 11, name: "Purple long dress", price: 2600.00, image: "../images/dress5.jpg" },
    { id: 5, name: "White Three piece Suit", price:  3200.00, image: "../images/suit4.jpg" },
    { id: 12, name: "Black dress", price: 2600.00, image: "../images/dress6.jpg" },   
    { id: 6, name: "Navy Blue Three piece Suit", price:  3200.00, image: "../images/suit5.jpg" }
];

function displayProducts(productArray) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';
    productArray.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("col-md-4", "product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <p>R${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// A function that will display products based on filtering
function filterByPrice() {
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;

    const filteredProducts = products.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
    });

    displayProducts(filteredProducts);
}
document.addEventListener('DOMContentLoaded', function () {
    displayProducts(products);
});

// A function to  add products to cart

function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Here we check  if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        alert(`${product.name} is already in the cart!`);
    } else {
        cart.push({...product, quantity: 1});
        alert(`${product.name} added to cart!`);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}