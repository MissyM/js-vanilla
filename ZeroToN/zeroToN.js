const N =100
let i = 0

function zeroToN() {
  if(i < N) {
    console.log(i + ': sdfsdfsdf')
    i++
    zeroToN()
  }
}

zeroToN()