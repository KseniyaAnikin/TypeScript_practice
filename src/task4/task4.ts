export class Job {
  private role: string;
  private _salary: number;

  constructor(role: string, salary: number) {
    this.role = role;
    this._salary = salary;
  }

  get salary():number{
    return this._salary
  }

  public work(personName: string):void {
    console.log(`${personName} сейчас работает как ${this.role}`)
  }
}

export class Person {
  private _job!: Job;
  private name: string;
  constructor(name: string){
    this.name = name;

  }

  public set job(value: Job){
    this._job = value
  }

  get getSalary():number {
    return this._job.salary
  } 

  work():void{
    console.log(this._job.work(this.name))
  }
}

const x: Person = new Person('Bob');
const y: Person = new Person('Ann');
const f: Person = new Person('John')
 
const job1: Job = new Job('director', 1000);
const job2: Job = new Job('worker', 900)

x.job = job1
y.job = job1
f.job = job2


x.job = job2
