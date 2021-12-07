function GroupTotals(strArr) {
  const totals = {}

  const parsedArr = strArr.map((elm) => elm.split(":"))

  for (let i = 0; i < parsedArr.length; i++) {
    const elm = parsedArr[i]

    const letter = elm[0]
    const number = parseInt(elm[1])

    if (totals[letter] === undefined) {
      totals[letter] = number
    } else {
      totals[letter] += number
    }
  }

  let result = ""

  Object.entries(totals)

  return Object.entries(totals)
    .filter((entry) => entry[1] !== 0)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((entry) => entry[0] + ":" + entry[1])
    .join(",")
}

// keep this function call here
console.log(GroupTotals(["X:-1", "Y:1", "X:-4", "B:3", "X:5"]))
console.log(GroupTotals(["Z:0", "A:-1"]))
