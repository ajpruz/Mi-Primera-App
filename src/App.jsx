import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer";


// import => trae me lo
// Navbar => el nombre del componente
// from => de donde lo trae
// ruta => es donde esta el componente !!
function App() {
  
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer/>
    </div>
  );
}

export default App;