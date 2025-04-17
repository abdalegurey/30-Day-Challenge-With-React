import React, { useEffect, useState } from 'react';
import Day from "../assets/images/Day.jpg";
import Night from "../assets/images/Night.jpg"
import { WiDaySunny, WiRain, WiSnow, WiCloudy } from "react-icons/wi";

const API_BASE_URL = 'http://api.weatherapi.com/v1';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Use the correct API key here
//const apiKey = import.meta.env.VITE_WEATHER_API_KEY;


const WaetherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [suggestion, setSuggestion]= useState([]);
  const [selectedWeather,setSelectedWeather]= useState();
  const [stateHidden, setstateHidden]= useState(true)

  useEffect(() => {

    
    const FetchWeather = async () => {
      try {
       // const url = `${API_BASE_URL}/current.json?key=${apiKey}&q=${city}`; // Add country name

        const response = await fetch(`${API_BASE_URL}/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      
        
        const data = await response.json();
        console.log("data",data)
        

        setSuggestion([data]);




       // setWeatherData(data)
      
       setstateHidden(true)
         

          let timerId = setTimeout(() => {
             setWeatherData(data);
         
            
          }, 2000); // 600ms delay

          // setCity("")
  
          // Cleanup function to clear the timeout if the component unmounts or city changes
          //return () => clearTimeout(timerId);
         
        


        
       
        
        
        
        
        
        // Save the weather data to state
      } catch (error) {
        console.log("error", error);
      }
    };

    FetchWeather();


  




  }, [city]); // Re-run the effect when the `city` changes

  // console.log("cittty",weatherData.location.name)
  // console.log("current",weatherData.current)
  console.log("suges",suggestion)

  const itemData=(item)=>{
    console.log("item",item)
    setSelectedWeather(item)
    setstateHidden(!stateHidden)
    setCity("")
console.log("statehidden",stateHidden)
    

  }
  console.log("dataweather",selectedWeather)

  return (
    <div className='bg-green-500 min-h-screen flex items-center justify-center px-4'>
    <div className='md:max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center'>
  
      {/* Qaybta Sawirka */}
      <div className='w-full'>
        <img src={weatherData?.current.is_day ? Day : Night} className='w-full h-64 object-cover rounded-t-2xl' alt="Weather Image" />
      </div>
  
      {/* Qaybta Input */}
      <div className='w-full mt-6'>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className='border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-green-300' placeholder="Enter city..." />
        <ul className="mt-2 max-h-60 overflow-y-auto border border-gray-300 rounded-md bg-white">
        {suggestion.map((item, index) => (
  stateHidden ? (
    <li key={index} onClick={() => itemData(item)} className='p-2 cursor-pointer hover:bg-gray-200'>
      {item.location?.name} - {item.current?.temp_c}°C
    </li>
  ) : null
))}

</ul>

      </div>
  
      {/* Qaybta Cimilada */}
     
      {
       
         

      
      }

{selectedWeather && (
          <>
            <div className='flex items-center justify-center gap-10 mt-4'>
              <h1 className='text-2xl font-bold text-gray-800'>{selectedWeather.location.name}</h1>
              <h1 className='text-2xl font-bold text-blue-600'>{selectedWeather.current.temp_c}°C</h1>
              <h1 className='text-lg font-semibold text-gray-500'>{selectedWeather.location.country}</h1>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center mt-6">
              <div>
                <h2 className="text-lg font-semibold">Wind</h2>
                <p className="text-gray-500">{selectedWeather.current.wind_kph} km/h</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Humidity</h2>
                <p className="text-gray-500">{selectedWeather.current.humidity}%</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Pressure</h2>
                <p className="text-gray-500">{selectedWeather.current.pressure_mb} hPa</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold">Condition</h2>
              <p className="text-gray-500">{selectedWeather.current.condition.text}</p>
              <div>
                {selectedWeather.current.condition.text.includes('Sunny') && <WiDaySunny size={50} />}
                {selectedWeather.current.condition.text.includes('Rain') && <WiRain size={50} />}
                {selectedWeather.current.condition.text.includes('Snow') && <WiSnow size={50} />}
                {selectedWeather.current.condition.text.includes('Cloudy') && <WiCloudy size={50} />}
              </div>
            </div>
          </>
        )}
  
      {/* Qoraalka Hoose */}
      <p className='text-sm font-serif text-gray-600 mt-4 px-6'>
        Weather App {new Date().getFullYear()}.
      </p>
  
    </div>
  </div>
  );
};

export default WaetherApp;
