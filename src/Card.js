function Card(props) {
  const {name, type, description, color} = props;
  return (
    <div className="pokemon-card" style={{borderColor: color}}>
      <h1> Hola soy: {name} </h1>
      <h3> Tipo: {type} </h3>
      <p> {description} </p>
    </div>
  );
}
export default Card;
