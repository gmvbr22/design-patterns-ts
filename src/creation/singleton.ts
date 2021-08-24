export class Store {
  public constructor(public name: string) {}

  public display() {
    console.log(this.name);
  }
}

export class Singleton {
  private static _storeA: Store;
  private static _storeB: Store;

  public static getStoreA(): Store {
    if (this._storeA === undefined) {
      this._storeA = new Store('Store A');
    }
    return this._storeA;
  }

  public static getStoreB(): Store {
    if (this._storeB === undefined) {
      this._storeB = new Store('Store B');
    }
    return this._storeB;
  }
}

// Usage:

Singleton.getStoreA().display();
Singleton.getStoreB().display();
