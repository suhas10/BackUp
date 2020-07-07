class Node {

    /**
     * 
     * @param {*} data 
     * @param {*} next 
     */
    constructor(data, prev = null ,next = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    
    /**
     * 
     * @param {*} data 
     */
    insertAtTail(data){
        this.size++;
        let node = new Node(data,this.head,null)
        if(!this.head) {
            this.head = node;
            // node.prev = this.head;
            
        } else{
            let current = this.head;
            
            while(current.next !==null){
                current = current.next;
            }

            current.next = node;
            node.prev = current;

        }
    }

    getNodes(){
        let current = this.head;
        while( !!current ) {
            console.log(current.data)
            current = current.next;
        }
    }

    getNodesInReverse(){
        let current = this.head;
        while(!!current.next){
            current =current.next
        }
        
        while(!!current.prev){
            console.log(current.data);
            current = current.prev;
        }

    }
}


let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertAtTail(1);
doublyLinkedList.insertAtTail(2);
doublyLinkedList.insertAtTail(3);

console.log(doublyLinkedList);

/*console.log("Normal Order");
doublyLinkedList.getNodes();*/


console.log("Reverse Order");
doublyLinkedList.getNodesInReverse();

