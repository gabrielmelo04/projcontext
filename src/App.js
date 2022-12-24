import React from "react";
import Rotas from "./routes/rotas";
import { UsuarioContextoProvider } from "./contexts/UsuarioContexto";

const App = () => {

  return(
    <UsuarioContextoProvider>
      <Rotas />
    </UsuarioContextoProvider>
  )
}

export default App;