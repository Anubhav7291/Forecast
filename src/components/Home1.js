import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Home1 = ({data}) => {
    console.log(data)
   
    const [mainData,setMainData]=useState(null);
    const [count,setCount]=useState(0);
    const [value,setValue]=useState('');
    const [render,setRender]=useState(false);
    const [response,setResponse]=useState(null);
    const [city,setCity]=useState('');
    
    useEffect(()=>{
        setMainData(data);
    },[data])

    const background=`${mainData?.weather[0]?.main}.jpg`;
    const icon=`${mainData?.weather[0]?.main}.png`
    var today = new Date();
    const day=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    if(!mainData){
        return <div className="loader text-center"></div>
    }else{
    return (
        <div className="container-sm">            
        
            <div  className='background' style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(img/${background})`}}>
         
                <div className="container-fluid text-center" style={{width:"40%"}}>
                    {/* For Search */}
                    <input className="search"
                value={value}
                onChange={(e)=>setValue(e.target.value)} 
                
                type="text" placeholder="Search..."/>&nbsp;
             
              <Link to={{pathname:"/search",aboutprops:{value:value}}}><button  className="search-btn btn btn-primary btn-sm">Search</button></Link>
                {/*  */}
                    <div className="card card-background" >
                        <div className="card-body">
                            <div className="content">
                                <img className="icon" src={`img/${icon}`}/>
                                <span className="temp">{Math.round(mainData?.main.temp-273.15)}&#8451;</span><br/><br/>
                                <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                                <h3 style={{display:"inline"}}>{mainData?.name}</h3>
                                <h3>{day[today.getDay()]}, {mainData?.weather[0].description}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid text-center" style={{width:"40%"}}>
                    <div className="card card-background2" >
                        <div className="card-body">
                            <div className="content">
                            <table  style={{width:"100%"}}>
                                <tr>
                                <i className="fas fa-humidity" style={{color:"blue"}}></i>
                                    <th>Humidity</th>
                                    <td>{mainData?.main.humidity} %</td>
                                </tr>
                                <tr>
                                <i className="far fa-eye" style={{color:"rgb(211, 211, 0)"}}></i>
                                    <th>Visibility</th>
                                    <td>{mainData?.visibility} meter</td>
                                </tr>
                                <tr>
                                <i class="fas fa-wind" style={{color:"grey"}}></i>
                                   <th>Wind</th>
                                    <td>{mainData?.wind.speed} m/sec</td>
                                </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    
        
    );
};
}
export default Home1;
