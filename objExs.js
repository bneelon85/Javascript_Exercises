//Phonebook
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

phonebookDict['Elizabeth'];
phonebookDict['Kareem']='938-489-1234';
delete phonebookDict['Alice'];
phonebookDict['Bob']='968-345-2345';
var personName = 'Elizabeth';
phonebookDict[personName];

for (var attribute in phonebookDict) {
  var value = phonebookDict[attribute];
  console.log(`${attribute}: ${value}`);
}

//Letter Histogram
var stuff = 'mississippi';
//var histogram = {};

function hist(stuff) {
  var histogram = {};
  for (var i = 0, len = stuff.length; i < len; i++) {
    var letter = stuff[i];
    histogram[letter] = (histogram[letter] || 0) + 1;
    //console.log(histogram);
}
console.log(histogram);
}

//Word Histogram
var sentence = 'How do you do';


function Counter(x) {
  var y = x.split(" ");
  var count = {};
  y.forEach(val => count[val] = (count[val] || 0) + 1);
  console.log(count);
}

Counter(sentence);