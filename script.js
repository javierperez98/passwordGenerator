const generateBtn = document.querySelector("#generate");
const passwordLength = document.querySelector("#passwordRange");
const passwordText = document.querySelector("#password");
const passwordLengthLable = document.getElementById("passwordLength");
const numberCheck = document.getElementById("numberCheck");
const upperCheck = document.getElementById("upperCheck");
const lowerCheck = document.getElementById("lowerCheck");
const symbolCheck = document.getElementById("symbolCheck");

generatePassword = (e) => {
	e.preventDefault();
	const password = getSelectedCheckboxValues("checked");
	let length = passwordLength.value;
	let randomPassword = "";
	let range = length / password.length;

	getCharacter = (index) => {
		randomPassword += password[index].charAt(
			Math.floor(Math.random() * password[index].length)
		);
	};

	handleRemainder = () => {
		const index = Math.floor(Math.random() * password.length);
		getCharacter(index);
	};

	if (length % password.length === 1) {
		range = (length - 1) / password.length;
		handleRemainder();
	}
	if (length % password.length === 2) {
		range = (length - 2) / password.length;
		for (var i = 0; i < 2; ++i) {
			handleRemainder();
		}
	}
	if (length % password.length === 3) {
		range = (length - 3) / password.length;
		for (var i = 0; i < 3; ++i) {
			handleRemainder();
		}
	}

	for (var i = 0; i < range; ++i) {
		if (password[0]) {
			getCharacter(0);
		}
		if (password[1]) {
			getCharacter(1);
		}
		if (password[2]) {
			getCharacter(2);
		}
		if (password[3]) {
			getCharacter(3);
		}
	}

	var shuffled = randomPassword
		.split("")
		.sort(function () {
			return 0.5 - Math.random();
		})
		.join("");

	return (passwordText.value = shuffled);
};

setPasswordLength = (e) => {
	e.preventDefault();
	const length = e.target.value;
	passwordLengthLable.innerHTML = `Set a Password Length: ${length}`;
};

getSelectedCheckboxValues = (name) => {
	let values = [];
	const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
	checkboxes.forEach((checkbox) => {
		values.push(checkbox.value);
	});
	if (values.length > 0) {
		generateBtn.removeAttribute("disabled");
	}
	if (values.length === 0) {
		generateBtn.setAttribute("disabled", "disabled");
	}
	return values;
};

activeBtn = () => {
	getSelectedCheckboxValues("checked");
};

numberCheck.addEventListener("change", activeBtn);
upperCheck.addEventListener("change", activeBtn);
lowerCheck.addEventListener("change", activeBtn);
symbolCheck.addEventListener("change", activeBtn);
generateBtn.addEventListener("click", generatePassword);
passwordLength.addEventListener("change", setPasswordLength);
