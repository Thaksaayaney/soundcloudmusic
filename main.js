SC.initialize({
    client_id: '3f7407c6252e6932c8ef6ea85c55e9c7'
});

$(document).ready(function () {
    SC.stream('/tracks/73435580', function (sound) {
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

