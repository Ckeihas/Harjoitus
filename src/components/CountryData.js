import axios from "axios";
import React,{useState, useEffect} from "react";
import "./CountryData.css"
import Dropdown from "./Dropdown.js"


function CountryData() {
    const[jsondata, setJsonData] = useState([])

    useEffect(()=>{
        fetchJsonData();
    }, []);

    const fetchJsonData = () => {
        axios.get("https://restcountries.com/v2/all").then((response)=>{
            console.log(response)
            setJsonData(response.data)
        });

    };

    return(
        <div>
      <h1>Featured Products</h1>
            <div className='item-container'>
                {jsondata.map((countr) => (
                <div className='card' key={countr.numericCode}>
                    <Dropdown getCountryData = {countr}/>
                    <img src={countr.flag}/>
                    <h3>{countr.name}</h3>
                    <p>{countr.population}</p>
                    <button onClick={fetchJsonData}></button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default CountryData