// Node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Linked List class
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    // Add node at end
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;
      }
      this.length++;
    }
  
    // Add node at beginning
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  
    // Delete a node by value
    delete(value) {
      if (!this.head) return;
  
      if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
        return;
      }
  
      let curr = this.head;
      while (curr.next && curr.next.value !== value) {
        curr = curr.next;
      }
  
      if (curr.next) {
        curr.next = curr.next.next;
        this.length--;
      }
    }
  
    // Print the list
    print() {
      let curr = this.head;
      let result = '';
      while (curr) {
        result += curr.value + ' -> ';
        curr = curr.next;
      }
      result += 'null';
      console.log(result);
    }
  }
  


  const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print(); 

list.delete(20);
list.print(); 
