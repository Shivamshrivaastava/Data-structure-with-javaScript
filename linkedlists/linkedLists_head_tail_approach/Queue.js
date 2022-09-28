// making of queue data structure from linked list;
// Queue is a liner data structure that folloes the FIFO principle, meaning first-in-first-out;
// in queue the data which was inserted first is removed first from queue;

// to make queue we will use linkedList append method as it adds elment next to exisiting node;
// to remove the first insertednode from queue we will use remove first method of list  ;
// both append and remove are constact runtime complexity;
const LinkedList = require('./linkedlist')

class Queue{
    constructor() {
        this.list =new LinkedList();
    }
    enqueue(value) {
        this.list.append(value);
    }
    dequeue() { 
        this.list.removefromfront();
    }
    peek() {
       return this.list.head.value;
    }
    print() { 
        return this.list.print();

    }
    getSize() { 
        return this.list.getSize();
    }
    isEmpty() { 
        return this.list.isEmpty();
    }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log("first peek in queue: ", queue.peek());

queue.dequeue();
queue.print();
console.log(queue.getSize());