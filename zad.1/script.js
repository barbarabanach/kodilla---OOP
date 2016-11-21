
var iphone = new Phone("iphone", 1000, "black")
var samsung = new Phone("samsung", 800, "white")
var siemens = new Phone("siemens", 600, "green")

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.logModel = function() {
    console.log("Telefon o wartosci " + this.price + "pln " + "i kolorze " + this.color + " to " + this.brand);
    };
};

iphone.logModel();
samsung.logModel();
siemens.logModel();

