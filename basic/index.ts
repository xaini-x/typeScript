interface Checkin{
    readonly id: number;
    timestamp: number;
}
interface Checkin 
{
    name_ : string;
}
const usesrcheckin : Checkin = {
    id : 1,
    timestamp : 10,
    name_ : "Checkin"
}

interface Product {
    price: number;
    name: string;
    quantity: number;

}

const priceProduct = (product: Product):void => {
    console.log(product.price * product.quantity);
}

const exampleProduct1 :Product = {
    name: "ExampleProduct",
    price: 100,
    quantity: 10,
}

priceProduct(exampleProduct1);