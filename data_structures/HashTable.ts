type Pair = [string, any]

class HashTable {
  keyMap: (Pair[] | void)[]
  size: number

  constructor(size = 53) {
    this.keyMap = new Array(size)
    this.size = size
  }

  private _hash(key: string): number {
    let total = 0
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      total = total * 31 + char.charCodeAt(0)
    }
    return total % this.size
  }

  set(key: string, value: any) {
    const idx = this._hash(key)
    let chain = this.keyMap[idx]
    if (!chain) {
      this.keyMap[idx] = chain = []
    }
    let skip = false
    for (let i = 0; i < chain.length; i++) {
      if (chain[i][0] === key) {
        chain[i][1] = value
        skip = true
      }
    }
    if (!skip) chain.push([key, value])
  }

  get(key: string): any {
    const idx = this._hash(key)
    const chain = this.keyMap[idx]

    if (!chain) return

    for (let i = 0; i < chain.length; i++) {
      let pair: Pair = chain[i]
      if (pair[0] === key) return pair[1]
    }

    return
  }

  keys(): string[] {
    const result = []
    let chain: Pair[] | void
    for (let i = 0; i < this.size; i++) {
      chain = this.keyMap[i]
      if (!chain) continue
      for (let j = 0; j < chain.length; j++) {
        result.push(chain[j][0])
      }
    }
    return result
  }

  values(): any[] {
    const result = []
    let chain: void | Pair[]
    for (let i = 0; i < this.size; i++) {
      chain = this.keyMap[i]
      if (!chain) continue
      for (let j = 0; j < chain.length; j++) {
        result.push(chain[j][1])
      }
    }
    return result
  }
}

const map = new HashTable()
map.set('hello', 'world')
map.set('hola', { val: 'world' })
map.set('keyyy', [1, 2, 3])

console.log(map.get('hello'))
console.log(map.get('hola'))
console.log(map.get('keyyy'))
console.log(map.get('non-existent'))
console.log(map.keys())
console.log(map.values())
