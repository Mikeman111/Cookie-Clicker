           //Checks if variables are defined
if(typeof BakeryName === "undefined"){
		//If no name found, give default name
			var BakeryName = "Mike";
}
			var BakeryName = localStorage.BakeryName;
if(typeof cookieClicks === "undefined"){
		//If no variables are defined, the variables are defined and given a default value.
			var cookieClicks = 0;
			} 
			var cookieClicks = parseInt(localStorage.cookieClicks,10);
if(typeof clckValue === "undefined"){
		//If no variable is defined, variable is given value.
			var clickValue = 1;
}
			var clickValue = parseInt(localStorage.clickValue,10);
if(typeof AutoClickers === "undefined"){
		//If no Auto Clickers defined, defaul value given.
			var AutoClickers = 0;
}
			var AutoClickers = parseInt(localStorage.AutoClickers,10);
if(typeof AutoClickerCost === "undefined"){
		//If no Auto Clicker Cost defined, default value given.
			var AutoClickerCost = 15;
}
			var AutoClickerCost = parseInt(localStorage.AutoClickerCost,10);
if(typeof Grandmas === "undefined"){
		//If no Grandma found, given default value.
			var Grandmas = 0;
}
			var Grandmas = parseInt(localStorage.Grandmas, 10);
if(typeof GrandmaCost === "undefined"){
		//If no GrandmaCost found, given start value.
			var GrandmaCost = 100;
}
			var GrandmaCost = parseInt(localStorage.GrandmaCost, 10);
if(typeof Farms === "undefined"){
		//If no Farm value found, given value of 0.
			var Farms = 0;
}
			var Farms = parseInt(localStorage.Farms, 10);
if(typeof FarmCost === "undefined"){
		//If no FarmCost is found, given default cost.
			var FarmCost = 500;
}
			var FarmCost = parseInt(localStorage.FarmCost, 10);
if(typeof Factories === "undefined"){
		//If no Factories found, given default cost.
			var Factories = 0;
}
			var Factories = parseInt(localStorage.Factories, 10);
if(typeof FactoryCost === "undefined"){
		//If no FactoryCost found, given default cost.
			var FactoryCost = 3000;
}
			var FactoryCost = parseInt(localStorage.FactoryCost, 10);
if(typeof Mines === "undefined"){
		//If no Mine found, give 0 Mines.
			var Mines = 0;
}
			var Mines = parseInt(localStorage.Mines, 10);
if(typeof MineCost === "undefined"){
		//If no MineCost is found, set default cost.
			var MineCost = 10000;
}
			var MineCost = parseInt(localStorage.MineCost, 10);
if(typeof Shipments === "undefined"){
		//If no Shipment found, set number:
			var Shipments = 0;
}
			var Shipments = parseInt(localStorage.Shipments, 10);
if(typeof ShipmentCost === 'undefined'){
		//If no Shipment Cost found, set defauly cost:
			var ShipmentCost = 40000;
}
			var ShipmentCost = parseInt(localStorage.ShipmentCost, 10);
if(typeof Labs === "undefined"){
		//If no Labs found, set default amount.
			var Labs = 0;
}
			var Labs = parseInt(localStorage.Labs, 10);
if(typeof LabCost === "undefined"){
		//If LabCost found, set default 
			var LabCost = 200000;
}
			var LabCost = parseInt(localStorage.LabCost, 10);
if(typeof Portals === "undefined"){
		//If no Portals found, give 0 portals:
			var Portals = 0;
}
			var Portals = parseInt(localStorage.Portals, 10);
if(typeof PortalCost === "undefined"){
		//If no PortalCost found:
			var PortalCost = 16666660;
}
			var PortalCost = parseInt(localStorage.PortalCost, 10);
//==========================================================================
//=================================Change Bakery Name=======================
function changeName() {
	 BakeryName = prompt("Name your bakery!");
}
//==================================Begin Compute Structure CPS=============================================================================
             //Purchases Auto Clicker for Player and removes Cookies.
