$(document).ready(function(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e21a4fb281bc4a34825f3b20a2b56734";

    $.ajax({
        url:url,
        method:"GET",
        dataType:"Json",

        beforeSend: function(){
            $()
        }
    })
})