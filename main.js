SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {
    SC.stream('/tracks/967114759', function (sound) {
        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });
        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
}); 

/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/967114759&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/indianpop-00092901" title="Da Ua" target="_blank" style="color: #cccccc; text-decoration: none;">Da Ua</a> · <a href="https://soundcloud.com/indianpop-00092901/master-the-blaster-bjorn-surrao-official-mp3" title="Master the Blaster - Bjorn Surrao (Official Mp3)" target="_blank" style="color: #cccccc; text-decoration: none;">Master the Blaster - Bjorn Surrao (Official Mp3)</a></div> */}