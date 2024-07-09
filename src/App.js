import React from 'react';
import './App.css';
import Counter from './Counter'
import Timer from './Timer';
import TextInput from './Textinput';

const jsonData = [
  { id: 1, name: 'Genta Pradana Putra Agya' },
  { id: 1, name: 'A11.2021.13499' },
];

function App() {
  return (
    
    <div className='contianer'>
      
      <div>
        <div className="App">
          <h1>TUGAS REACT JS</h1>
          {jsonData.map(item => (
            <p>{item.name}</p>
          ))
          }
        </div>
        <hr />
        <div className="App container">
          <h1 className="text-danger">BootStrap</h1>
            <button className="btn btn-primary">Submit</button>
        </div>
       
      <div>
        <hr />
        <div>
          <h1>Hooks - Counter</h1>
          <Counter />
        </div>

        <div>
          <h1>Hooks - Timer</h1>
          <Timer />
        </div>

        <div>
          <h1>Hooks - TextInput</h1>
          <TextInput />
        </div>
    </div>
  </div>
</div>
  );
}

export default App;
