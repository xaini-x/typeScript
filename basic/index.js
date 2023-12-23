var usesrcheckin = {
    id: 1,
    timestamp: 10,
    name_: "Checkin"
};
var priceProduct = function (product) {
    console.log(product.price * product.quantity);
};
var exampleProduct1 = {
    name: "ExampleProduct",
    price: 100,
    quantity: 10,
};
priceProduct(exampleProduct1);
