import logo from './logo.svg';
import './App.css';
import React from "react";
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <h1>Github Repository Search</h1>
        <h5 className='mt-3'>Developed By Andrew Stanecek</h5>
      </header>
      <body >
        <div className='app-Body'>
          <Search/>
        </div>
      </body>
      
    </div>
  );
}

export default App;
