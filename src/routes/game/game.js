import React from 'react';
import LocalStorageDatabase from '../../components/database/database';
import { coletaDadosDatabase } from '../../utilities';
import Indicadores from '../../components/indicadores/Indicadores';
import './game.css';
import arte_indicadores_branco from '../../imagens/arte_indicadores_branco.png';

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
      satisfacaoTemp: null,
      fidelizacaoTemp: null
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
      <div className="resultados">
      <center>
        <div className="finalizaQuiz">
        <h2><img className="iconQuiz" src={arte_indicadores_branco} /> Veja sua <i>performance</i> em cada indicador:</h2>
          <Indicadores
            satisfacao={this.state.satisfacao}
            fidelizacao={this.state.fidelizacao}
            questoesRandomizar={this.database.perguntas.questoes_randomizar}
          />
        </div>
      <div className="sombra"></div>
      </center>
      </div>
    );
  }

  confirmaOpcao(){

    if(this.state.satisfacaoTemp != null && this.state.fidelizacaoTemp != null){

      var rodada = this.state.rodada + 1;
      var satisfacao = this.state.satisfacao + this.state.satisfacaoTemp;
      var fidelizacao = this.state.fidelizacao + this.state.fidelizacaoTemp;
      
      this.setState({
        satisfacaoTemp: null,
        fidelizacaoTemp: null,
        satisfacao: satisfacao,
        fidelizacao: fidelizacao,
        rodada: rodada
      });
    }
  }

  render(){

    if(this.state.rodada === this.database.perguntas.questoes_randomizar){
      return(
        <div>
          {this.finalizaJogo()}
        </div>
      );
    }else{
    var pergunta = this.database.perguntas.banco_questoes[this.state.ordem[this.state.rodada]];

      return(
        <div className="gameQuiz">
          <Indicadores
            satisfacao={this.state.satisfacao}
            fidelizacao={this.state.fidelizacao}
            questoesRandomizar={this.database.perguntas.questoes_randomizar}
          />
          <center>
        <div className="conteudoGame">
          <h2>Pergunta {this.state.rodada + 1}: {pergunta.pergunta}</h2>

          <ul>
            <li>
              <button 
                onClick={() => this.seguraValor(pergunta.alternativas[0].impacto_indicadores.satisfacao, pergunta.alternativas[0].impacto_indicadores.fidelizacao)}
              >A </button> {pergunta.alternativas[0].descricao}
            </li>
            <li>
              <button 
                onClick={() => this.seguraValor(pergunta.alternativas[0].impacto_indicadores.satisfacao, pergunta.alternativas[1].impacto_indicadores.fidelizacao)}
              >B </button> {pergunta.alternativas[1].descricao}
            </li>
            <li>
              <button 
                onClick={() => this.seguraValor(pergunta.alternativas[2].impacto_indicadores.satisfacao, pergunta.alternativas[0].impacto_indicadores.fidelizacao)}
              >C </button> {pergunta.alternativas[2].descricao}
            </li>
          </ul>
          <div>
            <button className="botaoConfirma"
              onClick={() => this.confirmaOpcao()}
            >CONFIRMAR</button>
          </div>
        </div>
        </center>
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