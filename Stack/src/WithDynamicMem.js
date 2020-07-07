class Node{
    /**
     * 
     * @param {*} data 
     * @param {*} next 
     */
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    /**
     * 
     * @param {*} data 
     */
    push(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        } else{
            current = this.head;
            while(current.next){
                current = current.next;
            }    
                current.next = node;
        }
    }

    pop(){
        let tempNode;
        let current = this.head;
        while(!! current.next){
            tempNode = current;
            current = current.next;
        }
        tempNode.next = null;
    }

    display(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();

stack.display();
