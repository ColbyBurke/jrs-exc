const co$ = {
  addNums: () => [5, 6, 7, 8, 9, 10].reduce((x, y) => x + y),
  perim: () => 26,
  perimGiven: (w, h) => (w * 2) + (h * 2),
  fToC: f => (f - 32) * (5 / 9),
  cToF: c => (c * 1.8) + 32,
  billAndTip: (b, tp) => (b * (tp / 100)).toFixed(2),
  addNums2: num => [...num.toString()].reduce((x, y) => parseInt(x) + parseInt(y)),
  addNumsPrompt: () => {
    let p = prompt();
    return [...num.toString()].reduce((x, y) => parseInt(x) + parseInt(y))
  },
  dayMonthYear: () => `${new Date().getDate() + 1}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
  myDay: () => `${parseInt((Math.floor((new Date().getDate() + 34) / 31)) * 10)}/${new Date().getMonth() + 2}/${new Date().getFullYear()}`,
  mean: arr => arr.reduce((x, y) => x + y) / arr.length,
  rand: () => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months.filter(x => months.indexOf(x) === Math.floor(Math.random() * 11) + 1)
  },
  order: a => a.sort(),
  palindrome: s => s === [...s].reverse().join(''),
  isCoerced: (x, y) => x == y && x !== y,
  isEven: n => n % 2 === 0,
  isOdd: n => n % 2 !== 0,
  multipleof3: n => n % 3 === 0,
  multiple: (x, y) => x % y === 0,
  minimum: n => Math.min(...n),
  largestN: () => {
    let n = 0
    while (n * n < 12000) {
      n = n + 1
    } return n - 1
  },
  largestNArgGiven: x => {
    let n = 0
    while (n * n < x) {
      n = n + 1
    } return n - 1
  },
  rev: n => [...n].reverse().join(''),
  countOccurances: num => [1,2,2,3,4,5,5].filter(x => x === num).length,
  countOccurances2: arr => {
    let count = 0
    let newArr = []
    for (i = 0; i < arr.length; i++) {
      count = arr.filter(x => x === arr[i]).length
      newArr.push([arr[i], count])
    } return newArr.filter((x, y) => arr[y] !== arr[y+1])
  },
  nonDecreasing: a => {
    for(i=0 ; i < a.length; i++){
      if(a[i] > a[i+1]) return false
    } return true
  },
  increasingOrder: a => {
    let sorted = false
    while(!sorted){
      sorted = true
      for(i = 0; i < a.length; i++){
        if(a[i] > a[i+1]){
          sorted = false
          let tmp = a[i+1]
          a[i+1] = a[i]
          a[i] = tmp
        }
      }
    } return a
  },
  sortTwoArrays: (a, b) => {
    a = a.concat(b)
    let sorted = false
    while(!sorted){
      sorted = true
      for(i = 0; i < a.length; i++){
        if(a[i] > a[i+1]){
          sorted = false
          let tmp = a[i+1]
          a[i+1] = a[i]
          a[i] = tmp
        }
      }
    } return a
  },
  calculatePi: num => {
    let arr = new Array(num)
    let divider = 1
    let final = 0
    arr = arr.fill(1)
    for(i=0; i< num; i++){
      arr[i] = arr[i] / divider
      divider += 2
    } 
    for(i=0; i < arr.length; i++){
      if(i % 2 === 0) final += arr[i]
      else final -= arr[i]
    } return final * 4
  },
  myMap: (arr, action) => {
    for (i = 0; i < arr.length; i++) {
      arr[i] = action(arr[i])
    } return arr
  },
  myFilter: (arr, action) => {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
      if (action(arr[i])) newArr.push(arr[i])
    } return newArr
  },
  myForEach: (arr, action) => {
    for (i = 0; i < arr.length; i++) {
      arr[i] = action(arr[i])
    }
  }
}
console.log(co$.sortTwoArrays([1,2,3],[3,2,1]));
const alertObj = (func) => alert(func)