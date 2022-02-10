var Name = window.prompt("Enter your name: ");
//alert(`Your name is ${Name}`);
console.log(Name);


var Gender = window.prompt("Enter your Gender As M for male and F for female:");
console.log(Gender);



var Age = window.prompt("Enter your age:");
AgeToNum = Number(Age);
if (AgeToNum <= 0 ){

alert("Please Enter your Age correctly ");

    AgeToNum = window.prompt("Enter your age:");
}



var UserChoice = confirm("Do You Want To Skip The Welcoming Message ?");
console.log(UserChoice);

if (Gender == 'M'){
    alert(`WELCOME Mr ${Name} `)
}
else if (Gender == 'F') {
    alert(`WELCOME Ms ${Name} `)

}
else {
alert("Please enter your Gender as M or F")
var GenderafterEdit = window.prompt("Enter your gender:");
// alert(`Your gender is ${GenderafterEdit}`);
console.log(GenderafterEdit);

    if (GenderafterEdit == 'M') {
        alert(`WELCOME Mr ${Name} `)
    }
    else if (GenderafterEdit == 'F') {
        alert(`WELCOME Ms ${Name} `)

}
}
