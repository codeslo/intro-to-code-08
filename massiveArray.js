// declare variables

var firstName;
var lastName;
var massiveArray = [];

function getRandom(min,max){
    var random =  Math.floor(Math.random() * (max - min)) + min;
    return random;
}

// function for first names
function getFirstName(num){
    var firstNames = ["Joe","Mary","Sue","Jose","Brad","John","Kate","Malik","Bianca","Jason"];
    return firstNames[num];
}
// function for last names
function getLastName(num){
    var lastNames = ["Brown","Garcia","Smith","Jackson","Lee","Chang","Jones","Young","Reed","Chavez"];
    return lastNames[num];
}

// constructor for name objects
function NameObject(first,last){
    this.firstName = first;
    this.lastName = last;
}

// nested loop to create multi-dimensional array 
for(var i = 0; i < 4; i++){
    massiveArray[i] = [];
    for(var j = 0; j < 250; j++){
        firstName = getFirstName(getRandom(0,9));
        lastName = getLastName(getRandom(0,9));
        massiveArray[i].push(new NameObject(firstName,lastName));
    }
}
