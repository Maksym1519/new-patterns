function encrypt(text: string, shift: number, confirmataion: boolean): string {
  let result = ""
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  text = text.toUpperCase().replace(/\s/g, "")

  //если расшифровать, сдвигаем вправо
  if (!confirmataion) {
  shift = 26 - shift
  }
  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const index = alphabet.indexOf(char)
    if (index === -1) {
      result += char
      //если зашифровать
    } else {
      const newIndex = (index + shift) % 26
      result += alphabet[newIndex]
    }
  }
  return result
}

const text = String(prompt("Введите текст"))
const confirmataion = confirm("Шифровать: Ок, расшифровать: отмена")

if (text !== null) {
  const encryption = encrypt(text,3,confirmataion)
  console.log("Результат:", encryption)
} else {
  console.log("Ошибка ввода")
}