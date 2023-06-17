class ListNode <T> {
    value: T
    next: ListNode<T> | null
    constructor(value: T) {
    this.value = value
    this.next = null
    }
}

class LinkedList <T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null

    constructor() {
        this.head = null
        this.tail = null
    }
    isEmpty(): boolean {
        return this.head === null
    }
    append(value: T): void {
     const newNode = new ListNode(value)
     if(this.isEmpty()) {
        this.head = newNode
        this.tail = newNode
     } else {
        this.tail!.next = newNode
        this.tail = newNode
     }
    }
    prepend(value: T): void {
      const newNode = new ListNode(value)
      if(this.isEmpty()) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head = newNode
      }
    }
    delete (value: T): void {
     if(this.isEmpty()) {
      return
     }
     if(this.head!.value === value) {
      this.head = this.head!.next
     }
     if(this.head === null) {
      this.tail = null
     } else {
      let current = this.head

      while(current!.next !== null) {
        if(current!.next.value === value) {
          current!.next = current!.next!.next
        
        if(current!.next === null) {
        this.tail = current
        }
        break;
      }
         current = current!.next
     }
    }
}
     toArray(): T[] {
      const result: T[] = []
      let current = this.head
      while(current !== null) {
        result.push(current.value)
        current = current.next
      }
      return result
     }
}

const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
console.log(list.toArray())
list.delete(2)
console.log(list.toArray())
