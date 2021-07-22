import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import Home1 from './Home1';


const Home=()=>{
    const [response,setResponse]=useState(null);
    const [city,setCity]=useState('');
    const [toggle,setToggle]=useState(false)

useEffect(()=>{
   getCoords();
 
},[city])

const getCoords=async ()=>{
    try{
    const coords=await geolocation();
    let {latitude:lat,longitude:lon}=coords.coords;
    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4503811c206df3e95177b13dae8d0921`);
    const weatherData=response.data;
    setResponse(weatherData);
    setCity(weatherData.name)
    }catch(err){
        document.querySelector('.loader').classList.add('hidden')
        alert('Something went wrong')
    }
}



const geolocation=()=>{
    return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(resolve,reject);
    });
}
return (
    <Home1 data={response}/>
)
}
export default Home;

