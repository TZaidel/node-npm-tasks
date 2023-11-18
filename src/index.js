//*1
// import add, { greet as hello, foo } from "../src/helpers/helpers"
//*2
// import add from "../src/helpers/helpers"
// import { greet, foo } from "../src/helpers/helpers"

// console.log(add(5, 5))
// hello()
// foo()

//*3
import * as all from "../src/helpers/helpers"

console.log(all.add(5, 5))
all.foo()
all.greet()