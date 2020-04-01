$(document).ready(function () {
    var API_KEY = "AIzaSyCc8Ek4f-sZ-JnOUWGz8GVI8yr30h_JvEQ"

    var video = ''

    

    $("#form").submit(function (event) {
        event.preventDefault()
        //alert("form is subitted")

        var search = $("#search").val()

        videoSearch(API_KEY,search,10)
    })

    function videoSearch(key,search,maxResults) {

        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key +"&type=video&part=snippet&maxResults="+ maxResults +"&q="+ search,function(data){
            console.log(data)

            data.items.forEach(item => {

                video = `
                
                <iframe width="320" height="180" 
                src="http://www.youtube.com/embed/${item.id.videoId}?frameborder=0 allowfullscreen">
                </iframe>
                
                `
                $("#videos").append(video)
            });
        })
        
    }

})