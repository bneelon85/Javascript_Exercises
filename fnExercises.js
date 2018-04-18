//Even Numbers
var numArray = [1,2,3,4,5,6,7,8,9];

function evens (n) {
    return (n) % 2 ==0;
}

numArray.filter(evens);

//Square Numbers
var numbers = [1,2,3,4,5,6,7];

function squareTheNumbers(a) {
    return a*a;
}

numbers.map(squareTheNumbers);

//Cities

var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function cool (x){
    return x.temperature < 70;
}

cities.filter(cool);

//Good Job
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function goodJob (y) {
    var statement = ('Good Job, ' + y + '!');
    console.log(statement);
    return statement;
}

people.map(goodJob);

//Sort Array
people.sort();

//Sort Array 2
people.sort(function (a, b) { return b.length - a.length; });

//Call 3 Times
function hello () {
    console.log('Hello, world!');
}

function call3Times (fun) {
    fun();
    fun();
    fun();
}

//n times
function callNTimes (n, fun) {
    var i=0;
    while (i < n) {
      fun();
      i++
    }
}

//Sum Array
var nums = [2,5,3];

function sumUp (b) {
    return b.reduce(function (x,y) {
        return x +y;
    });
}

//Acronym
var words = ['Helluh', 'Nice', 'Ride'];

function acronym (c) {
    var d =[];
    c.forEach(function (item){
        d.push(item[0]);
        
    })
    //console.log(d);
    console.log(d.join('.')+'.');
}