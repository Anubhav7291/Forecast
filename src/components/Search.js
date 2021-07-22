import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home1 from './Home1';

const Search = (props) => {
    const [response,setResponse]=useState(null);
    const [input,setinput]=useState('')

    useEffect(()=>{
        setinput(props.location.aboutprops.value)
    },)
    
    useEffect(()=>{
    const getweatherdata=async()=>{
       
    const a=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.location.aboutprops.value}&appid=04aeae538db33b7e54a69ff867eafcfe`);
      setResponse(a.data);
    }
    getweatherdata();
},[input]
) 
    return (
        <div>  
           <Home1 data={response}/>
        </div>
    );
};

export default Search;