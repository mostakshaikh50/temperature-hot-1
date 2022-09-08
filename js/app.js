const API_KEY = `2dd4f2996bc9c491f4693bf78ce27335`;

const loadTemparature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data =>{
    console.log(data);
    // const temperature = document.getElementById('temperature');
    // const cityName = document.getElementById('cityName');
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
    setInnerTextById('cityName', data.name);
    

}

const setInnerTextById =(id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    
    loadTemparature(city);
})

loadTemparature('london');