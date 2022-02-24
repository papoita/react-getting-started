import useApplicationData from "./hooks/useApplicationData";
import "./App.css";
import CardList from "./components/CardList";

function App() {
  const {data, loading} = useApplicationData();

  if (loading){
    return (
      <div className="loading"> <img src="https://i.gifer.com/Yg6z.gif" alt="loading gif"/> </div>
    )
  }
  return (
    <>
      <h1 className="title"> Hola React 😎 </h1>
      <CardList data={data} />
    </>
  );
}
export default App;
