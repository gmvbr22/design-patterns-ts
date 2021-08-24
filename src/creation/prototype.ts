export interface Entity {
  clone(): Entity;

  toString(): string;
}

export class Person implements Entity {
  constructor(private name: string) {}

  public clone(): Person {
    return new Person(this.name);
  }

  public toString(): string {
    return `Person[name=${this.name}]`;
  }
}

export class Product implements Entity {
  constructor(private name: string) {}

  public clone(): Product {
    return new Product(this.name);
  }

  public toString(): string {
    return `Product[name=${this.name}]`;
  }
}

const productA = new Product('Table');
const productB = productA.clone();

const personA = new Person('Person 1');
const personB = personA.clone();

console.log(productA.toString());
console.log(productB.toString());

console.log(personA.toString());
console.log(personB.toString());
