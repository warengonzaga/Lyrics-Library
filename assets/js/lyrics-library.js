//Main Jquery
//by Rhen Gonzaga

window.onload = data;

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
$("#album").fadeOut("fast");
$("#artist").fadeOut("fast");
$("#all").fadeIn("fast");
}

function albumTab() {
$("#all").fadeOut("fast");
$("#artist").fadeOut("fast");
$("#album").fadeIn("fast");
}

function artistTab() {
$("#all").fadeOut("fast");
$("#album").fadeOut("fast");
$("#artist").fadeIn("fast");
}

function data() {
	var version = "Alpha";
	document.getElementById("version").innerHTML=version;
}

function removeAni() {
	$("#anim").removeClass("animated");
}

