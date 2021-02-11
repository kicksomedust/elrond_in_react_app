import React, { Component } from 'react'
import './App.css';
import EnterAddress from './components/EnterAddress';
import Transactions from './components/Transactions'
import Account from './components/Account'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends Component{

  state = {
    address: '',
    balance: '',
    transactions: []
  }

  enterAddress = (_address) => {
    this.setState({ address: _address });
    axios.get(`https://api.elrond.com/address/${_address}/transactions`)
      .then(res => {
          this.setState({transactions: res.data.data.transactions});
          //console.log(this.state.transactions);
      })
      .catch((response) => {
        console.log(response);
      })

    this.setState({balance: ''});
    axios.get(`https://api.elrond.com/address/${_address}/balance`)
      .then(res => {
          this.setState({balance: res.data.data.balance});
          //console.log(this.state.balance);
      })
      .catch((response) => {
        console.log(response);
      })
  }

  getStyle = () => {
    return {
        background:'#b2b2b2',
        padding:'10px',
        borderBottom: '1px #cc dotted'
    }
  }   

  render(){

    return (
    <div className="App" style={this.getStyle()}>
    <Jumbotron fluid>
      <Container fluid="sm">
      <EnterAddress enterAddress={this.enterAddress}/>
      <Account address={this.state.address} balance={this.state.balance}/>
      <Transactions transactions={this.state.transactions}/>
      </Container>
    </Jumbotron>      
    </div>
  )}
}

export default App;
