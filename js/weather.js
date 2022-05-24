const APIKey = 'uZCkwyRtgrcoKnBuoXZP1JjzMLMBGFVy'
const baseUrl = 'http://dataservice.accuweather.com/'

const cityUrl = cityName => 
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const cityWeatherUrl = (cityKey) => 
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`    

const getData = async url => {
    try{
        const response = await fetch(url)

        if(!response.ok){
            throw new Error('Unable to get data')
        }
        return await response.json()
    }catch({name, message}){
        alert(`${name}: ${message}`)
    }
}

getCityData = cityName => getData(cityUrl(cityName))
getCityWeather = cityKey => getData(cityWeatherUrl(cityKey))

