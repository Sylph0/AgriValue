import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import styles from '../style';
import Navbar from './Navbar';
import img2 from '../assets/pin.svg'
import cloud from '../assets/condition_icons/clouds.png'
import sun from '../assets/condition_icons/sun.png'
import rain from '../assets/condition_icons/rain.png'
import snow from '../assets/condition_icons/snow.png'
import haze from '../assets/condition_icons/haze.png'
import drizzle from '../assets/condition_icons/drizzle.png'
import thunder from '../assets/condition_icons/thunder.png'
import img4 from '../assets/wind.svg'
import img5 from '../assets/humidity.svg'
import img6 from '../assets/pressure.svg'
import Footer from './Footer';

var image = cloud;


const Home = () => {
    
    // use States

    const [long, setLong] = useState([]);
    const [lat, setLat] = useState([]);
    const [data, setData] = useState([]);
    const [loc, setLoc] = useState("")
    const [temp, setTemp] = useState(true);   
    


    // use effects
    useEffect(() => {
        navigator.geolocation.getCurrentPosition( (pos) => {
            setLat(pos.coords.latitude);
            setLong(pos.coords.longitude);
        })
          getWeather();
    }, [lat, long])
    async function getWeather() {
        try {
            let now = new Date().getTime();
            console.log(lat, long);
            const loc = {lat, long};
            const locString = JSON.stringify(loc);
            if(localStorage.getItem(locString) && (now - JSON.parse(localStorage.getItem(locString)).currentTime)<=1000*60*60){
                console.log("Data is present in localstorage");
                const getData = localStorage.getItem(locString);
                const realData = JSON.parse(getData);
                setData(realData.jsonData);
                image = realData.image;
            }

            else{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=59d8a609251083883c0dbfab1946820d`)
            const jsonData = await res.json();
            setData(jsonData);
            if (typeof data.main!='undefined') {
                if (jsonData.weather[0].main === "Clear") {
                  image = sun;
                } 
                else if (jsonData.weather[0].main === "Haze")
                {
                  image = haze;
                } 
                else if (jsonData.weather[0].main === "Rain")
                {
                  image = rain;
                } 
                else if (jsonData.weather[0].main === "Snow")
                {
                  image = snow;
                } 
                else if (jsonData.weather[0].main === "Clouds")
                {
                  image = cloud;
                } 
                else if (jsonData.weather[0].main === "Thunder")
                {
                  image = thunder;
                } 
                else{
                    image = drizzle;
                }
              }
              const loc = {lat, long};
              const locString = JSON.stringify(loc);
              if(localStorage.getItem(locString) ){
                localStorage.removeItem(locString);
                console.log("item removed")
              }
              const currentTime = new Date().getTime();
              const updateData = {jsonData, currentTime, image};
      localStorage.setItem(locString,JSON.stringify(updateData));
           
    }
    
}
catch (error) {
    
            console.log("Some error occured -_-");
            console.log(error);
                }

}



function handleCity(event){
    setLoc(event.target.value)
}


// api call for getting data through input city

    async function getClimate(city_lat, city_long) {
        try {
            let now = new Date().getTime();
            const loc = {city_lat, city_long};
              const locString = JSON.stringify(loc);
            if(localStorage.getItem(locString) && (now - JSON.parse(localStorage.getItem(locString)).currentTime)<=1000*60*60){
                console.log("data is present");
                console.log(now);
                console.log(JSON.parse(localStorage.getItem(locString)).currentTime );
                const getData = localStorage.getItem(locString);
                const realData = JSON.parse(getData);
                setData(realData.jsonData);
                image = realData.image;
            }
            else{
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city_lat}&lon=${city_long}&appid=1598eb993abcab55821cb9f1fab2d2ec`)
            const jsonData = await res.json();
            setData(jsonData);
            if (typeof data.main!='undefined') {
                if (jsonData.weather[0].main === "Clear") {
                  image = sun;
                } 
                else if (jsonData.weather[0].main === "Haze")
                {
                  image = haze;
                } 
                else if (jsonData.weather[0].main === "Rain")
                {
                  image = rain;
                } 
                else if (jsonData.weather[0].main === "Snow")
                {
                  image = snow;
                } 
                else if (jsonData.weather[0].main === "Clouds")
                {
                  image = cloud;
                } 
                else if (jsonData.weather[0].main === "Thunder")
                {
                  image = thunder;
                } 
                else{
                    image = drizzle;
                }
              }
              const loc = {city_lat,city_long};
              const locString = JSON.stringify(loc);
              if(localStorage.getItem(locString) ){
                localStorage.removeItem(locString);
                console.log("item removed")
              }
              const currentTime = new Date().getTime();
              const updateData = {jsonData, currentTime,image};
      localStorage.setItem(locString,JSON.stringify(updateData));
      console.log("Data added");
            }

            
           
        } catch (error) {
            alert(`Place not found`);
            console.log("Some error occured -_-");
            console.log(error);
        }

    }

    

