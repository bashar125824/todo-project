
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
var userChoice = confirm("Do You Want To Skip The Welcoming Message ?");
console.log(userChoice);

if (Gender == 'M') {
    alert(`WELCOME Mr ${Name} `)
}
else if (Gender == 'F') {
    alert(`WELCOME Ms ${Name} `)

}
else {
    alert("Please enter your Gender as M or F")
    var GenderAfterEdit = window.prompt("Enter your gender:");
    // alert(`Your gender is ${GenderafterEdit}`);
    console.log(GenderAfterEdit);

    if (GenderAfterEdit == 'M') {
        alert(`WELCOME Mr ${Name} `)
    }
    else if (GenderAfterEdit == 'F') {
        alert(`WELCOME Ms ${Name} `)

    }
}


var arr = [];
function BringAnswers(question) {
    answer = window.prompt(question);
    
     if (answer !== 'Yes' && answer !== 'yes' && answer !== 'No' && answer !== 'no' && answer !== '') {
        alert("Please Enter Your Answer As Yes or No");
        flag = true;
        while (flag) {
            answer = window.prompt(question);
            if (answer == '') {
                newAnswer = "Invalid";
                flag = false;
            }

            else if (answer == 'Yes' || answer == 'yes') {
                newAnswer = "yes";
                flag = false;
            }
            else if (answer == 'No' || answer == 'no') {
                newAnswer = "no"
                flag = false;

            }
            else {
                flag = true;
            }

        }
        arr.push(newAnswer);
    }
    else { if (answer == ''){
          answer = "Invalid";
    }
        arr.push(answer);}

    
}








BringAnswers("Are you married ? 'Answer the Yes or No'");

BringAnswers("Do you love programming ? 'Answer the Yes or No'");

BringAnswers("Do you like winter ? 'Answer the Yes or No'");



alert(`    ${arr[0]}
           ${arr[1]}
           ${arr[2]}`)
