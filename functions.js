$(document).ready(function(){
    $("#search-btn").on('click', getSearchData);
    $("#reset-btn").on('click', function(){
        // alert("works");
        document.location.reload();
    });
});

function getSearchData() {
        $('#inner').html("");
        var searchInput = $("#search-text").val();
        if(searchInput === "") {
            alert("Enter a value");
        } else {
            var xhr = $.get("http://api.giphy.com/v1/gifs/search?q='" + searchInput + "'&api_key=6f9RSS6dXSF0l0PYj8WoSgsZBGQeBhDH&limit=8");
                // var xhr = $.get("`https://api.giphy.com/v1/gifs/search?api_key=6f9RSS6dXSF0l0PYj8WoSgsZBGQeBhDH&limit=1&q=");

                xhr.done(function(response) { 
                var jiffs = response.data;
                for(var i in jiffs){
                    $('#inner').append("<img style='width: 200px; height:180px; margin:10px;' src='"+jiffs[i].images.original.url+"' class='gif'/>");
                }
            });
        }
}
