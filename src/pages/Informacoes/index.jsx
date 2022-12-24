import React, { useContext } from "react";
import { UsuarioContexto } from "../../contexts/UsuarioContexto";
import Styles from "./Informacoes.module.css";
import ModalCarregar from "../ModalCarregar";

const Informacoes = () => {

    const { nome, idade, autenticacao, setAutenticacao } = useContext(UsuarioContexto);

    function sair(){
        setAutenticacao(true);
    }

    return(
        <>
            {
                autenticacao === false ?
                <div className={Styles.informacoes}>
                <h1>Informações</h1>
                <div className={Styles.card}>
                    <h2>Seu nome: {nome}</h2>
                    <h2>Sua idade: {idade} anos</h2>
                    <button onClick={sair}>Sair</button>
                </div>
                </div>
                :
                < ModalCarregar texto="Saindo" tempo={3000} rota="/" />
            }
        </>
    )
}

export default Informacoes;