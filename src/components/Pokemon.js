
import { useState, useEffect } from "react";

export default function Pokemon(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+props.name)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        console.log(actualData)
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (

    <div class="card">
    <img src={data && data.sprites.front_default} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{data && data.name}</h5>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <p class="card-text">
      weight: {data && data.weight}<br/>

      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    
  );
}


