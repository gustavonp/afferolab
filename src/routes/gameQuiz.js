import React from 'react';
import LocalStorageDatabase from '../components/database/database';
import { coletaDadosDatabase } from '../utilities';
import Indicadores from '../components/indicadores/Indicadores';

class IniciaJogo extends React.Component {

  ordem = [];

  constructor(props) {
    super(props);
    this.database = new LocalStorageDatabase();
    this.state = {
      ordem: this.props.ordem,
      rodada: 0,
      satisfacao: 0,
      fidelizacao: 0,
      satisfacaoTemp: 0,
      fidelizacaoTemp: 0
    }
  }

  seguraValor(satisfacao, fidelizacao){
    this.setState({
      satisfacaoTemp: satisfacao,
      fidelizacaoTemp: fidelizacao
    });
  }

  finalizaJogo(){
    return(
      <div className="gameQuiz">
        <div className="conteudoGame">
          <p>Veja sua <i>performance</i> em cada indicador:</p>
          <p>Satisfação: {this.state.satisfacao}</p>
          <p>Fidelização: {this.state.fidelizacao}</p>
        </div>
      </div>
    );
  }

  confirmaOpcao(){
    var rodada = this.state.rodada + 1;
    var satisfacao = this.state.satisfacao + this.state.satisfacaoTemp;
    var fidelizacao = this.state.fidelizacao + this.state.fidelizacaoTemp;

    //if(rodada === this.database.perguntas.questoes_randomizar){

      //find a way to go to a next page
    //this.finalizaJogo();
    //}else{
      this.setState({
        satisfacao: satisfacao,
        fidelizacao: fidelizacao,
        rodada: rodada
      });
    //}
  }

  render(){

    if(this.state.rodada === this.database.perguntas.questoes_randomizar){
      return(
        <div className="gameQuiz">
          <div className="conteudoGame">
            {this.finalizaJogo()}
          </div>
        </div>
      );
    }else{
    var pergunta = this.database.perguntas.banco_questoes[this.state.ordem[this.state.rodada]];

      return(
        <div className="gameQuiz">
        <div className="indicadores">
          <Indicadores
            satisfacao={this.state.satisfacao}
            fidelizacao={this.state.fidelizacao}
            questoesRandomizar={this.database.perguntas.questoes_randomizar}
          />
        </div>
        <div className="conteudoGame">
          <h2>Pergunta {this.state.rodada + 1}: {pergunta.pergunta}</h2>
          <br/>

          <ul>
            <li>
              <button 
                onClick={() => this.seguraValor(pergunta.alternativas[0].impacto_indicadores.satisfacao, pergunta.alternativas[0].impacto_indicadores.fidelizacao)}
              >[A] {pergunta.alternativas[0].descricao}</button>
            </li>
            <li>
              <button 
                onClick={() => this.seguraValor(pergunta.alternativas[0].impacto_indicadores.satisfacao, pergunta.alternativas[1].impacto_indicadores.fidelizacao)}
              >[B] {pergunta.alternativas[1].descricao}</button>
            </li>
            <li>
              <button 
                onClick={() => this.seguraValor(pergunta.alternativas[2].impacto_indicadores.satisfacao, pergunta.alternativas[0].impacto_indicadores.fidelizacao)}
              >[C] {pergunta.alternativas[2].descricao}</button>
            </li>
          </ul>
          <div>
            <button
              onClick={() => this.confirmaOpcao()}
            >CONFIRMAR</button>
          </div>
        </div>
      </div>
    );
    }
  }
}

const gameQuiz = () => {
  var arrQuestions = coletaDadosDatabase();

  return(
    <div>
      <IniciaJogo
        ordem={arrQuestions}
      />
    </div>
  );
}

export default gameQuiz;