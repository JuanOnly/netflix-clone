import React from 'react'

function Banner() {
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
                    <button className="">Play</button>
                    <button className="">My List</button>
                </div>
                <h1 className="banner_discription w-96 leading-5 pt-4 text-sm max-w-xs h-20">This is a discription</h1>
            </div>
            <div className="banner_fadeBottom h-40 bg-red-800" />
        </header>
    )
}

export default Banner
