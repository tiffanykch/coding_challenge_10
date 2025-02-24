// TASK 1: CREATING A PRODUCT CLASS - INVENTORY MANAGEMENT SYSTEM

// Create product class containing product details
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    // Add method to return product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    // Add method to update stock level when an order is placed
    updateStock(quantity) {
        this.stock -= quantity;
        return this.stock;
    }

}

// Test Case
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3);
console.log(prod1.getDetails()); 

// TASK 2: CREATING AN ORDER CLASS

// Create order class containing order details
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
    }

    // Add method to return order details
    getOrderDetails() {
        let totalPrice = this.quantity * this.product.price;
        let newStock = this.product.updateStock(this.quantity);

        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${newStock}, Total Price: $${totalPrice}`; 
    }
}

// Test Case
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());

// TASK 3: CREATING AN INVENTORY CLASS

// Create Inventory class containing product array
class Inventory {
    constructor(product) {
        this.products = []
        
        // TASK 4
        this.orders = []
    }

    // Add method to add new products to inventory
    addProduct(product) {
        this.products.push(product)
    }

    // Add method to log all product details
    listProducts() {
        this.products.forEach(product => {console.log(product.getDetails());
        });
    }

    // TASK 4: IMPLEMENTING ORDER MANAGEMENT
    // Add method to create a new order and add it to orders
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const newOrder = new Order(orderId, product, quantity);
            this.orders.push(newOrder);
        }
    }

    listOrders() {
        this.orders.forEach(order => {console.log(order.getOrderDetails());
        });
    }
}

// Test case Task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

// Test Case Task 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

