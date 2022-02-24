function Card(props) {
  const {name, type, description, color, url} = props;
  
  return (
    <div className="pokemon-card" style={{borderColor: color}}>
      <h1> {name} </h1>
      <h3> {type} </h3>
      <p> {description} </p>
      <a href={url}> ver mas </a>
    </div>
  );
}
export default Card;
