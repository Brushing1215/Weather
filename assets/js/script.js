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
}<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>


function init (){
     previousSearch = JSON.parse(localStorage.getItem("weather")) || []
    if(previousSearch.length){
        getWeather(previousSearch[previousSearch.length -1])
    } 
}





getWeather('charlotte')
init()