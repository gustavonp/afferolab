import React from 'react';
import arte_indicadores from '../../imagens/arte_indicadores.png';

class Indicadores extends React.Component {

  satisfacao = 0;
  fidelizacao = 0;
  questoesRandomizar = 10;

  constructor(props) {
    super(props);

    this.satisfacao = this.props.satisfacao;
    this.fidelizacao = this.props.fidelizacao;
  }

  barraDeProgressao(){

    var questoesRandomizar = this.props.questoesRandomizar;
    var pontuacaoMaxima = 4 * questoesRandomizar;

    var porcentagemSatisfacao = this.props.satisfacao / pontuacaoMaxima * 100;
    var porcentagemFidelizacao = this.props.fidelizacao / pontuacaoMaxima * 100;

    var scope = {
      styleSatisfacao:{
        width: porcentagemSatisfacao + '%'
      },
      styleFidelizacao:{
        width: porcentagemFidelizacao + '%'
      }
    }

    return(
      <div className="areaIndicadores">
        <div className="indicadorEtiqueta">
          <p>Satisfação do Cliente</p>
          <div className="indicadorContainer">
            <div className="indicadorSatisfacao" style={scope.styleSatisfacao}></div>
          </div>
        </div>
        <hr/>
        <div className="indicadorEtiqueta">
          <p>Fidelização</p>
          <div className="indicadorContainer">
            <div className="indicadorFidelizacao" style={scope.styleFidelizacao}></div>
          </div>
        </div>
      </div>
    );
    
  }


  render() {

      //<img src={arte_indicadores} />
    return(
    <div className="indicadoresContainer">
      {this.barraDeProgressao()}  
    </div>
    )
  }
}

export default Indicadores;