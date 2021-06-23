import React from 'react';
import logo from './img/dd.png';
import './App.css';
import 'fontsource-roboto';
import Species from './Species';
import Classes from './Classes';
import Features from './Features';
import SpeciesChar from './SpeciesChar';
import ClassChar from './ClassChar';
import Past from './Past';
import Sheet from './Sheet';
import Button from '@material-ui/core/Button';
import DataContext from './contexts/DataContext';
import ReactToPrint , { PrintContextConsumer }  from 'react-to-print';



class MultiForm extends React.Component  {
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
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.checkButtons = this.checkButtons.bind(this);
    this.lastStep = this.lastStep.bind(this);
  }

 handleUserData(key, value) {
    this.setState({[key]: value});
 }
 handleButton(childData) {
   if(childData === "clicked") this.setState({button:false}) 
 }
 lastStep() {
   this.setState({currentStep:7})
 }

 prev() {
    let currentStep = this.state.currentStep
    if(currentStep === 3) this.context.update({default: this.context.defaultStatic, rolled: this.context.defaultRolled, notConfirmed: true, actualState: ['','','','','','']})
 
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep,
      button: false
    })
    
 }

 next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 6 ? 7: currentStep + 1
    this.setState({
      currentStep: currentStep,
      button: true
    },this.checkButtons)
 }

 checkButtons() {
  if(this.state.currentStep === 2 && this.state.profession !== '') this.setState({button: false})
  if(this.state.currentStep === 3 && this.context.final) this.setState({button:false});
 }

  render () {
    let currentStep = this.state.currentStep;
    const previousButton = (
      <Button className="previous" style={{color:"#fff", borderColor: "#fff"}}
        size="large"
        variant="outlined"
        disabled={this.context.final && currentStep === 3}
        onClick={this.prev}>
            Previous
      </Button>
    )

    const nextButton = (
      <Button className="next" style={{color:"#fff", borderColor: "#fff"}}
      variant="outlined"
      size="large"
      onClick={this.next}
      disabled={this.state.button}
      >
        Next
      </Button> 
    )

    
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {(currentStep !== 7) && <h1>Your Character Generator</h1>}
          </header>
          <main>
          {}
            <Species  buttonState={this.handleButton} currentStep={this.state.currentStep} handleData = {this.handleUserData} />
            <Classes buttonState={this.handleButton} currentStep={this.state.currentStep} handleData = {this.handleUserData} />
            <Features buttonState={this.handleButton} species={this.state.species} profession={this.state.profession} currentStep={this.state.currentStep}/>
            <SpeciesChar buttonState={this.handleButton} button={this.state.button} profession={this.state.profession} species={this.state.species} currentStep={this.state.currentStep}/>
            <ClassChar finals={this.context.finalValues} profession={this.state.profession} buttonState={this.handleButton} button={this.state.button} species={this.state.species} currentStep={this.state.currentStep}/>
            <Past profession={this.state.profession} lastStep = {this.lastStep} button={this.state.button} species={this.state.species} currentStep={this.state.currentStep}/>
            
             {(currentStep === 7) && 
              <Sheet ref={el => (this.componentRef = el)} currentStep={this.state.currentStep} profession={this.state.profession} species={this.state.species}/> }
             {(currentStep === 7) && 
             <ReactToPrint content={() => this.componentRef}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <Button 
                  className="print"
                  onClick={handlePrint}
                  variant="contained" 
                  color="secondary"
                  >Print this out!
                  </Button>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
            }
            {/* {(currentStep === 7) && 
            <Test currentStep={this.state.currentStep} profession={this.state.profession} species={this.state.species} ref={el => (this.componentRef = el)} />
            } */}
            <div className="buttons">
              {(currentStep !== 1 && currentStep < 7) && previousButton}
              {currentStep < 6 && nextButton } 
            </div>
          </main>
        </div>
      </>
    );
  }
}

MultiForm.contextType=DataContext;
export default MultiForm;
