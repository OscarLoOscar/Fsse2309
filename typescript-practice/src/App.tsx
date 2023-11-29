import React from 'react';
import Greeting from './tsPractice';
import {Student} from './Student';
import logo from './logo.svg';
import './App.css';


function App(){
  const student1 = new Student("Johnny",30);

  console.log(`Student Name: ${student1.getName()}`);
  console.log(`Student Age: ${student1.getAge()}`); 
  return (
    <div>
      <h1>React ts Practice</h1>
      <Greeting name = "John"/>
      </div>
  )
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
