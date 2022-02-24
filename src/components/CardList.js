import { useState, useEffect } from "react";
import Card from "./Card";

function CardList() {
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

  const renderedData = data.map((element) => (
    <Card key={element.name} name={element.name} url={element.url} />
  ));

  /* useEffect (callback, [dependecies]) */
  useEffect(() => fetchData() , [])

  if (loading){
    return (
      <div className="loading"> <img src="https://i.gifer.com/Yg6z.gif" alt="loading gif"/> </div>
    )
  }
  return (
    <div className="pokemon-list">
      { /* <button onClick={fetchData} className="pokemon-button"> fetch pokemon </button> */}
      <Card
        name="Pikachu"
        type="electricidad"
        description="soy el mas cute"
        color="orange"
      />
      <Card
        name="Charmander"
        type="fuego"
        description="soy el mas caliente"
        color="red"
      />
      {renderedData}
    </div>
  );
}
export default CardList;
