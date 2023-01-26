import {CanRun, CanSwim, CanFly} from './interfaces';

export abstract class Human implements CanRun, CanFly, CanSwim{
  run(): string {
    return'I can run';
  }
  fly(): string {
    return 'I can fly';
  }
  swim(): string {
    return 'I can sweem';
  }

  log():void {
    console.log(this, this.run(),this.fly(),this.swim())
   }
}