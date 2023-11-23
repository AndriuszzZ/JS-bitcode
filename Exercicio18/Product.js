class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.stock = 0
    }

    addToStock(quantity) {
        this.stock += quantity
    }
    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const watch = new Product("Relógio", "Relógio de pulso", 80)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDiscount(15)

console.log(watch)
console.log(priceWithDiscount)
console.log(watch.calculateDiscount(10))