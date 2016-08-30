/*
Main Javascript
by Rhen Gonzaga
*/

window.onload = init;

//Page Links
var loc = "assets/res/lyrics/",
    type = ".html",
    aaaa = "lyrics-6601";

//Jquery on Ready
$(document).ready(function() {
 
var response = "",
    content="",
    output="",
    x=0;

  $.getJSON('data/lyrics-library.json', function(response){
  
  //Console Messages
  console.log(response);
  console.log("Working Data!");
  
  $(response.allContent).each(function(index,value) {
                
  content=" id='lyricsOneOne'>";
  output+="<li class='grey-l3 animated bounceInLeft one-one ui-li-static ui-body-inherit'";
  output+=content;
  
				switch(value.rating) {
						case "1":
						output+="<div class='song-title'><img src='assets/res/ratings/rating-one.png' class='ratings'>" + value.song_title + "</div><p class='song-album'>" + value.song_artist + "</p><p class='song-artist'>" + value.song_album + "</p></li>";
						break;
						case "2":
						output+="<div class='song-title'><img src='assets/res/ratings/rating-two.png' class='ratings'>" + value.song_title + "</div><p class='song-album'>" + value.song_artist + "</p><p class='song-artist'>" + value.song_album + "</p></li>";
						break;
						case "3":
						output+="<div class='song-title'><img src='assets/res/ratings/rating-three.png' class='ratings'>" + value.song_title + "</div><p class='song-album'>" + value.song_artist + "</p><p class='song-artist'>" + value.song_album + "</p></li>";
						break;
						case "4":
						output+="<div class='song-title'><img src='assets/res/ratings/rating-four.png' class='ratings'>" + value.song_title + "</div><p class='song-album'>" + value.song_artist + "</p><p class='song-artist'>" + value.song_album + "</p></li>";
						break;
						case "5":
						output+="<div class='song-title'><img src='assets/res/ratings/rating-five.png' class='ratings'>" + value.song_title + "</div><p class='song-album'>" + value.song_artist + "</p><p class='song-artist'>" + value.song_album + "</p></li>";
						break;
						default:
				break;
				}
				            
      x++;
    });
         
    $('#all ul').html(output);
    
  });

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
 
 $(".footer-name").click(function() {
  location.href="http://wareneutrondevelopers.com";     
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
$("#lyrics-body-left").hide();
$("#lyrics-body-right").hide();
$("#lyrics-body-center").show();
}

function lyricsLeft() {
$("#lyrics-body-center").hide();
$("#lyrics-body-right").hide();
$("#lyrics-body-left").show();
}

function lyricsRight() {
$("#lyrics-body-center").hide();
$("#lyrics-body-left").hide();
$("#lyrics-body-right").show();
}

function initSettings() {
$("#lyricsLight").click();
}

function lyricsDark() {
document.getElementById("lyrics-theme-center").style.color="#eee";
document.getElementById("lyrics-theme-center").style.backgroundColor="#444";
document.getElementById("lyrics-theme-left").style.color="#eee";
document.getElementById("lyrics-theme-left").style.backgroundColor="#444";
document.getElementById("lyrics-theme-right").style.color="#eee";
document.getElementById("lyrics-theme-right").style.backgroundColor="#444";

//Hover effect in the button
document.getElementById("btn-theme-dark").style.backgroundColor="#009688";
document.getElementById("btn-theme-dark").style.borderColor="#009688";
document.getElementById("btn-theme-dark").style.color="#eee";

//Reset effect in other button
document.getElementById("btn-theme-light").style.backgroundColor="#eee";
document.getElementById("btn-theme-light").style.borderColor="#eee";
document.getElementById("btn-theme-light").style.color="#009688";
}

function lyricsLight() {
document.getElementById("lyrics-theme-center").style.color="#333333";
document.getElementById("lyrics-theme-center").style.backgroundColor="#eeeeee";
document.getElementById("lyrics-theme-left").style.color="#333333";
document.getElementById("lyrics-theme-left").style.backgroundColor="#eeeeee";
document.getElementById("lyrics-theme-right").style.color="#333333";
document.getElementById("lyrics-theme-right").style.backgroundColor="#eeeeee";

//Hover effect in the button
document.getElementById("btn-theme-light").style.backgroundColor="#009688";
document.getElementById("btn-theme-light").style.borderColor="#009688";
document.getElementById("btn-theme-light").style.color="#eee";

//Reset effect in other button
document.getElementById("btn-theme-dark").style.backgroundColor="#eee";
document.getElementById("btn-theme-dark").style.borderColor="#eee";
document.getElementById("btn-theme-dark").style.color="#009688";
}

//Application Data
function init() {
	var appname = "Lyrics Library",
	    version = "v.0.1"; //v.0.1.0:01
	    
	document.getElementById("version").innerHTML=version;
	document.getElementById("appname-v").innerHTML=appname+" | "+version;
}

//Copyright Updater
  today=new Date();
  year=today.getFullYear();
