import client from "../shopify-client";


export const getExistingCheckoutId = () =>
    localStorage.getItem('checkoutId');

export const getOrCreateCheckoutId = async () => {
    const checkoutId = getExistingCheckoutId();
    if (checkoutId)
        return checkoutId;
    else {
        // Create an empty checkout
        const checkout = await client.checkout.create()
        localStorage.setItem("checkoutId", checkout.id)
        return checkout.id;
    }
};


export const fetchCart = async () => {
    const checkoutId = await getOrCreateCheckoutId();
    const checkout = await client.checkout.fetch(checkoutId)
    return checkout;
};


export const addCartItem = async (variantId, quantity) => {
    const checkoutId = await getOrCreateCheckoutId();
    const lineItemsToAdd = [
        {
            variantId: variantId,
            quantity: quantity,
        }
    ];

    // Add an item to the checkout
    const newCart = await client.checkout.addLineItems(checkoutId, lineItemsToAdd) 
    return newCart;
};

export const updateCartItem = async (variantId, quantity) => {
    const checkoutId = await getOrCreateCheckoutId();
    const lineItemsToUpdate = [
        {
            id: variantId,
            quantity: quantity,
        }
    ];
    // update an item to the checkout
    const newCart = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
    return newCart;
};

export const removeCartItem = async (variantId) => {
    const checkoutId = await getOrCreateCheckoutId(); // ID of an existing checkout
    const lineItemIdsToRemove = [variantId];
    // Remove an item from the checkout
    const newCart = await client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove);
    return newCart;
};

