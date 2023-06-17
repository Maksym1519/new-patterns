//bubblesorting/пузырьковая сортировка
//O(n^2) (квадратичное время), пузырьковая сортировка
class BubbleSort {
  static bubbleSort(arr: Array<number>): number[] {
    const startBubbleSort = Date.now();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    const endBubbleSort = Date.now();
    console.log(
      "Bubble sorting for: ",
      (endBubbleSort - startBubbleSort) / 1000,
      "s"
    );
    return arr;
  }
}
const arrBubble: Array<number> = [5, 2, 4, 3, 1];
console.log(BubbleSort.bubbleSort(arrBubble));
//-------------------------------------------------------------------------------------------------------------
//Quick sorting/бысрая сортировка
//O(log n) (логарифмическое время), время растет логарифмически в завистимости от размера данных(бинарный поиск в отсортированном массиве)
class QuickSort {
  static quickSort(arr: Array<number>): number[] {
    const startQuickSort = Date.now();
    if (arr.length <= 1) {
      return arr;
    }
    if (arr.length === 2 && arr[0] > arr[1]) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    //определяем середину массива
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    //создаем два массива для сортировки элементов(less - для элем меньше чем центр эл)
    const less: Array<number> = [];
    const greater: Array<number> = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (arr[i] < pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    const endQuickSort = Date.now();
    const timeQuickSort = (endQuickSort - startQuickSort) / 1000;
    console.log("Quick sorting for:", timeQuickSort, "s");
    return [...this.quickSort(less), pivot, ...this.quickSort(greater)];
  }
}

const arrQuick: Array<number> = [5, 2, 4, 3, 1];
console.log(QuickSort.quickSort(arrQuick));
//---------------------------------------------------------------------------------
//selection sorting/сортировка выбором
class SelectionSort {
  static selectionSort(arr: Array<number>): number[] {
    const startSelectionSort = Date.now();
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    const endSelectonSort = Date.now();
    const selectionSortTime = (endSelectonSort - startSelectionSort) / 1000;
    console.log("Selection sorting for:", selectionSortTime, "s");
    return arr;
  }
}

const arrSelect: Array<number> = [5, 2, 4, 3, 1];
console.log(SelectionSort.selectionSort(arrSelect));
//------------------------------------------------------------------------------\
//insertion sorting/сортировка вставками
//O(n^2) (квадратичное время)
class InsertionSort {
  static insertionSort(arr: number[]): number[] {
    const startInsertion = Date.now();
    const length = arr.length;
    // Перебираем элементы со второго элемента
    for (let i = 1; i < length; i++) {
      const current = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;
    }
    const endInsertion = Date.now();
    const timeInsertion = (endInsertion - startInsertion) / 1000;
    console.log("Selection sorting for:", timeInsertion, "s");
    return arr;
  }
}
// Пример использования
const arrInsertion = [4, 2, 8, 3, 1];

console.log(InsertionSort.insertionSort(arrInsertion));
//------------------------------------------------------------------------------

//shell sorting/сортировка Шелла
//O(n^2) (квадратичное время)
class ShellSort {
  static shellSort(arr: number[]): number[] {
    const startShellSort = Date.now();
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
    const endShellSort = Date.now();
    const timeShellSort = (endShellSort - startShellSort) / 1000;
    console.log("Shell sorting for:", timeShellSort, "s");
    return arr;
  }
}

const arrShell: Array<number> = [5, 2, 4, 3, 1];
console.log(ShellSort.shellSort(arrShell));
//-------------------------------------------------------------------------
//merge sort/сортировка слиянием
//O(log n) (логарифмическое время)
class MergeSort {
  static mergeSort(arr: Array<number>): number[] {
    //возврат массива если один элемент
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, middle));
    const right = this.mergeSort(arr.slice(middle));

    return this.merge(left, right);
  }
  //объединение отсортированных частей
  static merge(left: Array<number>, right: Array<number>): number[] {
    let i = 0;
    let j = 0;
    const merged: Array<number> = [];
    //join left/right
    while (i < left[i] && j < right[j]) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
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

    return merged;
  }
}
const arrMerge: Array<number> = [5, 2, 4, 3, 1];
console.log(MergeSort.mergeSort(arrMerge));
