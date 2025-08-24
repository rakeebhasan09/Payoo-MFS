document
	.getElementById("add-money-btn")
	.addEventListener("click", function (e) {
		e.preventDefault();
		const userPinNumber = 2868;

		const bank = document.getElementById("bank").value;
		const totalAmount = parseInt(
			document.getElementById("total-amount").innerText
		);
		const accountNumber = parseInt(
			document.getElementById("account-number").value
		);
		const enterAmount = parseInt(
			document.getElementById("add-amount").value
		);
		const pinValue = parseInt(document.getElementById("pin-number").value);

		// Validation
		if (accountNumber.toString().length != 10) {
			alert("Invalid Account Number.");
			return;
		}

		if (enterAmount < 1) {
			alert("Write A Valid Amouont.");
			return;
		}

		if (userPinNumber !== pinValue) {
			alert("Invalid Pin Number.");
			return;
		}

		const newTotal = totalAmount + enterAmount;
		document.getElementById("total-amount").innerText = newTotal;

		document.getElementById("bank").value = "Select back";
		document.getElementById("account-number").value = "";
		document.getElementById("add-amount").value = "";
		document.getElementById("pin-number").value = "";
	});
