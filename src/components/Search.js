import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home1 from './Home1';

const Search = (props) => {
    const [response,setResponse]=useState(null);
    const [city,setCity]=useState('');
    
    useEffect(()=>{
    const getweatherdata=async()=>{
    const a=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.location.aboutprops.value}&appid=4503811c206df3e95177b13dae8d0921`);
      setResponse(a.data);
      setCity(a.data.name)
    }
    getweatherdata();
},
)

    return (
        <div>
           <Home1 data={response}/>
        </div>
    );
};

export default Search;