function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "Sulfuric Acid") {
		correct++;
}
	if (question2 == "All of the answers are correct") {
		correct++;
}
	if (question3 == "CaCl<sub>2</sub>") {
		correct++;
	}
	if (question4 == "MnF<sub>2</sub>") {
		correct++;
}
    if (question5 == "Lithium Nitride") {
		correct++;
}
    if (question6 == "Silver Oxide") {
		correct++;
}
    if (question7 == "P<sub>4</sub>O<sub>10</sub>") {
		correct++;
}
    if (question8 == "SO<sub>2</sub>") {
		correct++;
}
    if (question9 == "All of the answers are correct") {
		correct++;
}
    if (question10 == "CsCl") {
		correct++;
}

	var pictures = ["img/win.gif", "img/notbad.jpeg", "img/sad.gif"];
	var messages = ["Excellent work!", "Not bad, but you could have done better", "There is still some time to improve"];
	var score;

	if (correct==10) {
		score = 0;
	}

	if (correct > 7  && correct < 9) {
		score = 1;
	}

	if (correct > 0 && correct < 6) {
		score = 2;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
