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