import React, { Component } from 'react';
// import './App.css';
import calculatorImg from './calculator.png'

class Calculator extends Component {

  constructor(){
    super();

    this.state = { //state is saying 'remember this' so we can save values to variables
      header: "Calculator",
      display: '0',
      operator: '',
      temp: '0',
      resetDisplay: false
    }
  }

  updateHeader(val){
    this.setState({ //tells react to keep re-rendering the DOM
      header: val
    })
  }

  setDisplay(val){
    const newVal = this.state.display === '0'
                    ? val
                    : this.state.display + val;
    if(newVal.length >= 13){
      return;
    }

    this.setState({
      display: newVal
    })
  }

  setOperator(val){
    this.setState({
      temp: this.state.display,
      display: '0',
      operator: val
    })
  }
  calculate(){

       if (this.state.operator === "") {
           return;
       }
       var result = 0;
       var { temp, display } = this.state;
       switch (this.state.operator) {
           case "+":
               result = temp / 1 + display / 1;
               break;
           case "-":
               result = temp / 1 - display / 1;
               break;
           case "*":
               result = (temp / 1) * (display / 1);
               break;
           case "/":
               result = (temp / 1) / (display / 1);
               break;

       }
       this.setState({
           display: result.toString(),
           temp: 0,
           operator: ""
       })

  }
  render() {
    return (
  <div id="calculator-container">
    <input id="header-input" onChange={ (e) => this.updateHeader(e.target.value) }/>
    <h1 id="header"> { this.state.header } </h1>
    <img className="remove-highlight" src={calculatorImg} alt="calculator" />
    <div id="calculator-mask" className="remove-highlight">
      <div className="output">
        <span className="total">{ this.state.display }</span>
      </div>

      <div className="btn clear"></div>

      <div className="btn zero" onClick={ () => this.setDisplay('0') }></div>
      <div className="btn one" onClick={ () => this.setDisplay('1') }></div>
      <div className="btn two" onClick={ () => this.setDisplay('2') }></div>
      <div className="btn three" onClick={ () => this.setDisplay('3') }></div>
      <div className="btn four" onClick={ () => this.setDisplay('4') }></div>
      <div className="btn five" onClick={ () => this.setDisplay('5') }></div>
      <div className="btn six" onClick={ () => this.setDisplay('6') }></div>
      <div className="btn seven" onClick={ () => this.setDisplay('7') }></div>
      <div className="btn eight" onClick={ () => this.setDisplay('8') }></div>
      <div className="btn nine" onClick={ () => this.setDisplay('9') }></div>

      <div className="btn equal" onClick={ () => this.calculate() }></div>
      <div className="btn multiply" onClick={ () => this.setOperator('*') }></div>
      <div className="btn divide" onClick={ () => this.setOperator('/') }></div>
      <div className="btn subtract" onClick={ () => this.setOperator('-') }></div>
      <div className="btn add" onClick={ () => this.setOperator('+') }></div>
    </div>
  </div>
)
  }
}

export default Calculator //default makes it so that we dont have to deconstruct it when we import it
