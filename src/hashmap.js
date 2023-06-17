"use strict";
class HashMap {
    constructor() {
        this.map = {};
    }
    put(key, value) {
        const hash = this.generateHash(key);
        this.map[hash] = value;
    }
    get(key) {
        const hash = this.generateHash(key);
        return this.map[hash];
    }
    remove(key) {
        const hash = this.generateHash(key);
        delete this.map[hash];
    }
    generateHash(key) {
        return JSON.stringify(key);
    }
}
const map = new HashMap();
map.put("apple", 10);
map.put("orange", 20);
map.put("kiwi", 30);
console.log(map);
