/*
Main Javascript
By Waren Gonzaga
*/

window.onload = data;

//Jquery on Ready
$(document).ready(function() {
 
 //Fixed Tab Page
 $("#activeTab").click();
 
});

//Touch Events
$(document).on("pagecreate","#pageEvent",function(){

 //Start Up PopUp
 //$("#artist-popup").popup("open");
 
 //Open Panel in Start
 //$("#sidemenu").panel("open");

 //Swipe to Open Panel
 $("#pageEvent").on("swiperight",function(){
  $("#sidemenu").panel("open");
 });
 
});

//Tabbed Method
function allTab() {
$("#album").hide();
$("#artist").hide();
$("#all").show();
}

function albumTab() {
$("#all").hide();
$("#artist").hide();
$("#album").show();
}

function artistTab() {
$("#all").hide();
$("#album").hide();
$("#artist").show();
}

function data() {
	var version = "Beta";
	document.getElementById("version").innerHTML=version;
}
