function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var Sonny = new Person('Sonny','sonny@hotmail.com','483-485-4948');
var Jordan = new Person('Jordan','jordan@aol.com','495-586-3456');

Sonny.greet(Jordan);
Jordan.greet(Sonny);

Person.prototype.contactInfo = function(){
    console.log(this.email);
    console.log(this.phone);
};

Jordan.contactInfo();
Sonny.contactInfo();

//Card Stuff
function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}
var aceOfSpades = new Card(1,'spades');
aceOfSpades.point
aceOfSpades.suit

Card.prototype.getImageUrl = function() {
    return 'images/'+this.point+'_of_'+this.suit+'.png'
}