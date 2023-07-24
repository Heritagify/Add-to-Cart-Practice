let products =
[
    {
        id: 1,
        name: 'Benz A Class',
        image: 'images/Benz A class.jpg',
        description : 'Lorem ipsum,quo at quia deleniti vel provident, deserunt nisi nulla nostrum, exercitationem fugit! Fugiat sit neque porro vitae possimus unde ipsum ab?',
        price: 10000
    },
    {
        id: 2,
        name: 'G-wagon',
        image: 'images/g-wagon.jpg',
        description : 'Lorem ipsum,quo at quia deleniti vel provident, deserunt nisi nulla nostrum, exercitationem fugit! Fugiat sit neque porro vitae possimus unde ipsum ab?',
        price: 15000
    },
    {
        id: 3,
        name: 'Rolls-Royce beat',
        image: 'images/rolllly.jpg',
        description : 'Lorem ipsum,quo at quia deleniti vel provident, deserunt nisi nulla nostrum, exercitationem fugit! Fugiat sit neque porro vitae possimus unde ipsum ab?',
        price: 105000 
    },
    {
        id: 4,
        name: 'Rolls-Royce A Class',
        image: 'images/rolls royce.jpg',
        description : 'Lorem ipsum,quo at quia deleniti vel provident, deserunt nisi nulla nostrum, exercitationem fugit! Fugiat sit neque porro vitae possimus unde ipsum ab?',
        price: 55000
    },
    {
        id: 5,
        name: 'Rolls',
        image: '/images/rolls.jpg',
        description : 'Lorem ipsum,quo at quia deleniti vel provident, deserunt nisi nulla nostrum, exercitationem fugit! Fugiat sit neque porro vitae possimus unde ipsum ab?',
        price: 25000
    }
];
const cart = [];


// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    
    const name = document.createElement('h3');
    name.textContent = product.name;
    card.appendChild(name);

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);


    
    const description = document.createElement('p');
    description.textContent = product.description;
    card.appendChild(description);
    
    const price = document.createElement('h5');
    price.textContent = `Price: $${product.price}`;
    card.appendChild(price);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () =>{addToCart(product)})
    card.appendChild(button);

    return card;
}

// Get the product container
let productContainer = document.getElementById('container');

products.forEach((product) => {
const card = createProductCard(product);
productContainer.appendChild(card);
});


function addToCart(product) {
const { description, ...productWithoutDescription } = product;
cart.push(product);
//   console.log('Product added to cart:', productWithoutDescription);
updateCartDisplay();
}

function calculateCartTotal() {
let total = 0;
cart.forEach((product) => {
total += product.price;
});
return total.toFixed(2);
}

// Function to update the cart display
function updateCartDisplay() {
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

cartItemsContainer.innerHTML = '';

cart.forEach((product) => {
const cartItem = document.createElement('li');
cartItem.classList.add('cart-item');

const image = document.createElement('img');
image.src = product.image;
image.alt = product.name;
cartItem.appendChild(image);

const productName = document.createElement('span');
productName.textContent = product.name;
cartItem.appendChild(productName);

const productPrice = document.createElement('span');
productPrice.innerHTML = `<p>$${product.price}</p>`;
cartItem.appendChild(productPrice);

const deleteButton = document.createElement('div');
deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteButton.addEventListener('click', () => {
  removeFromCart(product);
});
cartItem.appendChild(deleteButton);

cartItemsContainer.appendChild(cartItem);
});

const cartTotal = calculateCartTotal();
cartTotalElement.innerHTML = `Total: <p>$${cartTotal}</p>`;

count.textContent = cart.length; 
}

// Get the product container, cart container, and buttons
const cartBtn = document.getElementById('cartBtn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

// Create and append product cards
products.forEach((product) => {
const card = createProductCard(product);
productContainer.appendChild(card);
});

// Event listener for the cart button
cartBtn.addEventListener('click', () => {
sidebar.classList.add('open');
});

// Event listener for the close button
closeBtn.addEventListener('click', () => {
sidebar.classList.remove('open');
});

function removeFromCart(product) {
const productIndex = cart.findIndex((item) => item.id === product.id);
if (productIndex !== -1) {
cart.splice(productIndex, 1);
updateCartDisplay();
}
}