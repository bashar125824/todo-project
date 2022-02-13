
var Name = window.prompt("Enter your name: ");
//alert(`Your name is ${Name}`);
console.log(Name);


var Gender = window.prompt("Enter your Gender As M for male and F for female:");
console.log(Gender);



var Age = window.prompt("Enter your age:");
AgeToNum = Number(Age);
if (AgeToNum <= 0) {

    alert("Please Enter your Age correctly ");

    AgeToNum = window.prompt("Enter your age:");
}



var UserChoice = confirm("Do You Want To Skip The Welcoming Message ?");
console.log(UserChoice);

if (Gender == 'M') {
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


arr = [];
function Bringanswers(question) {
    answer = window.prompt(question);
    
     if (answer !== 'Yes' && answer !== 'yes' && answer !== 'No' && answer !== 'no' && answer !== '') {
        alert("Please Enter Your Answer As Yes or No");
        flag = true;
        while (flag) {
            answer = window.prompt(question);
            if (answer == '') {
                newanswer = "Invalid";
                flag = false;
            }

            else if (answer == 'Yes' || answer == 'yes') {
                newanswer = "yes";
                flag = false;
            }
            else if (answer == 'No' || answer == 'no') {
                newanswer = "no"
                flag = false;

            }
            else {
                flag = true;
            }

        }
        arr.push(newanswer);
    }
    else { if (answer == ''){
          answer = "Invalid";
    }
        arr.push(answer);}

    
}








Bringanswers("Are you married ? 'Answer the Yes or No'");

Bringanswers("Do you love programming ? 'Answer the Yes or No'");

Bringanswers("Do you like winter ? 'Answer the Yes or No'");



alert(`    ${arr[0]}
           ${arr[1]}
           ${arr[2]}`)
