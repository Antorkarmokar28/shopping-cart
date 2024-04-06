const addProducts = () =>{
    const productsNameField = document.getElementById('product-name-field');
    const productsName = productsNameField.value;
    const productQuantityField = document.getElementById('product-quantity-field');
    const quantity = productQuantityField.value;
    productsNameField.value = '';
    productQuantityField.value = '';
    displayProducts(productsName, quantity);
    setProductToLocalStorage(productsName, quantity);
};
const displayProducts = (productName, quantity) =>{
    const productsContainer = document.getElementById('products-container');
    const li = document.createElement('li');
    li.innerText = `${productName}: ${quantity}`;
    productsContainer.appendChild(li);
}
const getProductFromLocalStorage = () =>{
    let cart = {};
    const getCart = localStorage.getItem('cart');
    if(getCart){
        cart = JSON.parse(getCart);
    }
    return cart;
}
const setProductToLocalStorage = (product, quantity) =>{
    const cart = getProductFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const displayProductFromLocalStorage = () =>{
    const saveProduct = getProductFromLocalStorage();
    for(const product in saveProduct){
        const quantity = saveProduct[product];
        displayProducts(product, quantity);
    }
}

displayProductFromLocalStorage();

// const getStoredShoppingCart = () =>{
//     let cart = {};
//     const storedCart = localStorage.getItem('cart');
//     if(storedCart){
//         cart = JSON.parse(storedCart);
//     };
//     return cart;
// };
// const saveProducttoLocalStorage = (product, quantity) =>{
//     const cart = getStoredShoppingCart();
//     cart[product] = quantity;
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringified);
// }
// const displayProductsFromLocalStorage = () =>{
//     const saveCart =  getStoredShoppingCart();
//     for(const product in saveCart){
//         const quantity = saveCart[product];
//         displayProducts(product, quantity);
//     }
// }

// displayProductsFromLocalStorage();