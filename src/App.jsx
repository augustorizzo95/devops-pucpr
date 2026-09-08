import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };

    this.acessar = this.acessar.bind(this);
  }

  mudaEmail(event) {
    let state = this.state;
    state.email = event.target.value;
    this.setState(state);
  }

  mudaSenha(event) {
    let state = this.state;
    state.senha = event.target.value;
    this.setState(state);
  }

  acessar() {
    let state = this.state;
    
    if (state.email === 'augusto.rizzo@pucpr.br' && state.senha === '123456') {
      state.mensagem = 'Acessado com sucesso!';
    } else {
      state.mensagem = 'Usuário ou senha incorretos!';
    }
    
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        
        <div>
          <input 
            type="text" 
            name="email" 
            onChange={(e) => this.mudaEmail(e)} 
          />
        </div>
        
        <div>
          <input 
            type="password" 
            name="senha" 
            onChange={(e) => this.mudaSenha(e)} 
          />
        </div>
        
        <button onClick={this.acessar}>Acessar</button>
        
        <br /><br />
        <label>{this.state.mensagem}</label>
      </div>
    );
  }
}

export default App;