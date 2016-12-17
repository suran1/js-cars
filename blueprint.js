/*  Ex -1 .We live in a future where we have the ability to build our own cars using JavaScript (hey - it could happen).
Your task is to create a blueprint for a car, and then produce two cars from that blueprint. Your task:

Create a folder named js-cars from the command line
Initialize the js-cars folder as a git repository
Create a file named blueprint.js from the command line
In this file, create a car blueprint. Your car should have:
Between 0 - 6 wheels
A top speed
A color
A function to report how long this car would take to travel 1/4 mile at top speed
Within this same file, create two different versions of cars based on this blueprint
Within the same file, write a function that tests that each of your built cars works as intended
This function should return true if everything is as expected, and false if not
Commit and push all changes to a new GitHub repository from the command line*/


var Car = {

   wheels: 'Default',
   speed: 'Default',
   color: 'Default',
   getTrave : function (){
        return (this.speed / 25);

   }
}

var BMW =   Object.create(Car);
BMW.wheels= '6';
BMW.speed= 120;
BMW.color = 'white';

//console.log(BMW.getTravel());

var Mercedes =  Object.create(Car);
Mercedes.wheels = '4';
Mercedes.speed = 130;
Mercedes.color ='Red';
Mercedes.model='2016';

//console.log(Mercedes.getTravel());

console.log(BMW.hasOwnProperty('wheels'));
console.log(Mercedes.hasOwnProperty('wheels'));
console.log(BMW.hasOwnProperty('color'));
console.log(Mercedes.hasOwnProperty('color'));
console.log(BMW.hasOwnProperty('speed'));
console.log(Mercedes.hasOwnProperty('speed'));
console.log(BMW.hasOwnProperty('model'));
