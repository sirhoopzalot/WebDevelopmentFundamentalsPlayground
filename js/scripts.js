//JavaScript Review File 

console.log("Happy!");

var age = 39;
var myBirthdayYear = 1999;
var graduation = 2017;
var numberOfBrothersAndSisters = 3;
var numberOfKids = 0;
var winner = "onemill";

console.log("I am " + age);
console.log("I was born in " + myBirthdayYear);
console.log("I graduate in " + graduation);
console.log("I have " + numberOfKids + " kids");
console.log("I have " + numberOfBrothersAndSisters + " brothers and sisters")

if (graduation <=2016) {
	console.log("I graduated in " + graduation)
} else {
	console.log("I graduate in " + graduation)

}

//Manipulating the DOM
document.getElementById("my-age").innerHTML = age;
document.getElementById("graduation-year").innerHTML = graduation;




var counter = 0 
while(counter < 10) {
	counter++;
	console.log("The sccore is " + counter);
}


for (var i = 1 ; i < 11; i++) {
	if (i === 9) {
		console.log("nine")
	} else if(i === 10){
		console.log("ten")
	} else {
	console.log(i)
	}
}	


var friends = ["#", "#", "#", "#", "#", "#", "#", "#"];
var instructorList = "";

for (i = 0; i < friends.length; i++) {
	instructorList += friends [i];
	console.log(instructorList);
}


//Arrays 

var abc = "abcdefghijklmnopqrstuvwxyz";
var abcArray = [ "a", "b", "c", "d", "e"];
var numberArray = [1, 2, 3, 4, 5];

console.log(abc.charAt(3));
console.log(abcArray[2]);

//Another way to create array
var typesOfSoda = Array();
typesOfSoda[0] = "Sprite";
typesOfSoda[1] = "7up";
typesOfSoda[2] = "Sierra Mist";
typesOfSoda[3] = "Coke"; 
typesOfSoda[4] = "Pepsi";
typesOfSoda[5] = "Orange Faygo"

console.log("Types of Soda");
console.log(typesOfSoda);


var worstKindsOfSoda = new Array();
worstKindsOfSoda[0] = "Diet Coke";
worstKindsOfSoda[1] = "Diet Mountain Dew";
worstKindsOfSoda[2] = "Diet Pepsi";
worstKindsOfSoda[3] = "COke Zero";
worstKindsOfSoda[4] = "Matter of fact anything Diet";

console.log("Worst Kinds Of Soda");
console.log(worstKindsOfSoda);



for(var i = 0; i <= 21; i+=2) {
	console.log(i)
}


for (var i = 0; i<=51; i+=5) {
	if (i===50){
		console.log("I'm rich!!")

	} else {
		console.log(i);
	}
}


var friends = ["Joshua", "Austin", "Jermiah", "Nigel", "Darrian", "Jake", "James"];
for(var i = 0; i<friends.length;i++){
	if(friends[i].charAt(0)=="J"){
		console.log(friends[i])
	}
}


//Objects 
var beachBag={
	numBottles 		: 3,
	colorOfTowel	: "Green",
	isWet			: false
	
	
	}

console.log(beachBag);
console.log(beachBag.isWet);



//Make an object called Nerd
//Give five properties hasGlasses
//Give one function

var Nerd={
	hasGlasses			: true,
	numOfFloodedPants	: 9.5,
	game				: "Game Boy in the 21st century",
	grade 				: "Senior",
	hasGirlfriend		: false,

	wedgie				: function(){
		console.log("Fart Sound");
	}

}
console.log(Nerd);


var player = {
	//Properties
	name		: "Darrian ",
	life		: 0,
	heal		: 1000,
	hasBanana	: true,
	hasSniper	: false,
	hasArmor	: true,

	//Functions
	heal		: function(target){
		console.log(this.name + "heals" + target);
	}
}

var animal = {
    living		:true,
    eats		:true,
    runs		:true,
    jumps		:true,
    eyes			: 2,
    legs		:4,
    cute 		:true,

    breath		: function(){
    	console.log("Breathes echo in the distance after breath is taken")
    }

}

animal.breath();

var snake = Object.create(animal);

console.log(snake.eyes);
snake.legs = 0;
console.log(snake.legs);
snake.breath = function(){
	console.log("Hissssssssssssssssssssssssssss");
}
snake.breath();




var cow = Object.create(animal);

cow.spots = "Black";
cow.legs=4
console.log(cow.legs)
cow.breath=function(){
	console.log("Moooooooooooooooooooooooooo");
} 
console.log(cow.spots);


