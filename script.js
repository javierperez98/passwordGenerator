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
	console.log("Generate Password");
	console.log(getSelectedCheckboxValues("checked"));
	console.log(passwordLength.value);
};

setPasswordLength = (e) => {
	e.preventDefault();
	const length = e.target.value;
	passwordLengthLable.innerHTML = `Set a Password Length: ${length} Characters long`;
};

getSelectedCheckboxValues = (name) => {
	const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
	let values = [];
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
	console.log(getSelectedCheckboxValues("checked"));
};

numberCheck.addEventListener("change", activeBtn);
upperCheck.addEventListener("change", activeBtn);
lowerCheck.addEventListener("change", activeBtn);
symbolCheck.addEventListener("change", activeBtn);
generateBtn.addEventListener("click", generatePassword);
passwordLength.addEventListener("change", setPasswordLength);
