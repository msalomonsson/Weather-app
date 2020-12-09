import apiData from './api.js' 

class Data {

    static getData(inputValue){
        var fetchData = fetch(`https:api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiData.apiKey}`)
        .then(res => res.json())
        return fetchData
    }


}

export default Data