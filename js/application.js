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
	rList.push("North Shore Bistro");
	rList.push("Ferrante's");
	rList.push("California Pizza Kitchen");
	rList.push("Potbelly Sandwiches");
	rList.push("Noodles");
	rList.push("Bruegger's Bagels");
	rList.push("Cousin's Subs");
	rList.push("Subway");
	rList.push("Panera Bread");
	rList.push("Culver's");
	rList.push("Brew City Barbecue");
	rList.push("Fiddleheads");
	rList.push("Chancery");
	rList.push("Melthouse Bistro");
	rList.push("Bar Louie");
	rList.push("Zaffiro's");
	rList.push("Devon Seafood Grill");
	rList.push("Milwaukee Ale House");
	rList.push("Fork (At Outpost)");
	rList.push("Jimmy John's");
	rList.push("Centennial");
	rList.push("Jose's Blue Sombrero");
	rList.push("Leonardo's Pizza");
	rList.push("Highland House");
	rList.push("The Roman Candle");
	rList.push("Cheesecake Factory");
	rList.push("Toppers Pizza");
	rList.push("Cafe 1505");
	rList.push("Tomaso's Pizzeria");
	rList.push("Fresh Market (Deli Menu)");
	rList.push("Fresh (at Pavillion)");
	rList.push("Blaze Pizza");
	rList.push("Sprecher's Pub");
	rList.push("Big Daddy's BBQ");
	rList.push("Quizno's");
	rList.push("Out & Out Custard and Sandwiches");
	rList.push("Water Street Brewery (Grafton)");
	rList.push("Boston Market");
	rList.push("Ian's Pizza");
	rList.push("Silver Spring House");
	rList.push("Applebee's");
	rList.push("Cosi");
	rList.push("Einstein Bros Bagels");
	rList.push("The Charcoal Grill");
	rList.push("El Paisa");
	rList.push("Taco Bell");
	rList.push("Taylor and Dunn's");
	rList.push("Benji's Deli");
	rList.push("The Anchorage");
	rList.push("Remington's");
	rList.push("Range Line Inn");
	rList.push("Five Guys");
	rList.push("Poco Loco");

	rLink.push("http://vietnamesenoodles.us/menu/");
	rLink.push("http://www.nsbbarandgrill.com/menu-entrees.html");
	rLink.push("http://www.ferrantes.com/menu.html");
	rLink.push("http://www.cpk.com/menu/");
	rLink.push("http://menus.potbelly.com/PB_FaxMenu_041.pdf");
	rLink.push("http://www.noodles.com/food/");
	rLink.push("https://www.brueggers.com/menu/lunch-sandwiches");
	rLink.push("http://www.cousinssubs.com/menu/sub-sandwiches/sub-sandwiches");
	rLink.push("http://www.subway.com/menu/MenuCategoryItems.aspx?CC=USA&LC=ENG&MenuTypeId=1&MenuId=35");
	rLink.push("https://www.panerabread.com/content/dam/panerabread/documents/nutrition/Menu-Retail.PDF");
	rLink.push("http://www.culvers.com/menu-and-nutrition/");
	rLink.push("http://www.allmenus.com/wi/milwaukee/9604-brew-city-bbq-downtown/menu/");
	rLink.push("https://www.fiddleheadscoffee.com/fiddleheads_bakery_store.aspx");
	rLink.push("http://www.thechancery.com/wp-content/uploads/Chancery-Core-Menu-White-Bi-Fold-23-Final.pdf");
	rLink.push("http://www.melthousebistro.com/cmsAdmin/uploads/MHB_Take_Out_Menu_Revised_April_2014_web.pdf");
	rLink.push("http://www.barlouieamerica.com/menu/eat/plates.aspx#menu");
	rLink.push("http://zaffirospizzeria.com/downloads/ZaffirosMenuWeb_052214.pdf");
	rLink.push("http://www.devonseafood.com/menus/dinner/164.pdf");
	rLink.push("http://ale-house.com/wp-content/uploads/2013/09/DinnerWithBeer.pdf");
	rLink.push("http://www.outpost.coop/userimages/J4115d%20FORK%20to%20go%20menu%20Mequon%2010_14(1).pdf");
	rLink.push("https://www.jimmyjohns.com/menu/#/");
	rLink.push("http://www.centennialbg.com/menu/");
	rLink.push("http://www.josesbluesombrero.com/menu/");
	rLink.push("http://www.leonardospizzamequon.com/menu.htm");
	rLink.push("http://0101.nccdn.net/1_5/34c/2d9/19b/Dinner-menu-PRINT--3-.pdf");
	rLink.push("http://theromancandle.com/wp-content/uploads/2012/01/TRC_MSN_Fall2014Menu_November2014.pdf");
	rLink.push("http://www.thecheesecakefactory.com/menu/");
	rLink.push("http://www.toppers.com/menu");
	rLink.push("http://www.cafe1505.com/menu/dinner");
	rLink.push("http://www.tomasoscedarburg.com/menu.cfm?id=11");
	rLink.push("");
	rLink.push("");
	rLink.push("http://www.blazepizza.com/menu/signature-pizzas");
	rLink.push("http://www.sprecherspub.com/welcome/#dinner-menu");
	rLink.push("http://bigdaddysbbq-stpaul.com/");
	rLink.push("http://www.quiznos.com/Menu/Food-menu.aspx");
	rLink.push("http://www.outandoutcustard.com/files/Menu.pdf");
	rLink.push("https://www.waterstreetbrewery.com/images/menus/downtownfullmenu.pdf");
	rLink.push("http://www.bostonmarket.com/ourFood?page=foodSub&id=1&name=Individual+Meals");
	rLink.push("http://ianspizza.com/menus/");
	rLink.push("http://www.thesilverspringhouse.com/dinnermenu.php");
	rLink.push("http://www.applebees.com/menu/entrees");
	rLink.push("https://getcosi.com/menu/entrees.html");
	rLink.push("http://www.einsteinbros.com/menu/6/anytime-creations");
	rLink.push("http://www.charcoalgrill.com/menu-burgers.html");
	rLink.push("http://www.lospaisa.com/menu");
	rLink.push("http://www.tacobell.com/food/menu/fourth-meal");
	rLink.push("http://tayloranddunns.com/menu/");
	rLink.push("http://www.benjisdeliandrestaurant.com/uploads/2/2/5/1/22511402/benjis_091114.pdf");
	rLink.push("http://www.foodspot.com/Search/external.aspx?fs=3&url=http://www.foodspot.com/Clients/WI/Milwaukee/TheAnchorage/Anchorage%20Breakfast221.pdf");
	rLink.push("http://remingtonsriverinn.com/menu.html");
	rLink.push("http://www.therangelineinn.com/Media/Range_Line_Menu.pdf");
	rLink.push("http://www.fiveguys.com/menu.aspx");
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