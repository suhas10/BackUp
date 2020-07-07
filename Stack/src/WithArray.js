class Stack{

    constructor(){
        this.stack = []
    }
    /**
     * 
     * @param {*} data 
     */
    push(data){
        this.stack.push(data);
        return this.stack;
    }
    pop(){
        return this.stack.pop();
    }

    display(){
        return this.stack;
    }
}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));

console.log(stack.pop());
console.log(stack.display());
