let s = ("lakehub")
function vowelsAndConsonants(s) {
    const vowels = `aeiou`;
    var consonants = ``;

    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            consonants += s[i] + `\n`;
        }
    }
    console.log(consonants.trim());


let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result); 
// shorter verson of the above loop( replacing while with for)
let result = 1;
for (let counter = 0; counter < 10; counter = counter +
1) {
result = result * 2;
}
console.log(result); 


for (let number = 0; number <12; number = number + 2){
    console.log(number);
}

// alternatives of `counter = counter + 1` are `counter +=` and `counter ++`
for (current = 30; ; current ++) {
    if (current % 3 == 0){
        console.log(current);
        break;
    }
}
for (triangle = "#"; ; triangle ++){
    if (triangle <8){
        console.log(triangle);
        break;
    }
}
