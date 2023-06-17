//bubblesorting/пузырьковая сортировка
class Sorting {
  static bubbleSort(arr: Array<number>): number[] {
    const startBubbleSort = Date.now()
     for(let i = 0; i < arr.length -1; i++) {
        for(let j = 0; j < arr.length -1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
     }
     const endBubbleSort = Date.now()
     console.log("Bubble sorting for: ",(endBubbleSort - startBubbleSort) / 1000, "s" )
     return arr
    }
    //selection sorting/сортировка выбором---------------------------------------------------------------------------
    static selectionSort(arr: Array<number>): number[] {
        const startSelectionSort = Date.now()
        for(let i = 0; i < arr.length - 1; i++) {
         let minIndex = i
         for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
           minIndex = j   
          }
         }
         if (minIndex !== i) {
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
         }
        }
        const endSelectonSort = Date.now()
        const selectionSortTime = (endSelectonSort - startSelectionSort) / 1000
         console.log("Selection sorting for:", selectionSortTime, "s")
        return arr
    }
    //quickSorting/быстрая сортировка
    static quickSort(arr: Array<number>): number[] {
        const startQuickSort = Date.now()
        if (arr.length <= 1) {
            return arr
        }
        if (arr.length === 2 && arr[0] > arr[1]) {
           [arr[0], arr[1]] = [arr[1], arr[0]];
          }
      //определяем середину массива
        const pivotIndex = Math.floor(arr.length / 2)
        const pivot = arr[pivotIndex]
      //создаем два массива для сортировки элементов(less - для элем меньше чем центр эл)  
        const less: Array<number> = []
        const greater: Array<number> = []

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) {
                continue
            }
            if (arr[i] < pivot) {
                less.push(arr[i])
            } else {
                greater.push(arr[i])
            }
        }

        const endQuickSort = Date.now()
        const timeQuickSort = (endQuickSort - startQuickSort) / 1000
        console.log("Quick sorting for:", timeQuickSort, "s")
        return [...this.quickSort(less),pivot, ...this.quickSort(greater)]
     }
     //insertion sorting/сортировка вставками
     static insertionSort(arr: number[]): number[] {
        const startInsertionSort = Date.now()
        const sortedArr: number[] = [];
        
        for (let i = 0; i < arr.length; i++) {
          const currentValue = arr[i];
         let j = sortedArr.length - 1;
          
          while (j >= 0 && sortedArr[j] > currentValue) {
            sortedArr[j + 1] = sortedArr[j];
            j--;
          }
          
          sortedArr[j + 1] = currentValue;
        }
        const endInsertionSort = Date.now()
        const timeInsertionSort = (endInsertionSort - startInsertionSort) / 1000
        console.log("Insertion sorting for:", timeInsertionSort, "s")
        return sortedArr;
      }

      //shell sorting/сортировка Шелла--------------------------------------------
      static shellSort(arr: number[]): number[] {
        const startShellSort = Date.now()
        const n = arr.length;
        let gap = Math.floor(n / 2);
      
        while (gap > 0) {
          for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;
      
            while (j >= gap && arr[j - gap] > temp) {
              arr[j] = arr[j - gap];
              j -= gap;
            }
      
            arr[j] = temp;
          }
      
          gap = Math.floor(gap / 2);
        }
        const endShellSort = Date.now()
        const timeShellSort = (endShellSort - startShellSort) / 1000
        console.log("Shell sorting for:", timeShellSort, "s")
        return arr;
      }
      //merge sort/сортировка слиянием--------------------------------------------------
      //рекурсивный вызов и сортировка
      static mergeSort(arr: Array<number>): number[] {
        //возврат массива если один элемент
        if (arr.length <= 1) {
        return arr;
          }
        const middle = Math.floor(arr.length / 2)
        const left = this.mergeSort(arr.slice(0,middle))
        const right = this.mergeSort(arr.slice(middle))

        return this.merge(left,right)
       }
       //объединение отсортированных частей
      static merge(left: Array<number>, right: Array<number>): number[] {
        let i = 0
        let j = 0
        const merged: Array<number> = []
        //join left/right
        while(i < left[i] && j < right[j]) {
          if(left[i] < right[j]) {
          merged.push(left[i])
          i++
         } else {
          merged.push(right[j])
          j++
         }
        }
        while (i < left.length) {
          merged.push(left[i]);
          i++;
        }
      
        while (j < right.length) {
          merged.push(right[j]);
          j++;
        }
      
        return merged
       }
       
    }
   
const arr: Array<number> = [5,2,4,3,1]
console.log(Sorting.bubbleSort(arr))
console.log(Sorting.selectionSort(arr))
console.log(Sorting.quickSort(arr))
console.log(Sorting.insertionSort(arr))
console.log(Sorting.shellSort(arr))
const startMergeTime = Date.now()
Sorting.mergeSort(arr)
const endMergeTime = Date.now()
const timeMerging = (endMergeTime - startMergeTime) / 1000
console.log("Merge sorting for",timeMerging, "s")
console.log(Sorting.mergeSort(arr))




 
