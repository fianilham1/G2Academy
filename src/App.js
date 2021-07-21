// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div class="App">
//       <header class="App-header">
//         <img src={logo} class="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           class="App-link"
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

// export default App;

//snippet
//imrc
//ccc

import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
       <div class="bg">

      <div class="button">
        <div>
          <button id="addButton" onClick="AddNew()">Add New</button>
        </div>
        <div class="searchbg">
          <input type="text" class="input" onkeyup="Search()" placeholder="Search..." title="Type in a name"/>
        </div>
      </div>

      <div class="head1">Table of</div>
      <h2 class="head2">Employee</h2>
      <div class="triangle-left"></div>
      <div class="triangle-up"></div>

      <div class="tbl">
          <div class="row">
            <div class="cell header">No</div>
            <div class="cell header">Photo Name</div>
            <div class="cell header">Album Name</div>
            <div class="cell header">User</div>
            <div class="cell header">Thumbnail</div>
          </div>
          <div class="row">
            <div class="cell">1</div>
            <div class="cell">Bali Photos</div>
            <div class="cell">Travel</div>
            <div class="cell">John</div>
            <div class="cell">Thumbnail</div>
          </div>
          <div class="row">
            <div class="cell">2</div>
            <div class="cell">Isekai Photos</div>
            <div class="cell">Wibu</div>
            <div class="cell">Eko</div>
            <div class="cell">Thumbnail</div>
          </div>
          <div class="row">
            <div class="cell">3</div>
            <div class="cell">DJ Photos</div>
            <div class="cell">Music</div>
            <div class="cell">Steeve</div>
            <div class="cell">Thumbnail</div>
          </div>
          <div class="row">
            <div class="cell">4</div>
            <div class="cell">Interstellar Photos</div>
            <div class="cell">Movie</div>
            <div class="cell">Gege</div>
            <div class="cell">Thumbnail</div>
          </div>
        
      </div>

      <div class="entries">Show
        <select class="entry">
          <option value="4">4</option>
          <option value="8">8</option>
        </select>entries
      </div>

      <div class="pagination_section">
       
        <a href="#" onclick="Choose('1')" class="page1 active">1</a>
        <a href="#" onclick="Choose('2')" class="page2">2</a>
        <a href="#" onclick="Choose('3')" class="page3">3</a>
        <a href="#" onclick="Choose('4')" class="page4">4</a>
        <a href="#" onclick="Choose('5')" class="page5">5</a>
        <a href="#" class="dot">...</a>
        <a href="#" onclick="Choose('20')" class="page20">20</a>
        <a href="#" onclick="Choose('next')" class="next">Next >></a>
      
      </div>
      {/* <div class="pagination_section bottom">
      </div> */}

      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01"/>
        <div id="caption"></div>
      </div>

      </div>
      </React.Fragment>
     );
  }
}
 
export default App;