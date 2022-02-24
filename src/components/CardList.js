import Card from "./Card";

function CardList(props) {
  const {data} = props;
  
  const renderedData = data.map((element) => (
    <Card key={element.name} name={element.name} url={element.url} />
  ));

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
