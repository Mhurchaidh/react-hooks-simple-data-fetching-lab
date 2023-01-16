import React, { useState, useEffect } from "react"
function App() {

    const [ imageLoaded, setImageLoaded ] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => setImageLoaded(data.message))
    }, [])


    return (imageLoaded? <img src={imageLoaded} alt="A Random Dog"/> : <p>Loading...</p>)
}

export default App;
