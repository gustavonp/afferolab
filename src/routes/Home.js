import React from 'react';
import { NavLink } from 'react-router-dom';

const home = () => {
  return(
    <div className="home">
      <div className="conteudoHome">
        <h1>Game Quiz</h1>
        <p>Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a <b>melhor decisão para você, para o cliente e para o negócio</b>. Está preparado?</p>
        <NavLink to="/instrucoes">Clique aqui para aceitar o desafio!</NavLink>
      </div>
    </div>
  );
}

export default home;