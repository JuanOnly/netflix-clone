import React from 'react'

function Banner() {
    return (
        <header 
        className="banner h-96 relative object-contain text-white" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://notautil.com/wp-content/uploads/2018/04/netflix-banner-990x299.jpg)`,
            backgroundPosition: "center center"
        }}
            
        ></header>
    )
}

export default Banner
