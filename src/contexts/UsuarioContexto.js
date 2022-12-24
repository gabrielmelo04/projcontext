import React, { createContext, useState } from "react";

export const UsuarioContexto = createContext();

export const UsuarioContextoProvider = ({children}) =>{

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [autenticacao, setAutenticacao] = useState(false);

    return(
        <UsuarioContexto.Provider value={{ nome, setNome, idade, setIdade, autenticacao, setAutenticacao }}>
            {children}
        </UsuarioContexto.Provider>
    )

}