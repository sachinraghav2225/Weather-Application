let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let API_key = "f836ea173609762f5747658257f72a8c";

const data = async function(search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    if (jsonData.cod == 400) {
        alert("Please enter Location");
        image.src = "error1.png";
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";

    }
    if (jsonData.cod == 404) {
        alert("Please enter  right Location");
        image.src = "error2.png";
        city.innerHTML = search;
        temp.innerHTML = "";
        type.innerHTML = "";

    }


    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;

    if (type.innerHTML == "Clouds") {
        image.src = "clouds.png";
    } else if (type.innerHTML == "Clear") {
        image.src = "clears.png";
    } else if (type.innerHTML == "Rain") {
        image.src = "rain.png";
    } else if (type.innerHTML == "Snow") {
        image.src = "snow.png";
    } else if (type.innerHTML == "Haze") {
        image.src = "haze.png";
    } else if (type.innerHTML == "strom") {
        image.src = "strom.png";
    } else {
        image.src = "comman.png";
    }
    input.value = "";
};

function myFun() {
    search = input.value;
    data(search);
}