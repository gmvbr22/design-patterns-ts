export interface Engine {
  start(): void;
}

export interface Wheel {
  info(): void;
}

export interface Vehicle {
  createEngine(): Engine;
  createWheel(): Wheel;
}

///
/// Motorcycle
///
export class MotorcycleWheel implements Wheel {
  public info(): void {
    console.log('MotorcycleWheel');
  }
}

export class MotorcycleEngine implements Engine {
  public start(): void {
    console.log('Motorcycle Engine: Start');
  }
}

export class MotorcycleVehicle implements Vehicle {
  public createEngine(): Engine {
    return new MotorcycleEngine();
  }

  public createWheel(): Wheel {
    return new MotorcycleWheel();
  }
}

///
/// Car
///
export class CarWheel implements Wheel {
  public info(): void {
    console.log('CarWheel');
  }
}

export class CarEngine implements Engine {
  public start(): void {
    console.log('Car Engine: Start');
  }
}

export class CarVehicle implements Vehicle {
  public createEngine(): Engine {
    return new CarEngine();
  }

  public createWheel(): Wheel {
    return new CarWheel();
  }
}

///
/// usage:
///

export class Driver {
  public constructor(private vehicle: Vehicle) {
    this.vehicle.createEngine().start();
    this.vehicle.createWheel().info();
  }
}

new Driver(new CarVehicle());
new Driver(new MotorcycleVehicle());
