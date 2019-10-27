import React from 'react';

class Indicadores extends React.Component {

  satisfacao = 0;

  fidelizacao = 0;

  constructor(props) {
    super(props);

  //  this.satisfacao = this.props.satisfacao;
  //  this.fidelizacao = this.props.fidelizacao;
  }

  render() {

    return(
    <div className="containerIndicadores">
      <p><b>Satisfação: </b>{this.props.satisfacao}</p>
      <p><b>Fidelizacao: </b>{this.props.fidelizacao}</p>
    </div>
    )
  }
}

export default Indicadores;