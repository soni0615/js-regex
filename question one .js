function outerFunction(aParameter) {
  let str = "a string"
  function innerFunction() {
    console.log("Outer function parameter", aParameter);
    console.log("Outer variable", str);
  }
  return innerFunction()
}
outerFunction("Good Morning Folks")
