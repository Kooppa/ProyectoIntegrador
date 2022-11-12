import { useState } from 'react';
import { Menu } from "./pages/Menu";
import { User } from "./pages/User";
import { Item } from "./pages/Item";

function App() {

  const [state, setstate] = useState("Usuario")

  return (
    <>
      <Menu 
      btn1={ () => setstate('Usuario')}
      btn2={ () => setstate('Item')}
      />

      <hr />
      <div className='container'>
        {state === "Usuario" && (
          <User />
        )}
        
        {state === "Item" && (
          <Item  />
        )}
      
      </div>
      
    </>
  )
}

export default App
