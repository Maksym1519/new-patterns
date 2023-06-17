function encrypt(text, shift, confirmataion) {
    var result = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text = text.toUpperCase().replace(/\s/g, "");
    //если расшифровать, сдвигаем вправо
    if (!confirmataion) {
        shift = 26 - shift;
    }
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        var index = alphabet.indexOf(char);
        if (index === -1) {
            result += char;
            //если зашифровать
        }
        else {
            var newIndex = (index + shift) % 26;
            result += alphabet[newIndex];
        }
    }
    return result;
}
var text = String(prompt("Введите текст"));
var confirmataion = confirm("Шифровать: Ок, расшифровать: отмена");
if (text !== null) {
    var encryption = encrypt(text, 3, confirmataion);
    console.log("Результат:", encryption);
}
else {
    console.log("Ошибка ввода");
}
