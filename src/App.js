import React from 'react';
import logo from './img/dd.png';
import './App.css';
import 'fontsource-roboto';
import Species from './Species';
import Classes from './Classes';
import Features from './Features';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      button: true,
      name: '',
      species: '',
      profession: '',
    }

    this.handleUserData = this.handleUserData.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.checkButtons = this.checkButtons.bind(this);
  }

 handleUserData(key, value) {
    this.setState({[key]: value});
 }
 handleButton(childData) {
   if(childData === "clicked") this.setState({button:false}) 
 }

 _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep,
      button: false
    })
    
 }

 _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep,
      button: true
    },this.checkButtons)
 }

 checkButtons() {
  if(this.state.currentStep === 2 && this.state.profession !== '') this.setState({button: false})
 }

  render () {
    let currentStep = this.state.currentStep;
    console.log(currentStep)
    console.log(this.state.profession)
    const previousButton = (
      <Button style={{color:"#fff", borderColor: "#fff"}}
        size="large"
        variant="outlined"
        
        onClick={this._prev}>
            Previous
      </Button>
    )

    const nextButton = (
      <Button style={{color:"#fff", borderColor: "#fff"}}
      variant="outlined"
      size="large"
      onClick={this._next}
      disabled={this.state.button}
      >
        Next
      </Button> 
    )

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Your Character Generator</h1>
        </header>
        <main>
        {}
          <Species  buttonState={this.handleButton} currentStep={this.state.currentStep} handleData = {this.handleUserData} />
          <Classes buttonState={this.handleButton} currentStep={this.state.currentStep} handleData = {this.handleUserData} />
          <Features profession={this.state.profession} currentStep={this.state.currentStep}/>
          {currentStep !== 1 && previousButton}
          {currentStep < 3 && nextButton } 

        </main>
      </div>
    );
  }
}

export default App;
