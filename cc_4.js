// Coding Challenge 4

const products = [
    {SKU : "SKU-001", name : "Wireless Mouse", category : "electronics", price: 29.99, inventory: 12},
    {SKU : "SKU-002", name : "Crew Neck Tee", category : "apparel", price: 18.50, inventory: 15},
    {SKU : "SKU-003", name : "Oats", category : "groceries", price: 5.99, inventory: 10},
    {SKU : "SKU-004", name : "Towel", category : "household", price: 12.99, inventory: 7},
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
            product.price *= 1;
            break;
    }
};



// Step 4:
let customerType = "regular";
let extraDiscount = 0;
if (customerType === "student") {
  extraDiscount = 0.05;
} else if (customerType === "senior") {
  extraDiscount = 0.07;
} else {
  extraDiscount = 0;
}

// Step 5:
let customers = [
  {name: "John Madison",customerType: "regular",purchases: ["Wireless Mouse", "Crew Neck Tee"]},
  {name: "Avery Scott",customerType: "student",purchases: ["Oats", "Charger", "Crew Neck Tee"]},
  {name: "Mina Patel",customerType: "senior",purchases: ["Towel", "Oats"]},
];


let customerNumber = 0;

for (const customer of customers) {
  customerNumber++;
  let subtotal = 0;

  // figure out discount
  if (customer.customerType === "student") {
    extraDiscount = 0.05;
  } else if (customer.customerType === "senior") {
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;
  }

  // go through this customer's purchases
  for (const purchase of customer.purchases) {
    for (const item of products) {
      if (item.name === purchase) {
        if (item.inventory > 0) {
          subtotal += item.price;
          item.inventory--;  
        }  else {
          console.log(`${item.name} is out of stock`);
        }
        break; 
      }
    }
  }

  let finalTotal = subtotal * (1 - extraDiscount);
  console.log(`Customer ${customerNumber} (${customer.name}): $${finalTotal.toFixed(2)}`);
}