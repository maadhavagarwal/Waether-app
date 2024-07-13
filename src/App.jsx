import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [location, setLocation] = useState("")
  const [data, setData] = useState({})
  const [button, setButton] = useState(false)
  
  const api_key="f16f533981bd0e20d9d6c0075dcf6a4b"
  const Base_url=`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${api_key}`
    const fetchWeatherData = async () => {
      
      const response = await fetch(Base_url)
      return await response.json()

      // console.log(data)


    }
    
    useEffect(() => {
      fetchWeatherData().then((d)=>{
        setData(d)
        console.log(data);
    })
    },[location])
  
  return (
    <div className='max-w-md mx-auto mt-8 rounded-lg overflow-hidden shadow-lg bg-gray-100'>
      <div className='flex items-center bg-white border-b border-gray-200 p-2'>
        <input type="text" className='flex-1 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none '
        placeholder='Enter city name' onChange={(e) => setLocation(e.target.value)}
        />
        <button className='bg-blue-400 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded' 
         >
          Submit
        </button>
      </div>
      <div className='p-4'>
        
         <div className='text-gray-800 font-bold text-xl mb-2'>Weather in{data.name} </div>
        <div className='border border-gray-300 p-4 rounded-lg'>
      
          <p className="mb-4"><span className='font-bold'>Coordinates:</span> Latitude ={data.coord?.lat},LONGITUDE={data.coord?.lon}</p>
          <p className="mb-2"><span className='font-bold'>temperature:</span> {data.main?.temp}°F</p>
          <p className=' mb-2'><span className='font-bold'>Humidity:</span> {data.main?.humidity}%</p>
          <div className='flex justify-between'>
            <p className='mb-2'><span className='font-bold'>Wind Speed:</span> {data.wind?.speed}m/s</p>
            <p className='mb-2'><span className='font-bold'>Sunrise:</span> {data.sys?.sunrise}</p>
            <p className='mb-2'><span className='font-bold'>Sunset:</span> :32</p>
        
          
          </div>

        </div>


      </div>
      {/* Hello world */}
    </div>
  )
}

export default App
