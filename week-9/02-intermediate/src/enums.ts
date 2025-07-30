enum direction  {
    UP = 1,
    DOWN,
    LEFT,   
    RIGHT,
}

function getDirection(side: direction){

    console.log("Direction:", side);
    switch(side) {
        case 1:
            return "Moving Up";
        case 2:
            return "Moving Down";
        case 3:
            return "Moving Left";
        case 4:
            return "Moving Right";
        default:
            return "Unknown Direction";
    }
}

console.log(getDirection(direction.UP));    // Output: Moving Up
console.log(getDirection(direction.DOWN));  // Output: Moving Down

console.log(getDirection(3));  // Output: Moving Left

// common use case 

const responseStatus = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

