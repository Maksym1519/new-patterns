//Array
//Object
//Set
//Map
//WeakMap, WeakSet
//--------------------------------------------------------------
//Linked List
//[value,next] -> [value,next] -> ....
/*let arrayM: Array<number> = [1,2,3]
arrayM.unshift(42)
console.log(arrayM)
let num: number = 42
const index = arrayM.indexOf(num)
if(index !== -1) {
    console.log(`Element ${num} fount at index ${index}`)
} else {
    console.log(`Element was not found`)
}
//---------------------------------------------------------------------------------
class Node {
    data: string
    tail: string | null
    constructor(data: string,tail: string | null) {
        this.data = data
        this.tail = tail
    }
}

class LinkedList {
    head: {data: any, next: any}
    tail: {data: any, next: any}
constructor() {
    this.head = this.head
    this.tail = this.tail
}
append(data: string) {
 const node = {data: data, next: null}
if(this.tail) {
    this.tail.next = node
}
if(!this.head) {
    this.head = node
}
 this.tail = node
}
prepend(data: string) {
const node = {data: data, next: this.head}
this.head = node
if(!this.tail) {
this.tail = node
}
}
find(data: string) {
if(!this.head) {
    return
}
let current = this.head
while(current) {
    if(current.data === data) {
        return current
    }
    current = current.next
}
}
toArray() {
    const output = []
    let current = this.head
    while(current) {
    output.push(current)
    current = current.next
    }
    return output
}
}
const list = new LinkedList()
list.prepend("Hi!")
list.append("My")
list.append("name")
list.append("is")
list.append("Maksym")
list.append("Korostelov")
console.log(list.find("name"))

const a = [1,2,3,4]
let v = 2
console.log(a.indexOf(v))
*/
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    isEmpty() {
        return this.head === null;
    }
    append(value) {
        const newNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    prepend(value) {
        const newNode = new ListNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    delete(value) {
        if (this.isEmpty()) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
        }
        if (this.head === null) {
            this.tail = null;
        }
        else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    if (current.next === null) {
                        this.tail = current;
                    }
                    break;
                }
                current = current.next;
            }
        }
    }
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.toArray());
list.delete(2);
console.log(list.toArray());
export {};
/*
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  append(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value: T): void {
    if (this.isEmpty()) {
      return;
    }

    if (this.head!.value === value) {
      this.head = this.head!.next;

      if (this.head === null) {
        this.tail = null;
      }
    } else {
      let current = this.head;

      while (current!.next !== null) {
        if (current!.next.value === value) {
          current!.next = current!.next!.next;

          if (current!.next === null) {
            this.tail = current;
          }

          break;
        }

        current = current!.next;
      }
    }
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}
*/
//# sourceMappingURL=structure.js.map