let countBs = (str) => {
  const letter = "B"
  let acc = 0
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      acc++
    }
  }
  return acc
}
let countChar = (str, letter) => {
  let acc = 0
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      acc++
    }
  }
  return acc
}
console.log(countBs("BBC"))
// → 2
console.log(countChar("kakkerlak", "k"))
// → 4

let countChar = (str, letter) => {
  let acc = 0
  for (i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      acc++
    }
  }
  return acc
}
//debe imprimir aaddccc 2a2d3c

function product(input) {
  if (toString.call(input) !== "[object Array]") return false

  var total = 1

  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue
    }
    total *= Number(input[i])
  }
  return total
}
console.log(product([1, 2, 3]))
console.log(product([100, -200, 3]))
console.log(product([1, 2, "a", 3]))

///////

console.clear()
const print = console.log

function isTwin(a, b) {
  if (a.length !== b.length) {
    return false
  }

  const sorteda = a.toUpperCase().split("").sort().join("")
  const sortedb = b.toUpperCase().split("").sort().join("")

  return sorteda === sortedb
}

print(isTwin("Hello", "world")) // false
print(isTwin("acb", "bca")) // true
print(isTwin("Lookout", "Outlook")) // true
print(isTwin("a", "a")) // true
print(isTwin("peon", "peon")) // true
