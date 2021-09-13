import axios from './axios';
import React, { useEffect, useState } from 'react'
import requests from "./Requests"

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginales);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    // function truncate(string, n) {
    //     return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    // }
    
    return (
        <header 
        className="banner h-96 relative object-contain text-white" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png)`,
            backgroundPosition: "center left"
        }}  
        >
            <div className="banner_contents ml-8 pt-36 h-48">
                <h1 className="banner_title text-4xl font-extrabold pb-1">Banner Name</h1>
                <div className="banner_buttons">
                    <button className="cursor-pointer text-white bg-gray-900 outline-none border-none font-bold rounded-sm px-8 mr-4 pb-1 hover:bg-white hover:text-black transition delay-100">Play</button>
                    <button className="cursor-pointer text-white bg-gray-900 outline-none border-none font-bold rounded-sm px-8 mr-4 pb-1 hover:bg-white hover:text-black transition delay-100">My List</button>
                </div>
                <h1 className="banner_discription w-96 leading-5 pt-4 text-sm max-w-xs h-20 truncate">This is a discription</h1>
            </div>
            <div className="banner_fadeBottom h-96 bg-gradient-to-t from-transparent via-black" />
        </header>
    )
}

export default Banner