class Player {
  public readonly first: string;
 public readonly last: string;
 public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretmethod()
  }
  private secretmethod():void{
    console.log("secret method");
    
  }
}

const users1 = new Player("user", "1");
users1.score = 1;
console.log(users1);
// users1.secretmethod()


