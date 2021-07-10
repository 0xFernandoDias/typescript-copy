interface Person {
    first: string,
    last: string,
    [key: string]: any
}

const person: Person = {
    first: "Fernando",
    last: "Dias"
}

const person2: Person = {
    first: "John",
    last: "Cena",
    strong: true
}

//////////////////////////////

let addiction = (numbers: {x: number, y: number}) => {
    numbers.x + numbers.y
}

addiction({
    x: 2,
    y: 3
})


interface AddictionObj {
    x: number,
    y: number
}

let addiction2 = (numbers: AddictionObj) => {
    numbers.x + numbers.y
}



