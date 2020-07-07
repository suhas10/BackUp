class Node {
    /**
     * @param {*} val 
     */
     constructor(val, next=null){
         this.data = val;
         this.next = next;
     }
 }

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {*} val 
     */
    insertToHead(val){
       this.head = new Node(val,this.head);
       this.size++;
    }

    /**
     * 
     * @param {*} val 
     */
    insertAtEnd(val){
        this.size++;
        let node = new Node(val)
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
    
    /**
     * Delete at the head
     */

    deleteAtBegining(){
        this.size--;
        let current = this.head;
        this.head = current.next;
    }

     /**
     * Delete at the end
     */

    deleteAtEnd(){
        this.size--;
        let tempNode ;
        let current = this.head;

        while(current.next !== null){
            tempNode = current;
            current = current.next;
        }

        tempNode.next = null;
    }

    /**
     * @return {linkedList.data}
     */
    getNodes(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
        
    }
}


let linkedList = new LinkedList();

linkedList.insertAtEnd(20);
linkedList.insertAtEnd(30);
linkedList.insertAtEnd(40);
linkedList.insertToHead(10);
linkedList.getNodes();

linkedList.deleteAtBegining();
linkedList.deleteAtEnd()

console.log("After deletion");
linkedList.getNodes();