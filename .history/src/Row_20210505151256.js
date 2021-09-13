import React from "react"


function Row({ title, fetchURL, isLargeRow=false }) {
    return (
        <div className="row text-white">
            <h2>{title}</h2>
        </div>
    )
}

export default Row
