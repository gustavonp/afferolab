import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import instrucoes from './routes/instrucoes';
import gameQuiz from './routes/gameQuiz';
import Error from './routes/Error';

//import Navigation from './components/Navigation';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/instrucoes" component={instrucoes}/>
             <Route path="/gameQuiz" component={gameQuiz}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;