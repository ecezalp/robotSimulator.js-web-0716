'use strict';

const directions = ['east', 'south', 'west', 'north']

class Robot {

  static get directions() {
    return directions
  }

  orient (direction) {
    if (directions.includes(direction)) {
      this.bearing = direction
      return this.bearing
    }
    else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  turnRight() {
    if (this.bearing) {
      this.bearing = (directions[directions.indexOf(this.bearing) + 1] || "east")
      return this.bearing
    }
  }

  turnLeft() {
    if (this.bearing) {
      this.bearing = (directions[directions.indexOf(this.bearing) - 1] || "north")
      return this.bearing
    }
  }

  at (x, y) {
    this.coordinates = [x, y]
  }

  advance () {
    if (this.bearing === "north" ){
      this.at(this.coordinates[0], (this.coordinates[1] + 1))
    }

    else if (this.bearing === "south"){
      this.at(this.coordinates[0], (this.coordinates[1] - 1))
    }

    else if (this.bearing === "east" ){
      this.at((this.coordinates[0] + 1), this.coordinates[1])
    }
    else if (this.bearing === "west" ){
      this.at((this.coordinates[0] - 1), this.coordinates[1])
    }
  }

  instructions (string) { 
    var tempArray = []
    string.split("").forEach( (letter) => {
      if (letter === "A"){
        tempArray.push("advance")
      }
      else if (letter === "L"){
        tempArray.push("turnLeft")
      }
      else if (letter === "R"){
        tempArray.push("turnRight")
      }
    })
    return tempArray
  }

  place(obj) {
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction
  }

  evaluate(string){
    string.split("").forEach( (letter) => {
      if (letter === "A"){
        this.advance()
      }
      if (letter === "L"){
        this.turnLeft()
      }
      if (letter === "R"){
        this.turnRight()
      }
    })
  }
}

