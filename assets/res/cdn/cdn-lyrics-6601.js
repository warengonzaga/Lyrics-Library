$(document).ready(function() {
     
var ocmo01 = "https://res.cloudinary.com/warengonzagastorage/video/upload/v1466766371/owlcity-mo-01.mp3";
var audioLibrary = document.createElement('audio');
    audioLibrary.setAttribute('src', ocmo01);
    audioLibrary.addEventListener('ended', function() {
              this.currentTime = 0;
              $('.play').show();
              $('.pause').hide();
            }, false);
            
     $('.pause').hide();
     $('.repeat').hide();
     $.get();
     
     /** Play Function **/
     $('.play').click(function() {
            audioLibrary.play();
            $('.play').hide();
            $('.pause').show();
            $('.repeat').show();
        });
    /** Pause Function **/
    $('.pause').click(function() {
            audioLibrary.pause();
            $('.play').show();
            $('.pause').hide();
        });
    /** Repeat Function **/
    $('.repeat').click(function() {
            audioLibrary.pause();
            audioLibrary.currentTime = 0;
            $('.play').hide();
            $('.pause').show();
            audioLibrary.play();
        });
});

$(document).on('pagebeforeshow', '#lyrics-page', function(){       
    $(document).on('click', '.play', function(){       
        var status = navigator.onLine ? 'online' : 'offline';
        if (status=='offline') {
            alert("Opps! Make sure you're connected to internet!");
            return false;
        }
    });
});