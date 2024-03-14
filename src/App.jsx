import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import { ItenListConteiner } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItenListConteiner greeting="Bienvenidos!" />
    </>
  );
}

export default App;