// api call for getting city latitude and longitude

    async function handleInput(){
        try {
            const res = await fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=1598eb993abcab55821cb9f1fab2d2ec`);
            const resp = await res.json();
    
            const city_lat = resp[0].lat;
            const city_long = resp[0].lon;
    
           getClimate(city_lat, city_long);     
        } catch (error) {
            alert(`${loc} not found`)
        }
       
       
    }
   
    function toggle(){
        setTemp(prev=>!prev)     
    }


    let realTemp = 100;
    let feelTemp = 100;
    if(temp){
        let ans = (typeof data.main!='undefined')?((data.main.temp-273.15)):(45);
        realTemp = ans.toFixed(1);
        let feelAns = (typeof data.main!='undefined')?((data.main.feels_like-272)):(45);
        feelTemp = feelAns.toFixed(1);
    }
    else{
        let ans = (typeof data.main!='undefined')?(((data.main.feels_like-273.15)*(9/5)+32)):(100);
        realTemp = ans.toFixed(1);
        let feelAns = (typeof data.main!='undefined')?(((data.main.feels_like-273.15)*(9/5)+32)):(100);
        feelTemp = feelAns.toFixed(1);
    }


    return (
        <div className= "bg-primary w-full overflow-hidden"> 
               <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.paddingX}`}>
          <Navbar />
        </div>
        
      </div>
      
            <div className="data-collection">
                <h2 className='text-gray-200'>SkyWatch🥶</h2>
                <div className="cont">
                    <div className="input-data">
                        <div className="toggle-data">

                    <div className="toggle-img">
                                       {temp?"Celsius(\u00B0 C)":"Farhenite(\u00B0 F) "}
                                       </div>
                                       <button className="toggle-temp"
                                        onClick={toggle}>{
                                        temp?("(\u00B0C➡️\u00B0F)"):("(\u00B0F➡️\u00B0C)")
                                       }</button>
                        
                        </div>

                        <div className="weather-info">
                            <div className="city">

                                <div className="city-data">
                                    <input type="text" id='city' name='city' placeholder={data.name} onChange={handleCity}/>
                                    <button onClick={handleInput}>Search</button>
                                </div>
                                <div className='city--name'>

                                <img src={img2} alt='' onClick={getWeather} />
                                <h4>{data.name}</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="temp">
                                <div className="temp-data" >
                                   
                                    <p className="deg">
                                       {temp?(realTemp +"\u00B0 C"):(realTemp+"\u00B0 F")}
                                    </p>
                                    <p className="deg-feel">
                                         Feels like {temp?(feelTemp +"\u00B0 C"):(feelTemp+"\u00B0 F")}
                                    </p>
                                    <div className="about-sky">
                                        <p className="about-sky-data">
                                            {(typeof data.main != 'undefined')?data.weather[0].main:''}
                                        </p>
                                    </div>
                                </div>
                                <div className="temp-img">
                                    <img src={image}alt='' />
                                </div>
                            </div>

                        <div className="weather-tip">
                            {(typeof data.main != 'undefined')?data.weather[0].description:''}
                        </div>

                        </div>
                        <div className="weather-info-other">
                            
                            <div className="wind">
                                <img src={img4} alt='' />
                                <p>{(typeof data.main != 'undefined')?data.wind.speed:'1.50'}</p>
                            </div>

                            <div className="humidity">
                            <img src={img5} alt='' />
                            <p>{(typeof data.main != 'undefined')?data.main.humidity:'50'}</p>
                            </div>
                            
                            <div className="pressure">
                            <img src={img6} alt='' />
                            <p>{(typeof data.main != 'undefined')?data.main.pressure:'1000'}</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
<Footer />

        </div>
        </div>
        </div>
    )
}

export default Home