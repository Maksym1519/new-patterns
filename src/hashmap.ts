 class HashMap <K, V> {
    private map: Record<string, V>
    constructor() {
        this.map = {}
    }
    put(key: K, value: V): void {
        const hash = this.generateHash(key)
        this.map[hash] = value
    }
    get(key: K): V | undefined {
        const hash = this.generateHash(key)
        return this.map[hash]
    }
    remove(key: K): void {
        const hash = this.generateHash(key)
        delete this.map[hash]
    }
    private generateHash(key: K) {
        return JSON.stringify(key)
    }
 }
 const map = new HashMap<string,number>()
 map.put("apple",10)
 map.put("orange",20)
 map.put("kiwi",30)
 console.log(map)