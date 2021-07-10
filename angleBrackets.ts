let message
message = 12

let endsWithC  = <string>message.endsWith("c") // :boolean
let alternativeWay = (message as string).endsWith("c")

console.log(endsWithC)
