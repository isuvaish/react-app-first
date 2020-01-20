import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {ShoeStore} from './ShoeStore';

const shoes = [{
  "name": "Air Jordan 1",
  "brand": "Jordan"
},
{
  "name": "Air Jordan 3",
  "brand": "Jordan"
},
{
  "name": "Stan Smith",
  "brand": "Adidas"
}
];



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Sneakers Collection</h1>
        <ShoeStore shoes={shoes}/>
      </header>
    </div>
  );
}

export default App;
