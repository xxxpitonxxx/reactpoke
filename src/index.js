import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Pokemon from './components/Pokemon';
import Hello from './components/Hello.js';

import { BrowserRouter as Router, Routers, Route, Link, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function User() {
//   const [name, setName] = React.useState([]);
//   const [age, setAge] = React.useState(36);
//   const [status, setStatus] = React.useState(false);
//   const [arr, setArrays] = React.useState();


//   React.useEffect(() => {

//     if (status) {

//       let copy = Object.assign([], arr);



//       fetch('https://pokeapi.co/api/v2/pokemon/' + name.toLowerCase())
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(
//               `This is an HTTP error: The status is ${response.status}`
//             );
//           }
//           return response.json();
//         })
//         .then((actualData) => {
//           copy.push(actualData);
//           setArrays(copy);
//         })
//         .catch((err) => {


//         })
//         .finally(() => {

//         });

//       console.log(arr);
//     }
//     setStatus(false);
//   });

//   const changeName = (event) => setName(event.target.value);
//   const changeAge = (event) => setAge(event.target.value);

//   return (
//     <div>
//       <div class="input-group mb-3">
//         <input class="form-control me-3" type="text" value={name} onChange={changeName} placeholder="Search" id="searchInput" aria-label="Search" />
//         <button class="btn btn-outline-success" id="search" onClick={() => setStatus(true)} >Search</button>
//       </div>
//       <div class="row">
//         {arr && arr.map((element, index) => {
//           return (
//             <div class="col">
//               <div class="card">
//                 <img src={element && element.sprites.front_default} class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">{element && element.name}</h5>

//                   <p class="card-text">
//                     weight: {element && element.weight}<br />

//                   </p>
//                   <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//         }

//       </div>
//     </div>
//   );
// }




root.render(
  <Router>
    <Link to="/">Main</Link>
    <Link to="/h">H1</Link>
    <Routes>
      <Route path="/" element={<h1>Main</h1>}></Route>
      <Route path="/h" element={<h1>H1</h1>}></Route>
    </Routes>

  </Router>
);




  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

