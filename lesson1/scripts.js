console.log('hello, hillel!');
console.info('is there info?');
console.error('it is error here!');

for (i = 1; i < 10; i++) {
    console.count();
}

console.time();
for (i = 12; i < 677; i++) {}
console.timeEnd()