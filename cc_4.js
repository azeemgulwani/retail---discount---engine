// Coding Challenge 4

const products = [
    {SKU : "SKU-001", name : "Wireless Mouse", category : "electronics", price: 29.99, inventory: 12},
    {SKU : "SKU-002", name : "Tee", category : "apparel", price: 18.50, inventory: 15},
    {SKU : "SKU-003", name : "Oats", category : "groceries", price: 5.99, inventory: 10},
    {SKU : "SKU-004", name : "Towela", category : "household", price: 12.99, inventory: 7},
    {SKU : "SKU-005", name : "Charger", category : "electronics", price: 23.99, inventory: 9},
];

// Step 3:

for (let product of products) {
    switch (product.category) {
        case "electronics":
            product.price *= 0.8;
            break;

        case "apparel":
            product.price *= 0.85;
            break;
        
        case "groceries": 
        case "household":
            product.price *= 0.90;
            break;
    
        default:
            product.price = 1;
            break;
    }
};

// Step 4:
let customerType = "";
let extraDiscount = 0;
if (customerType === "student") {
  extraDiscount = 0.05;
} else if (customerType === "senior") {
  extraDiscount = 0.07;
} else {
  extraDiscount = 0;
}

