const compose = (...funcs) =>  (...args) => {
  let i = funcs.length - 1
  let acc = funcs[i](...args)
  i--

  while(i >= 0) {
    acc = funcs[i](acc)
    i--
  }

  return acc
}

const floorDiv = x => compose(Math.floor, y => x / y)
const mod = divisor => num => num % divisor
const add = x => y => x + y
const map = f => arr => arr.map(f)
const foldl = f => init => arr => arr.reduce(f, init)
const gte = x => y => y >= x

const getDigit = num => compose(
  mod(10),
  floorDiv(num),
  Math.pow.bind(null, 10)
)

const digitCount = num => num === 0 ? 1 : compose(
  add(1),
  Math.floor,
  Math.log10,
  Math.abs
)(num)

const maxDigits = foldl((m, x) => Math.max(m, digitCount(x)))(0)

function radixSort(arr) {
  let bucket;
  let mostDigits = maxDigits(arr)

  function initBucket() {
    bucket = Array.from({ length: 10}, () => [])
  }

  initBucket()

  for(let i = 0; i < mostDigits; i++) {
    for(let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j])(i)

      bucket[digit].push(arr[j])

    }
    arr = bucket.reduce((x, y) => x.concat(y))
    initBucket()
  }

  return arr
}
