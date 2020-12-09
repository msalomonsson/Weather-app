import Ui from './userInterFace.js'
import data from './data.js'

(function App(){
    
    const form = document.querySelector('.form').addEventListener('submit',render);
    
    function render(e){
        e.preventDefault()

        const inputValue = document.querySelector('.input').value

        const weather = data.getData(inputValue);
        weather.then(data => {
            const weatherObj = data;
            return weatherObj
        }).then((weatherObj => {
            Ui.appendHtml(weatherObj)
            document.querySelector('.bottom-hero').addEventListener('click', Ui.showNewDate)
        })).catch((err) => {
            console.log(err)
        })
    }

}())
