function contains(a, obj) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}

$(document).ready(function(){
	var rList = [];
	var lastTen = [];

	var rRandom = function(rList){
		return Math.floor(Math.random()*rList.length);
	};

	rList[0]="Vietnamese Noodles";
	rList[1]="North Shore Bistro";
	rList[2]="Ferrante's";
	rList[3]="California Pizza Kitchen";
	rList[4]="Potbelly Sandwiches";
	rList[5]="Noodles";
	rList[6]="Bruegger's Bagels";
	rList[7]="Cousin's Subs";
	rList[8]="Subway";
	rList[9]="Panera Bread";
	rList[10]="Culver's";
	rList[11]="Brew City Barbecue";
	rList[12]="Fiddleheads";
	rList[13]="Chancery";
	rList[14]="Melthouse Bistro";
	rList[15]="Bar Louie";
	rList[16]="Zaffiro's";
	rList[17]="Devon Seafood Grill";
	rList[18]="Milwaukee Ale House";
	rList[19]="Fork (At Outpost)";
	rList[20]="Jimmy John's";
	rList[21]="Centennial";
	rList[22]="Jose's Blue Sombrero";
	rList[23]="Leonardo's Pizza";
	rList[24]="Highland House";
	rList[25]="The Roman Candle";
	rList[26]="Cheesecake Factory";
	rList[27]="Toppers Pizza";
	rList[28]="Cafe 1505";
	rList[29]="Tomaso's Pizzeria";
	rList[30]="Fresh Market (Deli Menu)";
	rList[31]="Fresh (at Pavillion)";
	rList[32]="Blaze Pizza";
	rList[33]="Sprecher's Pub";
	rList[34]="Big Daddy's BBQ";
	rList[35]="Quizno's";
	rList[36]="Howard's Pub and Grill";
	rList[37]="Out & Out Custard and Sandwiches";
	rList[38]="Water Street Brewery (Grafton)";
	rList[39]="Boston Market";
	rList[40]="Ian's Pizza";
	rList[41]="Silver Spring House";
	rList[42]="Applebee's";
	rList[43]="Cosi";
	rList[44]="Einstein Bros Bagels";
	rList[45]="The Charcoal Grill";
	rList[46]="El Paisa";
	rList[47]="Taco Bell";
	rList[48]="Taylor and Dunn's";
	rList[49]="Benji's Deli";
	rList[50]="The Anchorage";
	rList[51]="Remington's";
	rList[52]="Range Line Inn";
	rList[53]="Five Guys";
	rList[54]="Poco Loco";

	$(".pickEat").on("click",function(){
		var rNum = rNum2 = rRandom(rList);
		while (contains(lastTen,rNum)){
			rNum = rRandom(rList);
		}
		lastTen.push(rNum);
		if (lastTen.length>10){
			lastTen.splice(0,1);
		}

		if ($("#faceoffSwitch").prop('checked')){
			while (contains(lastTen,rNum2)){
				rNum2 = rRandom(rList);
			}
			lastTen.push(rNum);
			if (lastTen.length>10){
				lastTen.splice(0,1);
			}
			$(".resultEat").text(rList[rNum]+" vs. "+rList[rNum2]);
		} else {
			$(".resultEat").text(rList[rNum]);
		}

	});
});