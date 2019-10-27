import React from 'react';
import { NavLink } from 'react-router-dom';
import Indicadores from '../components/indicadores/Indicadores';

const instrucoes = () => {
  return(
    <div className="instrucoes">
      <div className="indicadores">
        <Indicadores />
      </div>
      <div className="conteudoInstrucoes">
        <div>
          <p>Ao lado, estão os três indicadores do game. Quando você tomar suas decisões, eles poderão aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.</p>
          <p>Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados por todas as suas decisões. Então, fique atento!</p>
          <p>Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.</p>
        </div>
        <div>
          <img src={"../imagens/arte_indicadores.png"}  alt="Indicadores" />
          <Indicadores
            satisfacao={10}
            fidelizacao={6}
           />
        </div>
        <NavLink to="/gameQuiz">CONTINUAR</NavLink>
      </div>
    </div>
  );
}

export default instrucoes;