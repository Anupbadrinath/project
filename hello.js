let cityInput = document.getElementById('city_input'),
searchBtn = document.getElementById('searchbtn'),
api_key ='2380eb22766e19df6a8790f5e9043d7f';
currentWeatherCard=document.querySelector('.weather-left, .card')[0];

function getWeatherDetails(name,lat,lon,country,state){
    let FORECAST_API_URL='https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid={api_key}',
     WEATHER_API_URL='https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid={api_key}',
      days =[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Tjhursday',
        'Friday',
        'Saturday',
      ],
      months =[
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
      ];
      
      fetch(WEATHER_API_URL).then(res=>res.json()).then(data=> {
        let date= new Date();
        currentWeatherCard.innerHTML='<div class="current-weather">
                            <div class="details">
                                <p>Now</p>
                                <h2>${{data.main.temp -273.15).toFixed(2)&deg;C</h2>
                                <p>${data.weather[0].description}</p>
                            </div>
                            <div class="weather-icon">
                                <img src="https://openweathermap.org/img/wn/${days{date.weather[0].icon}@2x.png" alt="">
                                
                            </div>
                        </div>
                         <hr>
                         <div class="card-footer">
                             <p><i class="fa fa-calendar"></i> ${days[date.getDay()]},${date.getDate()},${months[date.getMonth()]},${years[date.getFullYear]}</p>
                             <br>
                             <p><i class="fa fa-map-marker"></i>${name},${country}</p>
                         </div>
                                
                         ';
      }).catch(()=>{
        alert('failed to fetch current weather');
        

      });
    }
    








function getCityCoordinates(){
    let cityname=cityInput.ValueMax.trim();
    cityInput.value='';
    if(!cityName) return;
    let GEOCODING_API_URL='http://api.openweathermap.org/geo/1.0/direct?q=${city name}&limit={limit}&appid=${API key}';
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        let{name,lat,lon,country,state}=data[0];
        getWeatherDetails(name,lat,lon,country,state);
    }).catch(() => {
        alert('Failed to fetch coordinates of ${cityName}');
    })


    }



searchBtn.addEventListener('click',getCityCoordinates);

