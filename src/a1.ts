class RandomArray {
arrayLength: number
array: Array<number>
searchIndex: number
constructor() {
    this.arrayLength = 0
    this.array = []
    this.searchIndex = 0
    }    
    handler() {
    this.arrayLength = Number(prompt("Введите длину массива"))
   // const ar: number[] = []
    let i = 0
    while(i <= this.arrayLength - 1) {
    const randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    this.array.push(randomNumber)
    i++
    } 
    console.log(this.array)
    let searchIndex = Number(prompt("Введите индекс для поиска числа"))
    if (this.array.length >= searchIndex) {
     console.log(this.array[searchIndex])
    } else {
        console.log("Числа с таким индексом не существует")
    }
    return this.array
 }
}

let random = new RandomArray()
random.handler()
 