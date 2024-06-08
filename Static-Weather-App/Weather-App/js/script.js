
let citiesData = {
    Tehran: {City: 'Tehran',Temp:12,Weather: 'Sunny',Humidity: 10, Wind: 5},
    Mashhad: {City: 'Mashhad', Temp:10,Weather: 'Rainy', Humidity: 20, Wind: 13},
    Esfehan: {City: 'Esfehan', Temp:8,Weather: 'Snowy', Humidity: 30, Wind: 32},
    Shiraz: {City: 'Shiraz', Temp:6,Weather: 'Dirty', Humidity: 50, Wind: 12},
    // 
    Tabriz: {City: 'Tabriz', Temp:6, Weather: 'Snowy', Humidity: 45, Wind: 14},
    Ardabil: {City: 'Ardabil', Temp:12, Weather: 'Rainy', Humidity: 32, Wind: 21},
    Gilan: {City: 'Gilan', Temp:8, Weather: 'Snowy', Humidity: 52, Wind: 30},
    Zanjan: {City: 'Zanjan', Temp:7, Weather: 'Sunny', Humidity: 44, Wind: 11},
    Kurdestan: {City: 'Kurdestan', Temp:5, Weather: 'Dirty', Humidity: 29, Wind: 9},
    Qazvin: {City: 'Qazvin', Temp:11, Weather: 'Rainy', Humidity: 38, Wind: 16},
    Kermanshah: {City: 'Kermanshah', Temp:13, Weather: 'Snowy', Humidity: 45, Wind: 15},
    Ilam: {City: 'Ilam', Temp:18, Weather: 'Sunny', Humidity: 37, Wind: 22},
    Hamedan: {City: 'Hamedan', Temp:16, Weather: 'Rainy', Humidity: 45, Wind: 24},
    Qom: {City: 'Qom', Temp:17, Weather: 'Snowy', Humidity: 32, Wind: 6},
    Alborz: {City: 'Alborz', Temp:20, Weather: 'Rainy', Humidity: 35, Wind: 13},
    Semnan: {City: 'Semnan', Temp:19, Weather: 'Dirty', Humidity: 41, Wind: 18},
    Khoozestan: {City: 'Khoozestan', Temp:9, Weather: 'Dirty', Humidity: 47, Wind: 17},
    Yazd: {City: 'Yazd', Temp:8, Weather: 'Sunny', Humidity: 49, Wind: 19},
    Booshehr: {City: 'Booshehr', Temp:12 ,Weather: 'Rainy', Humidity: 24, Wind: 23},
    Sistan: {City: 'Sistan', Temp:10, Weather: 'Snowy', Humidity: 28, Wind: 19},
}


let SearchBtn = document.querySelector('.button__search'); //click event btn
let SearchBar = document.querySelector('.search-bar');// input
let afterLoading = document.querySelector(".loading"); // loading box details


SearchBtn.addEventListener('click',function(){
    if(SearchBar.value === 'Tehran' || SearchBar.value === 'Mashhad' || SearchBar.value === 'Esfehan' || SearchBar.value === 'Shiraz' || SearchBar.value === 'Tabriz' || SearchBar.value === 'Ardabil' || SearchBar.value === 'Gilan' || SearchBar.value === 'Zanjan' || SearchBar.value === 'Kurdestan'  || SearchBar.value === 'Qazvin'  || SearchBar.value === 'Kermanshah'  || SearchBar.value === 'Ilam'  || SearchBar.value === 'Hamedan'  || SearchBar.value === 'Qom' || SearchBar.value === 'Alborz' || SearchBar.value === 'Semnan' || SearchBar.value === 'Khoozestan' || SearchBar.value === 'Yazd' || SearchBar.value === 'Booshehr' || SearchBar.value === 'Sistan') {
        document.querySelector('.weather').classList.remove('loading');

         let city = document.querySelector('.city');
         let temp = document.querySelector('.temp');
         let humidity = document.querySelector('.humidity');
         let wind = document.querySelector('.wind');

         city.innerHTML = 'Weather in the ' + citiesData[SearchBar.value].City;
         temp.innerHTML = citiesData[SearchBar.value].Temp + '°C';
         humidity.innerHTML = citiesData[SearchBar.value].Humidity;
         wind.innerHTML = citiesData[SearchBar.value].Wind;

    } else {
        afterLoading.style.display = 'none';
    }
})

// create random background color for body when reload the page
let colorsArray = ['brown','red','blue','green','yellow'];
let randomColor;

if (location.reload) {
    randomColor = Math.floor(Math.random() * colorsArray.length);
    document.body.style.backgroundColor = colorsArray[randomColor];

}



