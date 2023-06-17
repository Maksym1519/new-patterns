var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//bubblesorting/пузырьковая сортировка
//O(n^2) (квадратичное время), пузырьковая сортировка
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (arr) {
        var _a;
        var startBubbleSort = Date.now();
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                }
            }
        }
        var endBubbleSort = Date.now();
        console.log("Bubble sorting for: ", (endBubbleSort - startBubbleSort) / 1000, "s");
        return arr;
    };
    return BubbleSort;
}());
var arrBubble = [5, 2, 4, 3, 1];
console.log(BubbleSort.bubbleSort(arrBubble));
//-------------------------------------------------------------------------------------------------------------
//Quick sorting/бысрая сортировка
//O(log n) (логарифмическое время), время растет логарифмически в завистимости от размера данных(бинарный поиск в отсортированном массиве)
var QuickSort = /** @class */ (function () {
    function QuickSort() {
    }
    QuickSort.quickSort = function (arr) {
        var _a;
        var startQuickSort = Date.now();
        if (arr.length <= 1) {
            return arr;
        }
        if (arr.length === 2 && arr[0] > arr[1]) {
            _a = [arr[1], arr[0]], arr[0] = _a[0], arr[1] = _a[1];
        }
        //определяем середину массива
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr[pivotIndex];
        //создаем два массива для сортировки элементов(less - для элем меньше чем центр эл)  
        var less = [];
        var greater = [];
        for (var i = 0; i < arr.length; i++) {
            if (i === pivotIndex) {
                continue;
            }
            if (arr[i] < pivot) {
                less.push(arr[i]);
            }
            else {
                greater.push(arr[i]);
            }
        }
        var endQuickSort = Date.now();
        var timeQuickSort = (endQuickSort - startQuickSort) / 1000;
        console.log("Quick sorting for:", timeQuickSort, "s");
        return __spreadArray(__spreadArray(__spreadArray([], this.quickSort(less), true), [pivot], false), this.quickSort(greater), true);
    };
    return QuickSort;
}());
var arrQuick = [5, 2, 4, 3, 1];
console.log(QuickSort.quickSort(arrQuick));
//---------------------------------------------------------------------------------
//selection sorting/сортировка выбором
var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
    }
    SelectionSort.selectionSort = function (arr) {
        var _a;
        var startSelectionSort = Date.now();
        for (var i = 0; i < arr.length - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
            }
        }
        var endSelectonSort = Date.now();
        var selectionSortTime = (endSelectonSort - startSelectionSort) / 1000;
        console.log("Selection sorting for:", selectionSortTime, "s");
        return arr;
    };
    return SelectionSort;
}());
var arrSelect = [5, 2, 4, 3, 1];
console.log(SelectionSort.selectionSort(arrSelect));
//------------------------------------------------------------------------------\
//insertion sorting/сортировка вставками
//O(n^2) (квадратичное время)
var InsertionSort = /** @class */ (function () {
    function InsertionSort() {
    }
    InsertionSort.insertionSort = function (arr) {
        var startInsertionSort = Date.now();
        var sortedArr = [];
        for (var i = 0; i < arr.length; i++) {
            var currentValue = arr[i];
            var j = sortedArr.length - 1;
            while (j >= 0 && sortedArr[j] > currentValue) {
                sortedArr[j + 1] = sortedArr[j];
                j--;
            }
            sortedArr[j + 1] = currentValue;
        }
        var endInsertionSort = Date.now();
        var timeInsertionSort = (endInsertionSort - startInsertionSort) / 1000;
        console.log("Insertion sorting for:", timeInsertionSort, "s");
        return sortedArr;
    };
    return InsertionSort;
}());
var arrInserton = [5, 2, 4, 3, 1];
console.log(InsertionSort.insertionSort(arrInserton));
//------------------------------------------------------------------------------
//shell sorting/сортировка Шелла
//O(n^2) (квадратичное время)
var ShellSort = /** @class */ (function () {
    function ShellSort() {
    }
    ShellSort.shellSort = function (arr) {
        var startShellSort = Date.now();
        var n = arr.length;
        var gap = Math.floor(n / 2);
        while (gap > 0) {
            for (var i = gap; i < n; i++) {
                var temp = arr[i];
                var j = i;
                while (j >= gap && arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        var endShellSort = Date.now();
        var timeShellSort = (endShellSort - startShellSort) / 1000;
        console.log("Shell sorting for:", timeShellSort, "s");
        return arr;
    };
    return ShellSort;
}());
var arrShell = [5, 2, 4, 3, 1];
console.log(ShellSort.shellSort(arrShell));
//-------------------------------------------------------------------------
//merge sort/сортировка слиянием
//O(log n) (логарифмическое время)
var MergeSort = /** @class */ (function () {
    function MergeSort() {
    }
    MergeSort.mergeSort = function (arr) {
        //возврат массива если один элемент
        if (arr.length <= 1) {
            return arr;
        }
        var middle = Math.floor(arr.length / 2);
        var left = this.mergeSort(arr.slice(0, middle));
        var right = this.mergeSort(arr.slice(middle));
        return this.merge(left, right);
    };
    //объединение отсортированных частей
    MergeSort.merge = function (left, right) {
        var i = 0;
        var j = 0;
        var merged = [];
        //join left/right
        while (i < left[i] && j < right[j]) {
            if (left[i] < right[j]) {
                merged.push(left[i]);
                i++;
            }
            else {
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
    };
    return MergeSort;
}());
var arrMerge = [5, 2, 4, 3, 1];
console.log(MergeSort.mergeSort(arrMerge));
