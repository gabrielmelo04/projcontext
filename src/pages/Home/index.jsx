import React, { useContext, useState } from "react";
import { UsuarioContexto } from "../../contexts/UsuarioContexto";
import ModalCarregar from "../ModalCarregar";
import Styles from './Home.module.css';

const Home = () => {

    const [ nomeInput, setNomeInput ] = useState("");
    const [ idadeInput, setIdadeInput ] = useState(0);
    const { autenticacao, setNome, setIdade, setAutenticacao } = useContext(UsuarioContexto);

    const conectar = (e) => {

        e.preventDefault();
        if(nomeInput === ""){
            alert("Preencha o campo Nome!");
        }else if(idadeInput === 0){
            alert("Preencha o campo Idade!");
        }else{
            setNome(nomeInput);
            setIdade(idadeInput);
            setAutenticacao(true);
        }

    }

    return(
        <>
            {
                autenticacao === false ?
                <div className={Styles.container}>

                    <h1>Bem-vindo</h1>

                    <form onSubmit={conectar}>
                        <input type="text" name='nome' id='nome' value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} autoComplete="off"/>
                        <input type="number" name='idade' id='idade' value={idadeInput} onChange={(e) => setIdadeInput(e.target.value)}/>
                        <input type="submit" value="Entrar" />
                    </form>
                </div>    
                :
                <ModalCarregar texto="Entrando" tempo={5000} rota="/informacoes"/>
            }
        </>
    )
}

export default Home;