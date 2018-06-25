$(document).ready(function() {
    // Use jQuery to get a reference to `load-songs`
    // Use jQuery to get a reference to `song-list`
    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system. Chain a `.then()` method to the ajax call 
        */

    $("#load-songs").click(() => {
        $.ajax("songs.json")
        .then(responseSongs => {
            console.log(responseSongs)
            responseSongs.songs
            for (let i = 0; i < responseSongs.songs.length; i++) {
                $("#song-list")
                $("<h1>").text(responseSongs.songs[i].title)
                .attr("class", "song__title")
                .appendTo($("#song-list"));

                $("<section>")
                .text(`Performed by ${responseSongs.songs[i].artist} on the album ${responseSongs.songs[i].album}`)
                .attr("class", "song__description")
                .appendTo($("#song-list"));
            }
        })
      })

       
       /* and when it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})