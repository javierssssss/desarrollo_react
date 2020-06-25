import React from 'react';
import logo from './logo.svg';
import './App.css';
import Encabezado from './Encabezado'
import AppCirculo from './AppCirculo'
import { render } from '@testing-library/react';

function App() {

  return (
    <div className="App">
      <Encabezado title="Show Vehicles"   >
      </Encabezado>
    </div>    
  );
}
export default App;


