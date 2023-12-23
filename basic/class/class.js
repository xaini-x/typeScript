var Player = /** @class */ (function () {
    function Player(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var users1 = new Player("user", "1");
console.log(users1);
users1.score = 1;
console.log(users1);
