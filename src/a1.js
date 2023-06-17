var RandomArray = /** @class */ (function () {
    function RandomArray() {
        this.arrayLength = 0;
        this.array = [];
        this.searchIndex = 0;
    }
    RandomArray.prototype.handler = function () {
        this.arrayLength = Number(prompt("Введите длину массива"));
        // const ar: number[] = []
        var i = 0;
        while (i <= this.arrayLength - 1) {
            var randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            this.array.push(randomNumber);
            i++;
        }
        console.log(this.array);
        var searchIndex = Number(prompt("Введите индекс для поиска числа"));
        if (this.array.length >= searchIndex) {
            console.log(this.array[searchIndex]);
        }
        else {
            console.log("Числа с таким индексом не существует");
        }
        return this.array;
    };
    return RandomArray;
}());
var random = new RandomArray();
random.handler();
