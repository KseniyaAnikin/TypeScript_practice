export class Product {
    constructor(
        public name: string,
        public cost: number,
    ) {
    }

    public log() {
        console.log(`${this.name}; ${this.cost}`);
    }
}
