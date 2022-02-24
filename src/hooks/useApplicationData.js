import { useState, useEffect } from "react";

function useApplicationData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true)
    setTimeout(() => {
      const API_URL = "https://pokeapi.co/api/v2/pokemon";
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results)
        setLoading(false)
      })
      .catch((error) => console.log(error));
    }, 3000);
  };

  /* useEffect (callback, [dependecies]) */
  useEffect(() => fetchData() , [])

  return {data, loading}
}
 
export default useApplicationData;