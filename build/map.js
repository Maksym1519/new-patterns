//Map----------------------------------------------
const mapData = new Map();
mapData.set("BMW", "X5");
mapData.set("Opel", "Vectra");
mapData.set("Mercedes", "EQS");
const carModel = mapData.get("BMW");
console.log(carModel);
mapData.forEach((value, key) => {
    console.log(value, key);
});
//Object type-------------------------------------------
const studentBase = {};
studentBase[0] = "Maksym";
studentBase[1] = 'Marina';
studentBase[2] = 'Damir';
studentBase[3] = "Alex";
const student = studentBase["0"];
console.log(student);
for (const key in studentBase) {
    console.log(key, studentBase[key]);
}
export {};
//# sourceMappingURL=map.js.map