/*
Main Javascript
by Rhen Gonzaga
*/

window.onload = data;

//Page Links
var loc = "assets/res/lyrics/";
var type = ".html";
var aaaa = "mobile-orchestra";
var aaab = "";
var aaac = "";
var aaad = "";

//Jquery on Ready
$(document).ready(function() {

 //Fixed Tab Page
 $("#activeTab").click();

     //All Lyrics Page Links
     $("#lyricsOneOne").click(function () {
       location.href = loc + aaaa + type;
     });
     $("#lyricsOneTwo").click(function () {
       location.href = loc + aaab + type;
     });
     $("#lyricsOneThree").click(function () {
       location.href = loc + aaac + type;
     });
     $("#lyricsOneFour").click(function () {
       location.href = loc + aaad + type;
     });
     $("#lyricsOneFive").click(function () {
       location.href = loc + aaae + type;
     });

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
$("#all").fadeIn();
}

function albumTab() {
$("#all").hide();
$("#artist").hide();
$("#album").show();
}

function artistTab() {
$("#all").hide();
$("#album").hide();
$("#artist").fadeIn();
}

//Lyrics Setting
function lyricsCenter() {
$("#lyrics-left").hide();
$("#lyrics-center").show();
}

function lyricsLeft() {
$("#lyrics-center").hide();
$("#lyrics-left").show();
}

//Application Data
function data() {
	var version = "Alpha";
	document.getElementById("version").innerHTML=version;
}

//Copyright Updater
  today=new Date();
  year=today.getFullYear();
