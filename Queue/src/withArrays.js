/**
 * Code to Implement Queue using Array; 
 */

class Queue{
    constructor(){
        this.queue = []
    }

    /**
     * 
     * @param {*} data 
     */
    enqueue(data){
        this.queue.unshift(data);
    }

    dequeue(){
        this.queue.shift();
    }

    display(){
        for(var element of this.queue){
            console.log(element);
        }
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.display();

console.log("After deletion");
queue.dequeue();

queue.display();

