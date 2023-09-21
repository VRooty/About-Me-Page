let Username = prompt("What's your name?");
alert("Hi " + Username + ". Nice to meet you.");
console.log("User's name is " + Username);

function myFunction() {
  let question1 = prompt("Is Vicky's surname Rooney?");
  if (question1 === "yes" || question1 === "no") {
    alert("Either is correct. Vicky has 3 surnames");
  }

  let question2 = prompt("Does Vicky know Arabic?");
  if (question2 === "no") {
    alert("Right, she never got passed the alphabet");
  } else {
    alert("no, that's not correct");
  }

  let question3 = prompt("Does Vicky have a cat named Kira?");
  if (question3 === "no") {
    alert("Thats the correct answer, Kira is her daughter.");
  } else {
    alert("Thats incorrect, Kira is her daughter.");
  }

  let question4 = prompt("Is Vicky's favourite game on the PS2 Silent Hill?");
  if (question4 === "yes") {
    alert(
      "Thats the correct answer, Vicky's favourite game on the PS2 Silent Hill."
    );
  } else {
    alert("Thats incorrect.");
  }

  let question5 = prompt("Would Vicky would like to work for Google?");
  if (question5 === "no") {
    alert("Thats the correct answer, Vicky would not like to work for Google.");
  } else {
    alert("Thats incorrect.");
  }
}
