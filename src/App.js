import React from 'react';

import './App.css';
import 'fontsource-roboto';
import DataProvider from './contexts/DataProvider';
import MultiForm from './MultiForm';


class App extends React.Component  {
  constructor(props) {
    super(props);

  }

 checkButtons() {
  if(this.state.currentStep === 2 && this.state.profession !== '') this.setState({button: false})
 }

  render () {

    return (
      <DataProvider>
        <MultiForm/>
      </DataProvider>
    );
  }
}

export default App;
