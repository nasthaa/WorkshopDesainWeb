// console.log("connected")


// retrieve element ID
// const user_place = document.getElementById('user');

const cart_items = document.getElementById('cart');

// ES5
// var myName = "Khoironi"

// myName = "Alex"

// var myName = "Khoironi";

// myName = "Alex";

// console.log(myName)

// const myCar = ['BMW', 'Mazda', 'Toyota'];
// for (let i = 0; i < myCar.length; i++) {
//     console.log(myCar[i]);
// }

// console.log(i)

// var myCar = ['BMW', 'Mazda', 'Toyota'];
// for (var i = 0; i < myCar.length; i++) {
//     console.log(myCar[i]);
// }

// console.log(i)

// const user_logged = "Khoironi";

// console.log(user_logged);

// const user_logged = "Khoironi";
// user_place.innerHTML = "Hi, " + user_logged + " apa kabar?";
// console.log(user_logged);

// const user_logged = "Khoironi";
// user_place.innerHTML = `Hi, ${user_logged} apa kabar?`;

// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 11", "gadget");
// console.log(getProduct);

// ES6
// const myCar = "Miata"

// myCar = "bmw"
// console.log(myCar)

// function addProduct(name, category) {
//     return {
//         name,
//         category
//     }
// }

// var getProduct = addProduct("iPhone 11", "gadget");
// cart_items.innerHTML = `Nama produk: ${getProduct.name}, Category: ${getProduct.category}`;

const your_cart = ['Roti', 'Keju', 'Mentega'];

let parent = '<ul>';
your_cart.forEach((cart) => {
    parent += '<li>' + cart + '</li>';
    console.log(`${cart}`);
});

parent += '</ul>';
cart_items.innerHTML = parent;