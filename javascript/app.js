// Rover Object Goes Here
// ======================
var marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [0, 0]
};


var map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, "X", 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, "X", 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, "X", 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, "X", 0, 0, 0, 0, "X", 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, "X", 0, 0, 0, 0]
];

function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "N";
  }
  console.log("turnLeft was called!");
}

function turnRight(rover) {
  if (rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "N";
  }
  console.log("turnRight was called!");
}

function moveForward(rover) {
  if (rover.direction === "N") {
    rover.y -= 1;
  } else if (rover.direction === "E") {
    rover.x += 1;
  } else if (rover.direction === "S") {
    rover.y += 1;
  } else if (rover.direction === "W") {
    rover.x -= 1;
  }

  rover.travelLog.push(rover.x, rover.y);
  console.log(rover.x, rover.y);
  console.log("moveForward was called");
}

function moveBackward(rover) {
  if (rover.x >= 10 && rover.y >= 10) {
    rover.x = 10;
    rover.y = 10;
  } else if (rover.direction === "N") {
    rover.y += 1;
  } else if (rover.direction === "E") {
    rover.x -= 1;
  } else if (rover.direction === "S") {
    rover.y -= 1;
  } else if (rover.direction === "W") {
    rover.x += 1;
  }
  rover.travelLog.push(rover.x, rover.y);
  console.log(rover.x, rover.y);
  console.log("moveBackward was called");
}

function commands(moves) {
  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === "f") {
      console.log("moving forward");
      moveForward(marsRover);
    } else if (moves[i] === "r") {
      console.log("moving right");
      turnRight(marsRover);
    } else if (moves[i] === "l") {
      console.log("moving left");
      turnLeft(marsRover);
    } else if (moves[i] === "b") {
      console.log("moving backwards");
      moveBackward(marsRover);
    }

    if (map[marsRover.y][marsRover.x] === "X") {
      console.log("obstacle was found");
    }
  }
}

commands("llflfff");
