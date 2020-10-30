function contains(a, obj) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}

$(document).ready(function(){
	var rList = [], lastTen = [], rLink = [];

	var rRandom = function(rList){
		return Math.floor(Math.random()*rList.length);
	};

	rList.push("Vietnamese Noodles"); 
	rLink.push("http://vietnamesenoodles.us/menu/");

	rList.push("Ferrante's"); 
	rLink.push("http://www.ferrantes.com/menu.html");

	rList.push("California Pizza Kitchen"); 
	rLink.push("http://www.cpk.com/menu/");

	rList.push("Potbelly Sandwiches"); 
	rLink.push("http://menus.potbelly.com/PB_FaxMenu_041.pdf");

	rList.push("Noodles"); 
	rLink.push("http://www.noodles.com/food/");

	rList.push("Bruegger's Bagels"); 
	rLink.push("https://www.brueggers.com/menu/lunch-sandwiches");

	rList.push("Cousin's Subs"); 
	rLink.push("http://www.cousinssubs.com/menu/sub-sandwiches/sub-sandwiches");

	rList.push("Subway"); 
	rLink.push("http://www.subway.com/menu/MenuCategoryItems.aspx?CC=USA&LC=ENG&MenuTypeId=1&MenuId=35");

	rList.push("Panera Bread"); 
	rLink.push("https://www.panerabread.com/content/dam/panerabread/documents/nutrition/Menu-Retail.PDF");

	rList.push("Culver's"); 
	rLink.push("http://www.culvers.com/menu-and-nutrition/");

	rList.push("Fiddleheads"); 
	rLink.push("https://www.fiddleheadscoffee.com/fiddleheads_bakery_store.aspx");

	rList.push("Chancery"); 
	rLink.push("http://www.thechancery.com/wp-content/uploads/Chancery-Core-Menu-White-Bi-Fold-23-Final.pdf");

	rList.push("Melthouse Bistro"); 
	rLink.push("http://www.melthousebistro.com/cmsAdmin/uploads/MHB_Take_Out_Menu_Revised_April_2014_web.pdf");

	rList.push("Bar Louie"); 
	rLink.push("http://www.barlouieamerica.com/menu/eat/plates.aspx#menu");

	rList.push("Zaffiro's"); 
	rLink.push("http://zaffirospizzeria.com/downloads/ZaffirosMenuWeb_052214.pdf");

	rList.push("Milwaukee Ale House"); 
	rLink.push("http://ale-house.com/wp-content/uploads/2013/09/DinnerWithBeer.pdf");

	rList.push("Fork (At Outpost)"); 
	rLink.push("http://www.outpost.coop/userimages/J4115d%20FORK%20to%20go%20menu%20Mequon%2010_14(1).pdf");

	rList.push("Jimmy John's"); 
	rLink.push("https://www.jimmyjohns.com/menu/#/");

	rList.push("Sobelman's"); 
	rLink.push("http://places.singleplatform.com/soblemans-pub/menu");

	rList.push("Jose's Blue Sombrero"); 
	rLink.push("http://www.josesbluesombrero.com/menu/");

	rList.push("Leonardo's Pizza"); 
	rLink.push("http://www.leonardospizzamequon.com/menu.htm");

	rList.push("Highland House"); 
	rLink.push("http://0101.nccdn.net/1_5/34c/2d9/19b/Dinner-menu-PRINT--3-.pdf");

	rList.push("The Roman Candle"); 
	rLink.push("http://theromancandle.com/wp-content/uploads/2012/01/TRC_MSN_Fall2014Menu_November2014.pdf");

	rList.push("Cheesecake Factory"); 
	rLink.push("http://www.thecheesecakefactory.com/menu/");

	rList.push("Toppers Pizza"); 
	rLink.push("http://www.toppers.com/menu");

	rList.push("Cafe 1505"); 
	rLink.push("http://www.cafe1505.com/menu/dinner");

	rList.push("Tomaso's Pizzeria"); 
	rLink.push("http://www.tomasoscedarburg.com/menu.cfm?id=11");

	rList.push("Fresh Market (Deli Menu)"); 
	rLink.push("");

	rList.push("Fresh (at Pavillion)"); 
	rLink.push("");

	rList.push("Quizno's"); 
	rLink.push("http://www.quiznos.com/Menu/Food-menu.aspx");

	rList.push("Out & Out Custard and Sandwiches"); 
	rLink.push("http://www.outandoutcustard.com/files/Menu.pdf");

	rList.push("Water Street Brewery (Grafton)"); 
	rLink.push("https://www.waterstreetbrewery.com/images/menus/downtownfullmenu.pdf");

	rList.push("Boston Market"); 
	rLink.push("http://www.bostonmarket.com/ourFood?page=foodSub&id=1&name=Individual+Meals");

	rList.push("Ian's Pizza"); 
	rLink.push("http://ianspizza.com/menus/");

	rList.push("Einstein Bros Bagels"); 
	rLink.push("http://www.einsteinbros.com/menu/6/anytime-creations");

	rList.push("The Charcoal Grill"); 
	rLink.push("http://www.charcoalgrill.com/menu-burgers.html");

	rList.push("El Paisa"); 
	rLink.push("http://www.lospaisa.com/menu");

	rList.push("Taco Bell"); 
	rLink.push("http://www.tacobell.com/food/menu/fourth-meal");

	rList.push("Benji's Deli"); 
	rLink.push("http://www.benjisdeliandrestaurant.com/uploads/2/2/5/1/22511402/benjis_091114.pdf");

	rList.push("The Anchorage"); 
	rLink.push("http://www.foodspot.com/Search/external.aspx?fs=3&url=http://www.foodspot.com/Clients/WI/Milwaukee/TheAnchorage/Anchorage%20Breakfast221.pdf");

	rList.push("Remington's"); 
	rLink.push("http://remingtonsriverinn.com/menu.html");

	rList.push("Range Line Inn"); 
	rLink.push("http://www.therangelineinn.com/Media/Range_Line_Menu.pdf");

	rList.push("Five Guys"); 
	rLink.push("http://www.fiveguys.com/menu.aspx");

	rList.push("Poco Loco"); 
	rLink.push("http://www.pocolococantina.com/media/PocoLoco_menu.pdf");
	

	$(".versus").hide();
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
			$(".resultLink").text(rList[rNum]).attr('href',rLink[rNum]);
			$(".resultLink2").text(rList[rNum2]).attr('href',rLink[rNum2]);
			$(".resultLink2").show();
			$(".versus").show();
		} else {
			$(".resultLink2").hide();
			$(".versus").hide();
			$(".resultLink").text(rList[rNum]).attr('href',rLink[rNum]);
		}

	});
});