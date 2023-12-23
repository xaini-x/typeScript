enum OrderStatus {
    pending ,
    shipped,
    delivered ,
    returned

}

const myStatus =OrderStatus.delivered ;

console.log(myStatus);


function orderStatusis(status : OrderStatus){
    return status === OrderStatus.shipped
}

console.log(
orderStatusis(OrderStatus.shipped)
);

enum OrderStatus {
    up ="up",
    down ="down",
    left ="left",
    right ="right"

}

const currentStatus = OrderStatus.right;
console.log(currentStatus);
