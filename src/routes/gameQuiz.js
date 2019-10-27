import React from 'react';
import LocalStorageDatabase from '../components/database/database';
import { ordemDasPerguntas, coletaDadosDatabase } from '../utilities';
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

  confirmaOpcao(){
    var rodada = this.state.rodada + 1;
    var satisfacao = this.state.satisfacao + this.state.satisfacaoTemp;
    var fidelizacao = this.state.fidelizacao + this.state.fidelizacaoTemp;

    if(rodada > this.database.perguntas.questoes_randomizar){
      //find a way to go to a next page
    }else{
      this.setState({
        satisfacao: satisfacao,
        fidelizacao: fidelizacao,
        rodada: rodada
      });
    }
  }

  render(){

    var pergunta = this.database.perguntas.banco_questoes[this.state.ordem[this.state.rodada]];

      return(
        <div className="gameQuiz">
        <div className="indicadores">
          <Indicadores
            satisfacao={this.state.satisfacao}
            fidelizacao={this.state.fidelizacao}
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

const gameQuiz = () => {

  var arrQuestions = coletaDadosDatabase();

  console.log(arrQuestions);

  return(
    <div>
      <IniciaJogo
        ordem={arrQuestions}
      />
    </div>
  );
}

export default gameQuiz;