// Create a sorted linked list from an unsorted array

 let arr = [2, 1, 3, 4, 5, 12]
// sort the array first
// we can use sort() with numeric comparison functions
// and if array is alphabetical use default  sort();
// arr = arr.sort(function (a, b) { return a - b })/
// console.log(arr);


// now defining the LinkedList and node of LinkedList;

// first defining the node of linked list;
// so a node contatins value and a next pointer which initially points to null ;

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        // head record and size record of linked list
        this.head = null
        this.size = 0;
    }
    isEmpty() { return this.size === 0 }
    getSize() { return this.size; }

    // append method to add a node to list after head ;
    append(value) {
        const node = new Node(value);
        // node created here;
        // list is empty
        if (this.isEmpty()) {
            this.head = node;
            // if empty list head beecomes the new node inserted;
        } else {
            let prev = this.head;
            while (prev.next) {
                // checking to see if node encountered is poiting to null;
                // if null , than while loop breaks;
                prev = prev.next;
            }
            // insert the new node to the node previouly pointing to null;
            prev.next = node;
        }
        this.size++;
        // after adding element ,increase size of list;
        
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;

    }

    // insert a value in linked list at particular index
    insert(value, index) { 
        // check if index is less than 0 or more than the size of the linked list;
        const node =new Node(value)
        if (index < 0 || index > this.size) {
            let msg = "Index out of bounds"
            return msg;
        }
        if (index === 0) {
            this.append(value);
            
        } else {
            let prev = this.head;
            for (let i = 0; i < index-1; i++) { 
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
    }
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) { 
            // poiting the next to next node of current node ;
            let next = current.next;
            // reversing the pointer here
            current.next = prev;
            // updating prev to current and current to next node
            prev = current;
            current = next;
            // this ensures traversal and reversal in list at the same time;
        }

        // when we exit the loop, we have our prev to the current last node;
        // update the head to last node as the list has been reversed;
        this.head = prev;
    }

    // inserting element in the list in sorted order

    sortedInsert(value) {
        const node = new Node(value);
        // if list head is empty ,or the value of head is greater than value of new node;
        // we swap the postion with new node;
        if (this.head == null || this.head.value >= node.value) {
            node.next = this.head;
            this.head = node;
            // console.log(this.head);
        } else {
            let current = this.head;
            // traversing and seeing if the new node value is grater than the existing node values;
            while (current.next != null && current.next.value< node.value) {
                current = current.next;
            }
            // if new node value is less than any existing node value, loop exists here, and we swap the position of new node with that of current node.
            node.next = current.next;
            current.next= node;
        }
        this.size++
    }

    
    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        } else {
            let curr = this.head;
            let listValues = ``;
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log(list.isEmpty());

// now insertin the element of our sorted array into the list;

for (let i = 0; i < arr.length; i++) { 
//    list.sortedInsert(arr[i]);
    

}
list.sortedInsert(3);
list.sortedInsert(2);
list.sortedInsert(4);

list.print()
list.reverse()
// list.insert(7,3)
list.print()