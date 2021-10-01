import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer";

// import => trae me lo
// Navbar => el nombre del componente
// from => de donde lo trae
// ruta => es donde esta el componente !!
function App() {

  const [items, setItems] = useState(0)
  
  
  useEffect(() => {
    console.log('Se Agrego un Producto')
  }, [items])


  return (
    <div className="App h-screen">
        <Navbar items={items} />
        <ItemListContainer items={items} setItems={setItems}/>
    </div>
  );
}

export default App;