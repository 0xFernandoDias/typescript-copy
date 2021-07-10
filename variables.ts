// implicit
let jordan = 23

jordan = "23" // error

// implicit
let jordan2: any = 23

jordan2 = "23" // correct

// * We don't need to type (let jordan2: number = 23)

//////////////////////////////

let jordan3 // = let jordan3 : any

jordan3 = 23
jordan3 = "23"

//////////////////////////////

import { FontFamily } from './type' // type FontFamily = "bold" | "italic"

let font: FontFamily = "italic"