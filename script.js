// JSON object containing product data
const products = [
    {
        "id": 1,
        "name": "Tortilla",
        "description": "Jucy tortilla...",
        "price": 29.99,
        "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        "id": 2,
        "name": "steak",
        "description": "A well done jucy steak",
        "price": 39.99,
        "image": "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        "id": 3,
        "name": "Soup",
        "description": "a cup of falvored chicken soup",
        "price": 49.99,
        "image": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
];

console.log('products ',products);
// Function to display products
function mainproducts(products) {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="buy-btn">Buy Now</button>
        `;
        productList.appendChild(productCard);
    });
}

// Call the function to display products
mainproducts(products);