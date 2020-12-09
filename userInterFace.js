import data from './data.js'

class Ui {
    

    static createHtmlCode(weatherObj){
        const kelvin = weatherObj.list[0].main.temp;
        const celsius = kelvin - 273.15;
        const farenheit = (celsius * 1,8) + 32; 
        const htmlCode = `
            <header>
                <h2>${weatherObj.city.name}</h2>
                <form class="form">
                    <input type="text" class="input">
                </form>
            </header>
            <div class="hero">
                <div class="top-hero">
                    <div class="top-left">
                        <img src="http://openweathermap.org/img/wn/${weatherObj.list[0].weather[0].icon}@2x.png" alt="" height="150px">
                        <h3 class="currentDescription">${weatherObj.list[0].weather[0].description}</h3>
                    </div>
                    <div class="top-right">
                        <div class="upper-right">
                            <h3 class="temp">${Math.round(celsius)}°</h3>
                        </div>
                        <div class="bottom-right">
                        <div class="wind">
                            <i class="fas fa-wind"></i>
                            <p class="wind">${weatherObj.list[0].wind.speed} m/s</p>
                        </div>
                        <div class="humidity">
                            <i class="fas fa-tint"></i>
                            <p class="humidity">${weatherObj.list[0].main.humidity} %</p>
                        </div>
                        <div class="rain">
                            <i class="fas fa-cloud-rain"></i>
                            <p class="rain">0%</p>
                        </div>
                    </div>
                    </div>
                </div>
                <ul class="bottom-hero">
                    <li class="monday bottom-list-item">
                        <img class="monday" src="http://openweathermap.org/img/wn/${weatherObj.list[6].weather[0].icon}@2x.png" alt="" >
                        <p class="temperatur monday">${Math.round((weatherObj.list[6].main.temp) - 273.15)}°</p>
                        <p class="day monday">${weatherObj.list[6].dt_txt}</p>
                        </li>
                    <li class="thuesday bottom-list-item">
                        <img class="thuesday" src="http://openweathermap.org/img/wn/${weatherObj.list[15].weather[0].icon}@2x.png" alt="">
                        <p class="temperatur thuesday">${Math.round((weatherObj.list[15].main.temp) - 273.15)}°</p>
                        <p class="day thuesday">${weatherObj.list[15].dt_txt}</p>
                    </li>
                    <li class="wensday bottom-list-item">
                        <img class="wensday" src="http://openweathermap.org/img/wn/${weatherObj.list[23].weather[0].icon}@2x.png" alt="">
                        <p class="temperatur wensday">${Math.round((weatherObj.list[23].main.temp) - 273.15)}°</p>
                        <p class="day wensday">${weatherObj.list[23].dt_txt}</p>
                    </li>
                    <li class="thursday bottom-list-item">
                        <img class="thursday src="http://openweathermap.org/img/wn/${weatherObj.list[31].weather[0].icon}@2x.png" alt="">
                        <p class="temperatur thursday">${Math.round((weatherObj.list[31].main.temp) - 273.15)}°</p>
                        <p class="day thursday">${weatherObj.list[31].dt_txt}</p>
                    </li>
                    <li class="friday bottom-list-item">
                        <img class="friday src="http://openweathermap.org/img/wn/${weatherObj.list[39].weather[0].icon}@2x.png" alt="">
                        <p class="temperatur friday">${Math.round((weatherObj.list[39].main.temp) - 273.15)}°</p>
                        <p class="day friday">${weatherObj.list[39].dt_txt}</p>
                    </li>
                </ul>
            </div>
            <footer>
                <button>F</button>
                <button>C</button>
            </footer>
        `;

        return htmlCode
    }

    static appendHtml(weatherObj){
        console.log(weatherObj)

        const container = document.querySelector('.container')

        container.innerHTML = Ui.createHtmlCode(weatherObj);

    }

    static showNewDate(e){
        
        console.log(e.target)

        if(e.target.classList.contains('monday')){
            
        }


    }

    
}

export default Ui


