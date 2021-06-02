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
	const length = passwordLength.value;
	console.log(length);
	console.log(password);
	let randomPassword = "";
	if (password.length === 1) {
		for (var i = 0, n = password[0].length; i < length; ++i) {
			randomPassword += password[0].charAt(Math.floor(Math.random() * n));
		}
		return (passwordText.value = randomPassword);
	}
};

setPasswordLength = (e) => {
	e.preventDefault();
	const length = e.target.value;
	passwordLengthLable.innerHTML = `Set a Password Length: ${length} Characters long`;
};

getSelectedCheckboxValues = (name) => {
	let values = [];
	const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
	checkboxes.forEach((checkbox) => {
		var shuffled = checkbox.value
			.split("")
			.sort(function () {
				return 0.5 - Math.random();
			})
			.join("");
		values.push(shuffled);
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
