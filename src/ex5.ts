const array1: number[] = Array.from({length: 1000000},(_,index) => index)
//добавляем в конец массива
 const newNumber: number = 5
 const startTime = Date.now()
 array1.push(newNumber)
 const endTime = Date.now()
 const executionTime = (endTime - startTime) / 1000 
//удаляем
 const popStartTime = Date.now()
 const arrayPop = array1.pop()
 const popEndTime = Date.now()
 const popExecutionTime = (popEndTime - popStartTime) / 1000 
//получаем
 const startGetLastEl = Date.now()
 const getLastElement = array1[array1.length -1]
 const endGetLastEl = Date.now()
 const getLastElExecution = (endGetLastEl - startGetLastEl) / 1000

 console.log(`Время выполнения операции по добавлению элемента в конец списка: ${executionTime} секунд`)
 console.log(`Время выполнения операции по удалению элемента из конца списка: ${popExecutionTime} секунд`)
 console.log(`Время выполнения операции по получению последнего элемента: ${getLastElExecution} секунд`)
 console.log(array1[999999])
 console.log(arrayPop)
 console.log(getLastElement)
 

//работаем с началом списка--------------------------------------------------------------------------------------------------
const array2: number[] = Array.from({length: 1000000},(_,index) => index)
const newNum: number = 10
//удаляем из начала списка
const startShiftTime = Date.now()
const array2Shift = array2.shift()
const endShiftTime = Date.now()
const shiftExecutionTime = (endShiftTime - startShiftTime) / 1000
//добавляем
const unshiftStartTime = Date.now()
array2.unshift(newNum)
const unshiftEndTime = Date.now()
const unshiftExecutionTime = (unshiftEndTime - unshiftStartTime) / 1000
//получаем
const startGetFirstEl = Date.now()
const firstEl = array2[0]
const endGetFirstEl = Date.now()
const getFirstElExecution = (endGetFirstEl - startGetFirstEl) / 1000

console.log(`Время выполнения операции по удалению элемента из начала списка: ${shiftExecutionTime} секунд`)
console.log(`Время выполнения операции по добавлению элемента в начало списка: ${unshiftExecutionTime} секунд`)
console.log(`Время выполнения операции по получению элемента из начала списка: ${getFirstElExecution} секунд`)
console.log(array2Shift)
console.log(array2[0])
console.log(firstEl)

//работаем с серединой списка----------------------------------------------------------
const array3 = Array.from({length: 1000000},(_,index) => index)
//добавляем в середину спискка
const startPutElMiddle = Date.now()
const putElMiddle = array3.splice(500000,0,newNum)
const endPutElMiddle = Date.now()
const putElMiddleExecution = (endPutElMiddle - startPutElMiddle) / 1000
//получаем
const startGetElMiddle = Date.now()
const getElMiddle = array3[500000]
const endGetElMiddle = Date.now()
const getElMiddleExecution = (endGetElMiddle - startGetElMiddle) / 1000
//удаляем
const startRemoveMid = Date.now()
array3.splice(500005,1)
const endRemoveMid = Date.now()
const timeRemoveMid = (endRemoveMid - startRemoveMid) / 1000
console.log(`Время выполнения операции по добавлению элемента в середину списка: ${putElMiddleExecution} секунд`)
console.log(`Время выполнения операции по получению элемента из середины списка: ${getElMiddleExecution} секунд`)
console.log(`Время выполнения операции по удалению элемента из середины списка: ${timeRemoveMid} секунд`)
console.log("This element was added in the array mid",array3[500000])
console.log(getElMiddle)



  const arrayB = [1,2,3,4,5]
  console.log(arrayB.splice(2,0))
  console.log(arrayB)