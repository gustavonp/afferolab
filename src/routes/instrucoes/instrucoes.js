import React from 'react';
import { NavLink } from 'react-router-dom';
import Indicadores from '../../components/indicadores/Indicadores';
import './instrucoes.css';
import arte_indicadores_branco from '../../imagens/arte_indicadores_branco.png';

const instrucoes = () => {
  return(
    <div className="instrucoes">
        <Indicadores
          satisfacao={0}
          fidelizacao={0}
          questoesRandomizar={10}
        />
      <div className="conteudoInstrucoes">
        <div className="instrucaoLeft">
          <p>Ao lado, estão os três indicadores do game. Quando você tomar suas decisões, eles poderão aumentar ou diminuir. Por isso, acompanhe-os para saber sua evolução no jogo.</p>
          <p>Você iniciará o game com os indicadores zerados. No decorrer do jogo, eles serão impactados por todas as suas decisões. Então, fique atento!</p>
          <p>Antes de resolver cada situação, reflita como suas escolhas podem influenciar os indicadores.</p>
        </div>
        <div className="instrucaoRight intro">
          <center>
            <img src={arte_indicadores_branco} />
          </center>
            <Indicadores
              satisfacao={10}
              fidelizacao={6}
              questoesRandomizar={10}
            />
        </div>
        <center>
        <NavLink className="botaoProximo" to="/gameQuiz">CONTINUAR</NavLink>
        </center>
      </div>
    </div>
  );
}

export default instrucoes;