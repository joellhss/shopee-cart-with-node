async function addItemToCart(userCart, item) {
    userCart.push(item)
    console.log(`➕ Item ${item.name} added to cart.`);
}

async function deleteItemFromCart(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`✖️ Item ${name} removed from cart.`);
    } else {
        console.log(`😴 Item ${name} not found in cart.`);
    }
}

async function removeItemFromCart(userCart, item) {
    const index = userCart.indexOf(item);
    if (index !== -1 && userCart[index].quantity > 1) {
        userCart[index].quantity -= 1;
        console.log(`➖ Item ${item.name} quantity decreased. New quantity: ${userCart[index].quantity}`);
    } else if (index !== -1) {
        await deleteItemFromCart(userCart, item.name);
    } else { console.log(`😴 Item ${item.name} not found in cart.`); }
}

async function calculateTotalPrice(userCart) {
    return await userCart.reduce((total, item) => total +item.subtotal(), 0);
}
async function clearCart(userCart) {
}

async function displayCart(userCart) {
    console.log("\n🛒 Current items in cart:\n");
    userCart.forEach(item => {
        console.log(`✅ ${item.name} - Price: ${item.price}, Quantity: ${item.quantity}, Subtotal: ${item.subtotal()}`);
    });

    console.log(`\n🛒 Total items in cart: ${userCart.length}`);
    console.log(`💰 Total price of cart: ${await calculateTotalPrice(userCart)}\n`);
}

export { addItemToCart, deleteItemFromCart, removeItemFromCart, calculateTotalPrice, clearCart, displayCart };