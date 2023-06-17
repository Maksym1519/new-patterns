//создаем узел
class NodeM <T> {
    value: T
    next: NodeM<T> | null
    constructor(value: T) {
    this.value = value
    this.next = null 
    }
}
//создаем список элементов
class LinkedListm <T> {
    private head: NodeM<T> | null
    private tail: NodeM<T> | null

    constructor() {
        this.head = null
        this.tail = null
    }
    //добавляем элементы в список-----------------------------------------------------------------------
    add(value: T) {
      const newNodeM = new NodeM(value)
      if(this.head === null) {
        this.head = newNodeM
        this.tail = newNodeM
      } else {
        this.tail!.next = newNodeM
        this.tail = newNodeM
      }
   if(newNodeM.value === 999999) {
     console.log(newNodeM.value)
    } 
  }
  //получаем последний элемент------------------------------------------------
  last(): T | null {
    return this.tail !== null ? this.tail.value : null;
  }
//используем индексы для работы с разными частями списка------------------------------------------------------------------
  addAtIndex(index: number, value: T) {
  if (index === 0) {
    const newNodeM = new NodeM(value)
    newNodeM.next = this.head
    this.head = newNodeM
    if (this.tail === null) {
      this.tail = newNodeM
    }
  } else {
    let currentNodeM = this.head
    let currentIndexM = 0
    while (currentNodeM !== null && currentIndexM < index -1) {
      currentNodeM = currentNodeM.next
      currentIndexM++
    } 
    if (currentNodeM !== null) {
      const newNodeM = new NodeM(value)
      newNodeM.next = currentNodeM.next;
        currentNodeM.next = newNodeM;
        if (currentNodeM === this.tail) {
          this.tail = newNodeM;
        }
    }
  }
  }
  //добавление в начало списка-----------------------------------------------------
  addToStart(value: T): void {
    const newNodeM = new NodeM(value)
    if (this.head === null) {
    this.head = newNodeM
    this.tail = newNodeM
    } else {
      newNodeM.next = this.head
      this.head = newNodeM
    }
  }
  //получение элемента из середины списка-------------------------------------------------------------

  getAtIndex(index: number): T | null {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode !== null ? currentNode.value : null;
  }
  //получение элемента из начала списка
  getFromStart(): T | null {
    if (this.head !== null) {
      return this.head.value;
    }
    return null;
  }
//удаление последнего--------------------------------------------------------------
removeLast(): T | null {
  if (this.head === null) {
   return null
  }

  if (this.head === this.tail) {
    const value = this.head.value
    this.head = null
    this.tail = null
    return value
  }

  let currentNode: NodeM<T> | null = this.head
  while (currentNode?.next !== this.tail) {
    currentNode = currentNode?.next ?? null
  }

  if (currentNode !== null && this.tail !== null) {
    const value = this.tail.value
    currentNode.next = null
    this.tail = currentNode
    return value
  } else {
    return null
  }
}
//-----------------------------------------------------------------------
removeAtIndex(index: number): void {
  if (index < 0) {
    throw new Error('Индекс должен быть положительным числом');
  }

  if (this.head === null) {
    throw new Error('Список пустой');
  }

  if (index === 0) {
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    return;
  }

  let currentNode: NodeM<T> | null = this.head;
  let currentIndex = 0;
  let previousNode: NodeM<T> | null = null;

  while (currentNode !== null && currentIndex < index) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    currentIndex++;
  }

  if (currentNode === null) {
    throw new Error('Индекс выходит за пределы списка');
  }

  if (previousNode !== null) {
    previousNode.next = currentNode.next;
    if (previousNode.next === null) {
      this.tail = previousNode;
    }
  }
}
removeFromStart(): void {
  if (this.head !== null) {
    this.head = this.head.next
   } 
   if (this.head === null) {
    this.tail = null
   }
}
}

  //генерация чисел--------------------------------------------------------

const linkedListm = new LinkedListm()

function getRandomNumber(min: number, max: number) {
return Math.floor(Math.random() * (max - min) + min)
}

//создание списка
for(let i = 1; i <= 1000000; i++) {
 const randomNumber = getRandomNumber(1,1000000)
 linkedListm.add(randomNumber)
}

//замер времени на добавление, получение и удаление из конца списка
const startTimeAddLast = Date.now()
linkedListm.add(999999)
const endTimeAddLast = Date.now()
const addLastTimeExecution = (endTimeAddLast - startTimeAddLast) / 1000
console.log(`Время затраченное на добавление в конец списка составляет ${addLastTimeExecution}`)

const startTimeGetLast = Date.now();
const lastElement = linkedListm.last();
const endTimeGetLast = Date.now();
const getLastTime = (endTimeGetLast - startTimeGetLast) / 1000; 
console.log(`Время получения элемента из конца списка: ${getLastTime} с`);
console.log(`Последний элемент: ${lastElement}`);

const startTimeRemoveLast = Date.now()
linkedListm.removeLast()
const endTimeRemoveLast = Date.now()
const removeLastTimeExecution = (endTimeAddLast - startTimeAddLast) / 1000
console.log(`Время затраченное на удаление из конца списка составляет ${removeLastTimeExecution}`)


//замер времени на добавление, получение и удаление из середины списка
const startTimeAddMiddle = Date.now();
linkedListm.addAtIndex(500000,654321);
const endTimeAddMiddle = Date.now();
const addMiddleExecution = (endTimeAddMiddle - startTimeAddMiddle) / 1000;
console.log(`Время добавления элемента в середину списка: ${addMiddleExecution} с`);

const startTimeGetMiddle = Date.now();
const middleElement = linkedListm.getAtIndex(500000);
const endTimeGetMiddle = Date.now();
const getMiddleExecution = (endTimeGetMiddle - startTimeGetMiddle) / 1000;
console.log(`Время получения элемента из середины списка: ${getMiddleExecution} с`);
console.log(`Элемент из середины списка ${middleElement}`);

const startTimeRemoveIndex = Date.now()
linkedListm.removeAtIndex(500000)
const endTimeRemoveIndex = Date.now()
const removeIndexTimeExecution = (endTimeRemoveIndex - startTimeRemoveIndex) / 1000
console.log(`Время затраченное на удаление из середины списка составляет ${removeIndexTimeExecution} с`)

//замер времени на добавление, получение и удаление из начала списка
const startTimeAddFirst = Date.now()
linkedListm.addToStart(30)
const endTimeAddFirst = Date.now()
const addFirstTimeExecution = (endTimeAddLast - startTimeAddLast) / 1000
console.log(`Время затраченное на добавление в начало списка составляет ${addFirstTimeExecution}`)

const startTimeGetFirst = Date.now()
const firstElement = linkedListm.getFromStart()
const endTimeGetFirst = Date.now()
const getFirstTimeExecution = (endTimeGetFirst - startTimeGetFirst) / 1000
console.log(`Время затраченное на получение из начала списка составляет ${getFirstTimeExecution} c`)
console.log(`Первый элемент: ${firstElement}`)

const startTimeRemoveFirst = Date.now()
linkedListm.getFromStart()
const endTimeRemoveFirst = Date.now()
const removeFirstTimeExecution = (endTimeRemoveFirst - startTimeRemoveFirst) / 1000
console.log(`Время затраченное на удаление из начала списка составляет ${removeFirstTimeExecution} c`)




 
 