function getAutoClicker() {
	if (cookieClicks >= AutoClickerCost) {
		AutoClickers++;
		cookieClicks -= AutoClickerCost;
		AutoClickerCost += Math.round(AutoClickerCost *0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase an Auto Clicker. An Auto Clicker currently costs " + AutoClickerCost + " which is " + (AutoClickerCost - cookieClicks) + " more cookies than you have.");
					}
				} 
			//Purchase Grandma and remove Cookie Cost.
function getGrandma() {
	if (cookieClicks >= GrandmaCost) {
		Grandmas++;
		cookieClicks -= GrandmaCost;
		GrandmaCost += Math.round(GrandmaCost * 0.15);
			}else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Grandma. A Grandma currently costs " + GrandmaCost + " which is " + (GrandmaCost - cookieClicks) + " more cookies than you have.");
					}
				}	
			 //Purchase Farm and remove Cookie Cost.
function getFarm() {
	if (cookieClicks >= FarmCost) {
		Farms++;
		cookieClicks -= FarmCost;
		FarmCost += Math.round(FarmCost * 0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Farm. A Farm currently costs " + FarmCost + " which is " + (FarmCost - cookieClicks) + " more cookies than you have.");
					}
				}	
			 //Purchase Factory and remove Cookie Cost.
function getFactory() {
	if (cookieClicks >= FactoryCost) {
		Factories++;
		cookieClicks -= FactoryCost;
		FactoryCost += Math.round(FactoryCost * 0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Factory. A Factory currently costs " + FactoryCost + " which is " + (FactoryCost - cookieClicks) + " more cookies than you have.");
				}
			}
 			//Purchase Mine and remove COokie Cost.
function getMine() {
	if (cookieClicks >= MineCost) {
		Mines++;
		cookieClicks -= MineCost;
		MineCost += Math.round(MineCost * 0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Mine. A Mine currently costs " + MineCost + " which is " + (MineCost - cookieClicks) + " more cookies than you have.");
				}
			}
 			//Purchase Mine and remove Cookie Cost.
function getShipment() {
	if (cookieClicks >= ShipmentCost) {
		Shipments++;
		cookieClicks -= ShipmentCost;
		ShipmentCost += Math.round(ShipmentCost * 0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Shipment. A Shipment currently costs " + ShipmentCost + " which is " + (ShipmentCost - cookieClicks) + " more cookies than you have.");
				}
			}
			//Purchase Lab and remove Cookie Cost
function getLab() {
	if (cookieClicks >= LabCost) {
		Labs++;
		cookieClicks -= LabCost;
		LabCost += Math.round(LabCost * 0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Lab. A Lab currently costs " + LabCost + " which is " + (LabCost - cookieClicks) + " more cookies than you have.");
				}
			}
function getPortal() {
	if (cookieClicks >= PortalCost) {
		Portals++;
		cookieClicks -= PortalCost;
		PortalCost += Math.round(PortalCost * 0.15);
			} else {
				alert("Oh No! It appears you do not have enough cookies to purchase a Portal. A Portal currently costs " + PortalCost + " which is " + (PortalCost - cookieClicks) + " more cookies than you have.");
				}
			}
			//Rests Game
			function resetConfirm(){
				var answer = confirm("Are you sure you wish to reset?  ALL progress will be lost FOREVER.");
				if(answer){
					 BakeryName = "Mike";
					 cookieClicks = 0;
					 clickValue = 0;
					 AutoClickers = 0;
					 AutoClickerCost = 15;
					 Grandmas = 0;
					 GrandmaCost = 100;
					 Farms = 0;
					 FarmCost = 500;
					 Factories = 0;
					 FactoryCost = 3000;
					 Mines = 0;
					 MineCost = 10000;
					 Shipments = 0;
					 ShipmentCost = 40000;
					 Labs = 0;
					 LabCost = 200000;
					 Portals = 0;
					 PortalCost = 16666660;
				}
			}
			//Processes cookie click and adds it to total.
       function cookieClicked(){
		   cookieClicks++;
        var img = $('#cookieImage');
        var height = img.height() - 5;
        var ratio = height / img.height();
        var width = img.width() * ratio;
        img.css("height", height);
        img.css("width", width);
    }
				//Main Game loop updating Cookie Totals from AUTOCLICKER ONLY!
			var AutoClickTimer = setInterval(function() {
			AutoClickCookie();
			}, 10000);
				function AutoClickCookie() {
				cookieClicks = cookieClicks+parseInt((AutoClickers*1),10);
				}
				//Main Game loop updating Cookie Totals for GRANDMAS ONLY!  Note: I seperated to keep cookieClicks as whole number.
			var GrandmaTime = setInterval(function(){GrandmaCookie();}, 2000);
				function GrandmaCookie(){
					cookieClicks += (Grandmas*1);
				}
 				//Main Game loop update Cookie Totals from ALL OTHER STRUCUTERS.
			var AllStructureTimer = setInterval(function() {
			StructureCookie();
			}, 1000);
				function StructureCookie() {
				cookieClicks += (Farms * 4);
				cookieClicks += (Factories * 10);
				cookieClicks += (Mines * 40);
				cookieClicks += (Shipments * 100);
				cookieClicks += (Labs * 400);
				cookieClicks += (Portals * 1666);
				}	
                //Side Loop updating button costs and CPS
            var CookieClickTimer = setInterval(function() {
                updateCookie();
            }, 100);

            function updateCookie() {
                //Calculate CPS
var CPS =(AutoClickers*0.1) + (Grandmas*0.5) + (Farms*4) + (Factories*10) + (Mines*40) + (Shipments*100) + (Labs*400) + (Portals*1666);
var cookieClicksComma;
var CPSComma;
var AutoClickerCostComma;
  function commaSeparateNumberClicks(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    cookieClicksComma = val;
  }
  function commaSeparateNumberCPS(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    CPSComma = val;
  }
  function commaSeparateNumberAutoClickerCostComma(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    AutoClickerCostComma = val;
  }

  commaSeparateNumberClicks(cookieClicks);
  commaSeparateNumberCPS(CPS);
  commaSeparateNumberAutoClickerCostComma(AutoClickerCost);
				document.getElementById("BakeryName").innerHTML = BakeryName + "'s Bakery!";
                document.getElementById("CookieAmount").innerHTML = cookieClicksComma + " cookies.";
				document.getElementById("CookiePerSecond").innerHTML = CPSComma + " CPS.";
				document.getElementById("AutoClickCookieCost").innerHTML = AutoClickerCostComma;
				document.getElementById("AutoClickTotal").innerHTML = AutoClickers;
				document.getElementById("GrandmaCookieCost").innerHTML = GrandmaCost;
				document.getElementById("GrandmaTotal").innerHTML = Grandmas;
				document.getElementById("FarmCookieCost").innerHTML = FarmCost;
				document.getElementById("FarmTotal").innerHTML = Farms;
				document.getElementById("FactoryCookieCost").innerHTML = FactoryCost;
				document.getElementById("FactoryTotal").innerHTML = Factories;
				document.getElementById("MineCookieCost").innerHTML = MineCost;
				document.getElementById("MineTotal").innerHTML = Mines;
				document.getElementById("ShipmentCookieCost").innerHTML = ShipmentCost;
				document.getElementById("ShipmentTotal").innerHTML = Shipments;
				document.getElementById("LabCookieCost").innerHTML = LabCost;
				document.getElementById("LabTotal").innerHTML = Labs;
				document.getElementById("PortalCookieCost").innerHTML = PortalCost;
				document.getElementById("PortalTotal").innerHTML = Portals;
            }
        var saveGameLoop = setInterval(function(){saveGame();},100);
            function saveGame(){
				localStorage.BakeryName = BakeryName;
                localStorage.cookieClicks = cookieClicks;
				localStorage.clickValue = clickValue;
				localStorage.AutoClickers = AutoClickers;
				localStorage.AutoClickerCost = AutoClickerCost;
				localStorage.Grandmas = Grandmas;
				localStorage.GrandmaCost = GrandmaCost;
				localStorage.Farms = Farms;
				localStorage.FarmCost = FarmCost;
				localStorage.Factories = Factories;
				localStorage.FactoryCost = FactoryCost;
				localStorage.Mines = Mines;
				localStorage.MineCost = MineCost;
				localStorage.Shipments = Shipments;
				localStorage.ShipmentCost = ShipmentCost;
				localStorage.Labs = Labs;
				localStorage.LabCost = LabCost;
				localStorage.Portals = Portals;
				localStorage.PortalCost = PortalCost;
            }
