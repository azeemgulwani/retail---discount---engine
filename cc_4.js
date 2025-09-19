// Coding Challenge 4b

const products = [
    {SKU : "SKU-001", name : "Wireless Mouse", category : "electronics", price: 29.99, inventory: 12},
    {SKU : "SKU-002", name : "Tee", category : "apparel", price: 18.50, inventory: 15},
    {SKU : "SKU-003", name : "Oats", category : "groceries", price: 5.99, inventory: 10},
    {SKU : "SKU-004", name : "Towela", category : "household", price: 12.99, inventory: 7},
    {SKU : "SKU-005", name : "Charger", category : "electronics", price: 23.99, inventory: 9},
];

// Step 3:
for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.2;
            break;

        case "apparel":
            discount = 0.15;
            break;
        
        case "groceries": 
        case "household":
            discount = 0.1;
            break;
    
        default:
            discount = 0;
            break;
    }
    // Promo Price 
    let promoPrice = (product.price * (1-discount)).toFixed(2);
    product.promoPrice = promoPrice;
};

// Step 4:
let customerType = "student"
let additionalDiscount = 0
if (customerType === "student"){
    additionalDiscount = 0.05;
} if(customerType === "senior") {
    additionalDiscount = 0.07;
} else {
    additionalDiscount = 0;
}
