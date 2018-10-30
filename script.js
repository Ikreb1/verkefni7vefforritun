/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
var question = "Hvað er ";
var count = 0;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
	window.confirm("Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.");
	play();
	var yesNo = window.confirm("Spila annan leik");
	while(yesNo) {
		play();
		yesNo = window.confirm("Spila annan leik");
	}
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
	var checker;
	var answer;
	var start = new Date().getTime();
	
	for(var i = 0;i < GAMES_TO_PLAY;i++) {
		checker = ask();
		answer = window.prompt(question);
		if(answer == null) {
			window.alert("Hætt í leik.");
			return;
		}
		if(parseInt(answer) === checker) {
			count++;
		}
	}
	var end = new Date().getTime();
	var time = (end - start) / 1000;
	var timePer = time / 10;
	window.alert("Þú svaraðir " + count + " af 10 dæmum rétt á " + time.toFixed(2) + " sekúndum \n Meðalrétt svör á sekúndu eru " + timePer.toFixed(2));
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
	var number1;
	var number2;
	var sum;
	question = "Hvað er ";
	switch(randomNumber(0, 3)) {
		// 0 = +, 1 = -, 2 = *, 3 = /
		case 0: {
			number1 = randomNumber(1, 100);
			number2 = randomNumber(1, 100);
			question = question + number1 + " + " + number2;
			sum = number1 + number2;
			break;
		}
		case 1: {
			number1 = randomNumber(1, 100);
			number2 = randomNumber(1, 100);
			question = question + number1 + " - " + number2;
			sum = number1 - number2;
			break;
		}
		case 2: {
			number1 = randomNumber(1, 10);
			number2 = randomNumber(1, 10);
			question = question + number1 + " * " + number2;
			sum = number1 * number2;
			break;
		}
		case 3: {
			number1 = randomNumber(2, 10);
			number2 = randomNumber(2, 10);
			question = question + number1 * number2 + " / " + number2;
			sum = (number1 * number2) / number2;
			break;
		}
	}
	return sum;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
