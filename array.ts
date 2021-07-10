const arr: number[] = []

arr.push("A") // error

//////////////////////////////

type MyList = [number?, string?, boolean?] // I put "?" because Ill start an empty array

const arr2: MyList = []

arr2.push(2, "2", false)