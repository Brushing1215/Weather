var previousSearch
function getWeather(city){
    var apiKey = "287e13db9582a0c0d06255b940b40b47"
    $.get('https:///api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+apiKey,function(current){
        $.get('https://api.openweathermap.org/data/2.5/uvi?appid='+apiKey+'&lat='+current.coord.lat+'&lon='+current.coord.lon, function(uv){
            $.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid='+apiKey, function(fiveDay){
                console.log(current, '<======= current weather')
                console.log(uv, '<======= UV')
                console.log(fiveDay, '<======= five day forecast')
            })
        })

    })
}
function init (){
     previousSearch = JSON.parse(localStorage.getItem("weather")) || []
    if(previousSearch.length){
        getWeather(previousSearch[previousSearch.length -1])
    } 
}





getWeather('charlotte')
init()