const products = [
    { id: 7, name: "Blue long dress", price: 1500.00, image: "../images/dress.jpg" },
    { id: 8, name: "Black dress", price: 2449.00, image: "../images/dress2.jpg" }, 
    { id: 9, name: "Sky blue dress", price: 2600.00, image: "../images/dress3.jpg" },
    { id: 10, name: "Long dress", price: 2600.00, image: "../images/dress4.jpg" },
    { id: 11, name: "Purple long dress", price: 2600.00, image: "../images/dress5.jpg" },
    { id: 12, name: "Black dress", price: 2600.00, image: "../images/dress6.jpg" }

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