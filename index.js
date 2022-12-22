/*

💪 Exercise: Let vs const

🎯 Your task:
Use your best judgement to replace the three instances of "var" with either "let" or "const".

*/

function addTwoNumbers(num1, num2) {
  var sum = num1 + num2
  return sum
}

var sayHello = () => {
  console.log('Hello!')
}

function calculateOrderTotal(itemPrice, quantity, isDiscounted) {
  var total = itemPrice * quantity

  if (isDiscounted) {
    total *= 0.8
  }

  return total
}
