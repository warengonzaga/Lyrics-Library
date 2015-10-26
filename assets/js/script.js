/*====================================
Main Script of Lyrics Library
by Waren Gonzaga
==========[WARNING]===================
Keepout! Authorized Developers only!
Please do not modify the codes below!
======================================
*/

$(document).ready(function() {
 
 //Fixed Tab Page
 $("#activeTab").click();
 
});

//Touch Events
$(document).on("pagecreate","#nav-all","#nav-albums",function(){

 //Start Up PopUp
 //$("#artist-popup").popup("open");
 
 //Open Panel in Start
 //$("#sidemenu").panel("open");

 //Swipe to Open Panel
 $("#nav-all").on("swiperight",function(){
  $("#sidemenu").panel("open");
 });
 $("#nav-albums").on("swiperight",function(){
  $("#sidemenu").panel("open");
 });
 
});

//Tabbed Method
function allTab() {
$("#album").hide();
$("#artist").hide();
$("#all").fadeIn("fast");
}

function albumTab() {
$("#all").hide();
$("#artist").hide();
$("#album").fadeIn("fast");
}

function artistTab() {
$("#all").hide();
$("#album").hide();
$("#artist").fadeIn("fast");
}

//Notice Developer
function noticeDev() {
	console.log("Waren GOnzaga");
}