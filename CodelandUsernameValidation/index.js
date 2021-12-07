function CodelandUsernameValidation(str) {
  const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/
  const valid_length = str.length >= 4 && str.length <= 25
  return valid_length && valid_reg.test(str)
}

console.log(CodelandUsernameValidation("u__hello_world123"))
