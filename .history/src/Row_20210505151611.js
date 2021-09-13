import axios from "./axios";
import React from "react"


function Row({ title, fetchURL, isLargeRow=false }) {
    const [movies, setmMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmMovies(request.data.results);
            return request;
        }
    }, [fetchUrl])
    console.log(movies);

    return (
        <div className="row text-white">
            <h2>{title}</h2>
        </div>
    )
}

export default Row
