'use strict'

class Hamburger {
	static S_SIZE = {
		price: 50,
		callories: 20,
	};

	static M_SIZE = {
		price: 75,
		callories: 30,
	};

	static L_SIZE = {
		price: 100,
		callories: 40,
	};

	static CHEESE_TOPPING = {
		price: 10,
		callories: 20,
	};

	static SALAD_TOPPING = {
		price: 20,
		callories: 5,
	};

	static POTATO_TOPPING = {
		price: 15,
		callories: 10,
	};

	static SPICE_TOPPING = {
		price: 15,
		callories: 0,
	};

	static MAYONESE_TOPPING = {
		price: 20,
		callories: 5,
	};

	constructor(hamburgerSize, toppings) {
		this.hamburgerSize = hamburgerSize;
		this.toppings = [];

	}

	addTopping(toppings) {
		this.toppings.push(toppings);
	};

	getPrice() {
		let totalPrice = this.hamburgerSize.price;
		this.toppings.map(function(item) {
			totalPrice += item.price;
		});
		return totalPrice;
	};

	getCallories() {
		let totalCallories = this.hamburgerSize.callories;
		this.toppings.map(function(item) {
			totalCallories += item.callories;
		});
		return totalCallories;
	};
};

const hamburger = new Hamburger(Hamburger.L_SIZE);

hamburger.addTopping(Hamburger.MAYONESE_TOPPING);
hamburger.addTopping(Hamburger.CHEESE_TOPPING);
hamburger.addTopping(Hamburger.POTATO_TOPPING);

console.log(hamburger);

console.log(`Total price is: ${hamburger.getPrice()}`);
console.log(`Total callories is: ${hamburger.getCallories()}`);
