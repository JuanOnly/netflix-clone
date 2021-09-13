import React from 'react'

function Banner() {
    return (
        <header 
        className="banner h-96 relative object-contain text-white" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://notautil.com/wp-content/uploads/2018/04/netflix-banner-990x299.jpg)`,
            backgroundPosition: "center left"
        }}
            
        >
            <div className="banner_contents ml-8 pt-36">
                <h1 className="banner_title">Banner Name</h1>
                <div className="banner_buttons">
                    <button className="">Play</button>
                    <button className="">My List</button>
                </div>
                <h1 className="banner_discription">This is a discription</h1>
            </div>
            <div className="banner_fadeBottom" />
        </header>
    )
}

export default Banner
