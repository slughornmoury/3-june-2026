// let num1 = 10;
// let num2 = 20;
// // addition operator
// let result = num1 + num2;
// console.log(result);
// // subtraction operator
// let result2 = num1 - num2;
// console.log(result2);
// // multiplication operator
// let result3 = num1 * num2;
// console.log(result3);
// // division operator
// let result4 = num1 / num2;
// console.log(result4);


// let num3 = 20;
// let num4 = 3;
// // modulus operator
// let result5 = num3 % num4;
// console.log(result5);

// // exponentiation operator
// let result6 = num3 ** num4;
// console.log(result6);
// // increment operator
// let result7 = num3++;
// console.log(result7);
// console.log(num3);
// // decrement operator
// let result8 = num4--;
// console.log(result8);
// console.log(num4);
// // operator precedence
// let x=(100+50)*2;
// console.log(x);
// // operator precedence with division and multiplication
// let y=100/50*3;
// console.log(y);
// // operator precedence with parentheses
// let n1=10;
// let n2=20;
// let result9=n1+=n2;
// console.log(result9);
// // subtraction assignment operator
// let result10=n1-=n2;
// console.log(result10);
// // multiplication assignment operator
// let result11=n1*=n2;
// console.log(result11);  
// // division assignment operator
// let result12=n1/=n2;
// console.log(result12);   
// // modulus assignment operator
// let result13=n1%=n2;
// console.log(result13);
// // exponentiation assignment operator
// let result14=n1**=n2;
// console.log(result14);  
// // ;ogical and assignment operators
// let x= true;
// let y=x &&=10;
// console.log(y);
// // logical or assignment operator

// let x= true;
// let y=x ||=10;
// console.log(y);

// // logical nullish assignment operator
// let x= null;
// let y=x ??=10;
// console.log(y);

// // bitwise AND operator
// let a=5;    
// let b=3;
// let c=a & b;
// console.log(c);
// // bitwise OR operator
// let d=5;
// let e=3;
// let f=d | e;
// console.log(f);
// // bitwise XOR operator
// let g=5;
// let h=3;
// let i=g ^ h;
// console.log(i);
// // bitwise NOT operator
// let j=5;
// let k=~j;
// console.log(k);
// // left shift operator
// let l=5;
// let m=l << 2;
// console.log(m);
// // right shift operator
// let n=5;
// let o=n >> 2;
// console.log(o);
// // 
// let p=5;
// let q=6;
// // equality operator
// let result15 = p==q;
// console.log(result15);
// let p=5;
// let r="5";
// // equality operator
// let result15 = p==r;
// console.log(result15);

// let p=5;
// let r="5";
// // strict equality operator
// let result15 = p===r;
// console.log(result15);

// // inequality operator
// let result16 = p!=q;
// console.log(result16);  

// // greater than operator
// let result17 = p>q;
// console.log(result17);
// // less than operator
// let result18 = p<q;
// console.log(result18);



//conditional operators
let temperature = 40;
if (temperature > 30) {
    console.log("It's a very hot day");
} else {
    console.log("It's not that hot today");
}

let age = 50;
if (age > 1000) {
    console.log("You are a vampire");
} else {
    console.log("You are not a vampire");
}

let username = "OptimusPrime";
let password = "tr@n$f0rmer$0nearth";
if (username === "OptimusPrime" && password === "tr@n$f0rmer$0nearth") {
    console.log(username, "Logged in successfully");
} else {
    console.log("Invalid username or password");
}


let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

let dresscolor = "yellow";
if (dresscolor === "black") {
    console.log("You can wear this dress");
} else if (dresscolor === "white") {
    console.log("You can wear this dress");
} else if (dresscolor === "blue") {
    console.log("You can wear this dress");
}
else {
    console.log("Your dress is not formal. You cannot wear this dress");
}

let device = "laptop";
if (device === "laptop" || device === "tablet") {
    console.log("You are allowed to use this device in the classroom");
} else {
    console.log("You are not allowed to use this device in the classroom");
}

let age1 = 15;
let result = age1 >= 18 ? "You are an adult" : "You are a minor";
console.log(result);

let score = 22;
let grade = score >= 40 ? "Passed" : "Failed";
console.log(grade);

let age2 = 25;
let permission = age2 >= 25 ? "You are allowed to buy property" : "You are not allowed to have any property";
console.log(permission);
//  switch statement


let mark = 90;
switch (true) {
    case (mark >= 80 && mark <= 100):
        console.log("Grade: A+");
        break;
    case (mark >= 70 && mark < 79):
        console.log("Grade: A");
        break;
    case (mark >= 60 && mark < 69):
        console.log("Grade: A-");
        break;
    case (mark >= 50 && mark < 59):
        console.log("Grade: B");
        break;
    case (mark >= 40 && mark < 49):
        console.log("Grade: D");
    default:
        console.log("Grade: F");
}

let number = 357;
if (number % 2 === 0) {
    console.log(number, "is an even number");
} else {
    console.log(number, "is an odd number");
}

let firstname = "Optimus";
let lastname = "Prime";
let fullname = firstname + " " + lastname;
console.log(fullname);

let poem= `"Two roads diverged in a yellow wood,
 And sorry I could not travel both
 And be one traveler, 
 long I stood
 And looked down one as far as I could
 To where it bent in the undergrowth;"`;
console.log(poem);

let firstname2 = "Optimus";
let lastname2 = "Prime";
let fullname2 = `${firstname2} ${lastname2}`;
console.log(fullname2);

let fullname3 = `Optimus Prime`;
console.log(fullname3.length);
console.log(fullname3.charAt(12));

let txt = "Hello";
let txt2 = "World";
let result2 = txt.concat(" ", txt2);
console.log(result2);

console.log(fullname3.toUpperCase());
console.log(fullname3.toLowerCase());

console.log(fullname3.trim());
