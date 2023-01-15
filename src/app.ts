interface Name {
  readonly name: string;
}

interface Greetable extends Name {
  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  age = 20;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let aoi: Greetable;

aoi = new Person("aoi");
aoi.greet("hello");
console.log(aoi);
