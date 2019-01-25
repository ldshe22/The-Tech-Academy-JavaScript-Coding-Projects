function getReceipt() {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "PersonalPizza") {
		sizeTotal = 6;
	} else if (selectedSize === "MediumPizza") {
		sizeTotal = 10;
	} else if (selectedSize === "LargePizza") {
		sizeTotal = 14;
	} else if (selectedSize === "ExtraLargePizza") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getCrust(runningTotal,text1) {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("crust");
	for (var c = 0; c < crustArray.length; c++) {
		if (crustArray[c].checked) {
			var selectedCrust = crustArray[c].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Plain") {
		crustTotal = 0;
	} else if (selectedCrust === "GarlicButter") {
		crustTotal = 0;
	} else if (selectedCrust === "SpicyCrust") {
		crustTotal = 0;
	} else if (selectedCrust === "HouseSpecialCrust") {
		crustTotal = 0;
	} else if (selectedCrust === "CheeseStuffedCrust") {
		crustTotal =3;
	}
	runningTotal = runningTotal + crustTotal;
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1); // All three of these variables will be passed on to each function
};
function getCheese(runningTotal,text1) {
	// This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var d = 0; d < cheeseArray.length; d++) {
		if (cheeseArray[d].checked) {
			var selectedCheese = cheeseArray[d].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "RegularCheese") {
		cheeseTotal = 0;
	} else if (selectedCheese === "ExtraCheese") {
		cheeseTotal = 3;
	} else if (selectedCheese === "NoCheese") {
		cheeseTotal = 0;
	}
	runningTotal = runningTotal + cheeseTotal;
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	getVeggie(runningTotal,text1); // All three of these variables will be passed on to each function
};			
function getVeggie(runningTotal,text1) {
	var VeggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggie");
	for (var k = 0; k < veggieArray.length; k++) {
	if (veggieArray[k].checked) {
		selectedVeggie.push(veggieArray[k].value);
		console.log("selected veggie item: ("+veggieArray[k].value+")");
		text1 = text1+veggieArray[k].value+"<br>";
	}
}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}	
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};	
			