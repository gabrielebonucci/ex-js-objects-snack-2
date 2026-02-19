const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // "Double Cheese Burger"
console.log(secondBurger.name ); // "Double Cheese Burger"
//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?  

//"Double Cheese Burger" "Double Cheese Burger"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 
//1 è stato creato un nuovo riferimento (una "etichetta") che punta allo stesso identico spazio in memoria

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

//"Salad" "Salad"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 2 oggetti, uno per hamburger e uno per secondBurger 


const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 3 (originale) + 3 (secondBurger) + 3 (thirdBurger) = 9 oggetti




const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

//Per l'oggetto chef il metodo migliore è lo spead operator; perché: structuredClone non può clonare le funzioni e darebbe errore. Lo spread operator invece copia il riferimento alla funzione, permettendoti di usarla nel clone.

//Per l'oggetto restaurant il metodo migliore è structuredClone.Se usassi lo spread operator, la proprietà openingDate sarebbe copiata per riferimento (modificare la data in un ristorante cambierebbe l'altro). structuredClone invece crea un nuovo oggetto Date totalmente indipendente