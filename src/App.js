import React from 'react';

import './App.css';
import 'fontsource-roboto';
import DataProvider from './contexts/DataProvider';
import MultiForm from './MultiForm';


class App extends React.Component  {
  constructor(props) {
    super(props);

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
