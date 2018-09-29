/**
 * Function which gets called when dropdownlist value changed.
 * @param {DOMElement Object} selectDropObj dropdownlist object on which user change the value.
 */

function dropChange(selectDropObj){	
	getDataFromServer(selectDropObj);
}
/**
 * Function which removes the items from list whenever new items need to inserted at the same list.
 * @param {DOMElement Object} dropToRemove object from which all values are required to remove.
 */

function removeOptions(dropToRemove){
	for (var c = document.getElementById(dropToRemove).options.length; c >= 1 ; c--)
	{
		document.getElementById(dropToRemove).remove(c);
	}
}
/**
 * Function which create the url as per the different parameters passed.
 * open the url and send it to specified server.
 * @param {XMLHttp object} xmlhttp object to open and send/receive request/response.
 * @param {String} requestFor request identification value.
 */
function createUrl(xmlhttp,requestFor){
	var selectedCountry = document.getElementById("countrySelector").options[document.getElementById("countrySelector").selectedIndex].value;
	var selectedState = document.getElementById("stateSelector").options[document.getElementById("stateSelector").selectedIndex].value;		
	var serverUrl = "data.php?requestFor="+requestFor+"&country="+selectedCountry+"&state="+selectedState;
	
	if(requestFor == "getState" && selectedCountry == '0') {//validating required parameters for request/retrive desired result from server
		alert('please select country');
	} else if (requestFor == "getCity" && selectedState == '0') {
		alert('please select state');
	} else {
		xmlhttp.open("GET",serverUrl,true);
		xmlhttp.send();
	}
}
/**
 * Function which linsert the items to perticuler list whenever new items need to inserted as per the server response.
 * @param {DOMElement Object} dropForInsertion dropdownlist object to which values are required to insert.
 * @param {Array Object} afterRes response object.
 */
function insertOptions(dropForInsertion,afterRes)
{
	var option;
	for (var i=0;i<afterRes.length;i++) 
	{
		option = new Option(afterRes[i],afterRes[i]);
		dropForInsertion.options[i+1] = option;
	}
}
/**
 * Function which retrive the required data from server.
 * create the object of xmlhttp.
 * call another functions to do some prerequired activities.
 * dynamically create the dropdownitems.
 * @param {DOMElement Object} selectDropObj dropdownlist object on which user change the value
 */
function getDataFromServer(selectDropObj){
	var xmlhttp;
	if (window.XMLHttpRequest) { //if it returns true then the current browser is IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();// code for IE7+, Firefox, Chrome, Opera, Safari
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");// code for IE6, IE5
	}
	
	xmlhttp.onreadystatechange = function()
	{
		if ( xmlhttp.readyState == 4 && xmlhttp.status == 200) //checking for response code
		{
			//var afterRes = xmlhttp.responseText.split(',');
			var afterRes = eval('('+xmlhttp.responseText+')') || JSON.parse(xmlhttp.responseText);
			
			// Code duplication
			if(selectDropObj.id == "countrySelector") { //identifying dropdown to update as per current dropdown selection
				insertOptions(stateSelector,afterRes);
			} else if(selectDropObj.id == "stateSelector") {
				insertOptions(citySelector,afterRes);
			} else {
				// comments why this conditions are neccessary
				insertOptions(countrySelector,afterRes);
			}
		}
	}
	if(selectDropObj) {
		if(selectDropObj.id == "countrySelector") {//identifying dropdown to remove options as per current dropdown selection
			removeOptions("stateSelector");
			removeOptions("citySelector");
			createUrl(xmlhttp,"getState");
		} else if(selectDropObj.id == "stateSelector") {
			removeOptions("citySelector");
			createUrl(xmlhttp,"getCity");
		}
	} else {
		removeOptions("countrySelector");
		createUrl(xmlhttp,"getCountry");
	}
}
/**
 * Function which called whenevr page loading gets completed.
 * function call another function to get country value from server.
 * @param {String} Empty String.
 */
function afterLoad()
{
	// add event after pageloading,Check that which element is clicked.
	addEvent(document.getElementById("buttonDisplay"), "click", function(e) {
	// Firefox and IE access the target element different. e.target, and event.srcElement, respectively.  
		var target =  window.attachEvent ? window.event.srcElement : e.target;
		if ( target.id == "buttonDisplay" ) {
			changeContent();
		}
	});
	addEvent(document.getElementById("countrySelector"), "change", function(e) {
		var target =  window.attachEvent ? window.event.srcElement : e.target;
		if ( target.id == "countrySelector" ) {
			dropChange(target);
		}
	});
	addEvent(document.getElementById("stateSelector"), "change", function(e) {
		var target =  window.attachEvent ? window.event.srcElement : e.target;
		if ( target.id == "stateSelector" ) {
			dropChange(target);
		}
	});
	
	getDataFromServer("");
	// Truthy - true values - 1, 1to 100, string non empty object defined if()
	// Falsy - false values - 0, string empty, object undefined if false
	
}
/**
 * Function which display values as per the selection made by the user.
 */
function changeContent()
{
	var countryDisplayElement = document.getElementById("countrySelector");
	var stateDisplayElement = document.getElementById("stateSelector");
	var cityDisplayElement = document.getElementById("citySelector");
	
	var countryDisplayValue = countryDisplayElement.options[countryDisplayElement.selectedIndex].value;
	var stateDisplayValue = stateDisplayElement.options[stateDisplayElement.selectedIndex].value;
	var cityDisplayValue = cityDisplayElement.options[cityDisplayElement.selectedIndex].value;
	
	if(countryDisplayValue == 0){//validating that all the dropdown currently having not-null value for display
		alert('plz select country values');
	} else if(stateDisplayValue == 0) {
		alert('plz select state values');
	} else if(cityDisplayValue == 0) {
		alert('plz select city values');
	} else {
		if ( window.attachEvent ) {
			document.getElementById("displayCountry").innerText = countryDisplayValue;
			document.getElementById("displayState").innerText = stateDisplayValue;
			document.getElementById("displayCity").innerText = cityDisplayValue;
		} else {
			document.getElementById("displayCountry").textContent = countryDisplayValue;
			document.getElementById("displayState").textContent = stateDisplayValue;
			document.getElementById("displayCity").textContent = cityDisplayValue;
		}
	}
}
/**
 * Function which add event to the perticuler element.
 * @param {DOMElement Object} obj object with which event would attach.
 * @param {String} evt type of event to attach.
 * @param {function} fn function which called when this perticuler event occurs.
 * @param {boolean} capture set ti false prevent capture procedure.
 */ 
function addEvent(obj, evt, fn, capture) {
	if ( window.attachEvent ) {
		obj.attachEvent("on" + evt, fn);
	}
	else {
		if ( !capture ) capture = false; // capture
		obj.addEventListener(evt, fn, capture)
	}
}
window.onload = afterLoad;

/*
for understanding the function which handling multiple function as well as multiple type of events by single CALLBACK function

function callback(obj, evt) {
	cbdata = EventHash[obj].name ==a click
		cb[0].callbackFunction.apply(cb[0].scope, arguments);
}

EventHash = {
	element1 : {
		name : "click"
		callbacks :  {
			0 : {
					callbackFunction : callback1,
					scope : scope1
				},
			1 : {
					callbackFunction : callback1,
					scope : scope1
				},
		}
	},
	element2 : "",

}

*/