import React, {useState, useEffect} from "react";

function DataStarwars() {
    const [dataStarwars, setDataStarwars] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
    const result = await fetch ("https://swapi.dev/api/planets/?format=json")
    const data = await result.json();
    console.log(data.results);
    setDataStarwars(data.results);
    };
    fetchData();
}, []);
    

return (
    <>
        <h1>Planets in starWars</h1>
        {dataStarwars.map((item,index) => (
            <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.gravity}</p>
                <p>{item.population}</p>
            </div>
        ))}
    </>
)
}

export default DataStarwars