import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1> Hola React 😎 </h1>
      <Card name="Pikachu" type="electricidad" description="soy el mas cute" color="orange" />
      <Card name="Charmander" type="fuego" description="soy el mas caliente" color="red" />
    </>
  );
}
export default App;
