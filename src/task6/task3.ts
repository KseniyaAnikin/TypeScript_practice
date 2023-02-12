export class MyArray<T>  {
  elements: T[] = [];

  constructor(elements: T[] = [] ) {
    this.elements = elements;
  }

  public push(arg: T){
    if(this.elements !== null && this.elements !== undefined ){
      if(arg !== null && arg !== undefined )
      this.elements[this.elements.length] = arg
    }  
  }

  public concat(arg: MyArray<T>) {
    if(this.elements !== null && this.elements !== undefined ){
      if(arg.elements !== null && arg.elements !== undefined){
         this.elements = [...this.elements, ...arg.elements]
      }  
    }  
  } 

  public slice(indexstart?: number, indexend?: number): T[]{
    let test1: T [] = [];
    if(this.elements !== null && this.elements !== undefined ){ 
      if(indexstart === undefined && indexend === undefined ){
        for(let i= 0; i< this.elements.length; i++){
          let x =this.elements[i];
          if(x !== null && x !== undefined){
          test1.push(x)
          }
        }
      }
      if(indexstart !== undefined && indexend !== undefined ){
        for(let i= 0; i< indexend-indexstart; i++){
          let x =this.elements[i+indexstart];
          if(x !== null && x !== undefined){
          test1.push(x)
          }
        }
      }
      if(indexstart !== undefined && indexend !== undefined ){
        for(let i= 0; i< indexend-indexstart; i++){
          let x =this.elements[i+indexstart];
          if(x !== null && x !== undefined){
          test1.push(x)
          }
        }
      }
      if(indexstart !== undefined && indexend === undefined ){
        for(let i= 0; i< this.elements.length; i++){
          let x =this.elements[i+indexstart];
          if(x !== null && x !== undefined){
          test1.push(x)
          }
        }
      }
    }
    return test1;
  }  
  
  static areElementsEqual<T>(index1: MyArray<T>, index2: MyArray<T>): boolean {
    if(index1.elements !== undefined && index2.elements !== undefined ){
      if(JSON.stringify(index1.elements) !== JSON.stringify(index2.elements)) return false;
       for(let i = 0; i < index1.elements.length; i++){
        if(typeof index1.elements[i] === 'object' && typeof index2.elements[i] === 'object'){
          if(JSON.stringify(index1.elements[i]) !== JSON.stringify(index2.elements[i])) return false;
        } 
      }
    }
    return true;
  }

  static flatten<T>(arr: MyArray<T>):T [] {
    let output: T [] = [];
    for (let i = 0; i < arr.elements.length; i++) {
      if (typeof arr.elements[i]=="object") {
        output = output.concat(MyArray.flatten(arr.elements[i] as MyArray<T>));
      } else {
        let x = arr.elements[i];
        if(x !== undefined)
        output.push(x);
      }
    }
    return output;
  }
 
}

const arr = new MyArray<number>([1, 2, 3,4,5]) 
const arrcop = new MyArray<number>([1, 2, 3, 4,5,6,7]) 
const arr2 = new MyArray<number>([1, 6, 7, 8, 9, 10, 11])
const arr3 = new MyArray<number>()


MyArray.flatten(arr)
console.log(MyArray.areElementsEqual(arr, arr3))