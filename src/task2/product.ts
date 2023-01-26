export class Product {
    _cost:number;
    _name: string;

    constructor(
         name: string,
         cost: number,
    ) 
    {
        this._cost = cost
        this._name = name
    }

    public log():string {
     return `${this._name}; ${this._cost}руб`;
    }

    get name():string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get cost():number {
        return this._cost;
    }

    set cost(value: number) {
        this._cost = value;
    }
}

//const chokolad:Product = new Product('chokoladka', 5)
// chokolad.cost = 100
// chokolad
// chokolad.name = 'dont chokoladka'
// chokolad
//console.log(chokolad.log())


