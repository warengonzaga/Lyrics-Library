//Main Jquery
//by Rhen Gonzaga

$(document).ready(function() {

 //Gathering Data
 $("#version").load("main/data/appdata.asp #version");
 //$("#all").load("main/data/contentdata.asp #allData");
 //$("#album").load("main/data/contentdata.asp #albumData");
 
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
$("#all").fadeIn("slow");
}

function albumTab() {
$("#all").hide();
$("#artist").hide();
$("#album").fadeIn("slow");
}

function artistTab() {
$("#all").hide();
$("#album").hide();
$("#artist").fadeIn("slow");
}