//Task one

var age = parseInt(prompt('What is your age?'))

if (age >= 18) {
    alert('You are welcome!')
} else if (age <= 12) {
    alert('Go to www.site.com')
} else alert('Please, leave!');

//Task two
var age = parseInt(prompt('1. Your age:'))
var experience = parseInt(prompt('2. Your experience:'))

if (age >= 30 || experience >= 3) {
    alert('Congrats! You are accepted!')
} else {

    alert('Sorry, not this time...');
}