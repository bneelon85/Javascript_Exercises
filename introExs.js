//Madlib
function hello (name, subject) {
    var output = name + "'s favorite subject in school is " + subject + ".";
    console.log(output);
}

hello('Jimmy', 'Science');

//tip calculator

function tipAmount (bill, quality) {
    if (quality.toLowerCase() == 'good') {
        console.log(bill*.2);
    } else if (quality.toLowerCase() == 'fair') {
        console.log(bill*.15);
    } else if (quality.toLowerCase() == 'bad') {
        console.log(bill*.1);
    }
    
   
}

tipAmount(100,'good');

//Tip calculator 2
function totalAmount (bill, quality) {
    if (quality.toLowerCase() == 'good') {
        console.log(bill*1.2);
    } else if (quality.toLowerCase() == 'fair') {
        console.log(bill*1.15);
    } else if (quality.toLowerCase() == 'bad') {
        console.log(bill*1.1);
    }
    
   
}

totalAmount(100,'good');

//Print Numbers

function printNumbers (start, end) {
    for (var count=start; count <= end; count++) {
        console.log(count);
    } 
}

function printNumbersWhile (start, end) {
    
    while (start <= end) {
        
        console.log(start);
        start += 1;
    }
    } 


printNumbers(2,12);
printNumbersWhile(3,15);

//Print a Square

function printSquare (length) {
    for (var i=1; i <= length; i++) {
        console.log("*".repeat(length));
    }
}

printSquare(5);

//print a box

function printBox (height, width) {
    for (var i=1; i <= height; i++) {
        if (i == 1 || i == height) {
            console.log("*".repeat(width));
        } else {
            console.log("*" + " ".repeat(width-2) + "*");
        }
    }
}

printBox(4,6);

//print Banner
function printBanner (words) {
    console.log("*".repeat(words.length + 4));
    console.log("* " + words + " *");
    console.log("*".repeat(words.length + 4));
}

printBanner('Go Team!!!');

//LeetSpeak

function leet (words) {
    var str = words;
    str = str.toLowerCase();
    str = str.replace(/a/gi,4);
    str = str.replace(/e/gi,3);
    str = str.replace(/g/gi,6);
    str = str.replace(/i/gi,1);
    str = str.replace(/o/gi,0);
    str = str.replace(/s/gi,5);
    str = str.replace(/t/gi,7);
    console.log(str);
    
}

leet('Leet');

//Long Long Vowels
function longVowel (words) {
    var str = words;
    str = str.replace(/ee/gi,'eeeee');
    str = str.replace(/oo/gi,'ooooo');
    console.log(str);
    
}

longVowel('Leet it goo');

//Stay Positive

function onlyPositive (nums) {
    var positive = [];
    nums.forEach(function(element) {
        
        if (element > 0) {
            positive.push(element);
        }
        
    });
    console.log(positive);
}

onlyPositive([1, -3, 5, -3, 0]);