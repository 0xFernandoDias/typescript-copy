class Point {
    private x: number // public, private, protected
    public y: number

    constructor(x?: number, y?: number) {
        this.x = x,
        this.y = y
    }

    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`)
    }
}

let point = new Point(10)
point.draw() // output: (X: 10, Y: undefined)

//////////////////////////////

interface User {
    name: string
    id: number
  }
  
  class UserAccount {
    name: string
    id: number
  
    constructor(name: string, id: number) {
      this.name = name
      this.id = id
    }
  }
  
  const user: User = new UserAccount("Murphy", 1)