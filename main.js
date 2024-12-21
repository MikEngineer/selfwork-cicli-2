let disp = 0;
let counter = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {console.log(i);
    }else {
        disp += i;
        counter++;
    }   
}

let media = disp / counter;

console.log(`La media dei numeri dispari è: ${media}`);





