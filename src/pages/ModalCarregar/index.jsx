import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './ModalCarregar.css';
import { UsuarioContexto } from "../../contexts/UsuarioContexto";

const ModalCarregar = ({ texto, tempo, rota }) => {

  const [acao, setAcao] = useState(true);
  const { setAutenticacao } = useContext(UsuarioContexto);
  const navigate = useNavigate();

  useEffect(() =>{
    const disparar = setTimeout(() => {
      setAcao(false);
      setAutenticacao(false);
      navigate(`${rota}`);
    },tempo);

    return () => clearTimeout(disparar);
   },[rota, tempo, navigate, setAutenticacao]);

  const StylesConfig = (num) => {
    return{
      transform: `rotate(calc(18deg * ${parseInt(num)}))`, //tamanho da rotação
      animationDelay: `calc(0.05s * ${parseInt(num)})`
    }
  }

  return(
      <section>
        {
          acao ?
          <div className="loading">
            <div className="blocks" style={StylesConfig(1)}> </div>
            <div className="blocks" style={StylesConfig(2)}> </div>
            <div className="blocks" style={StylesConfig(3)}> </div>
            <div className="blocks" style={StylesConfig(4)}> </div>
            <div className="blocks" style={StylesConfig(5)}> </div>
            <div className="blocks" style={StylesConfig(6)}> </div>
            <div className="blocks" style={StylesConfig(7)}> </div>
            <div className="blocks" style={StylesConfig(8)}> </div>
            <div className="blocks" style={StylesConfig(9)}> </div>
            <div className="blocks" style={StylesConfig(10)}> </div>
            <div className="blocks" style={StylesConfig(11)}> </div>
            <div className="blocks" style={StylesConfig(12)}> </div>
            <div className="blocks" style={StylesConfig(13)}> </div>
            <div className="blocks" style={StylesConfig(14)}> </div>
            <div className="blocks" style={StylesConfig(15)}> </div>
            <div className="blocks" style={StylesConfig(16)}> </div>
            <div className="blocks" style={StylesConfig(17)}> </div>
            <div className="blocks" style={StylesConfig(18)}> </div>
            <div className="blocks" style={StylesConfig(19)}> </div>
            <div className="blocks" style={StylesConfig(20)}> </div>
            <h3>{texto}</h3>
          </div>
          :
            false
        }
        
    </section>
  )
}

export default ModalCarregar;