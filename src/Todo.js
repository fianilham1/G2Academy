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

import './Todo.css';
import Table from './Table';
import ShowEntries from './ShowEntries';

import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      pageConfig : {
        currentEntries:4,
        currentPage:1
      },
      user : [
          {
            'id': '1',
            'photoName': 'Bali Photos',
            'albumName': 'Travel',
            'user':'John',
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '2',
            'photoName': 'Isekai Photos',
            'albumName': 'Wibu',
            'user':'Eko',
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '3',
            'photoName': 'DJ Photos',
            'albumName': 'Music',
            'user':'Steve',
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '4',
            'photoName': 'Interstellar Photos',
            'albumName': 'Movie',
            'user':'Gege',
            'thumbnail':'https://via.placeholder.com/150/810b14'
          },
          {
            'id': '5',
            'photoName': 'Yogya Photos',
            'albumName': 'Travel',
            'user':'John',
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '6',
            'photoName': 'Math Photos',
            'albumName': 'Learning',
            'user':'Eko',
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '7',
            'photoName': 'Rock Photos',
            'albumName': 'Music',
            'user':'Steve',
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '8',
            'photoName': 'Saturnus Photos',
            'albumName': 'Astronomy',
            'user':'Gege',
            'thumbnail':'https://via.placeholder.com/150/810b14'
          },
          {
            'id': '9',
            'photoName': 'Yogya Photos',
            'albumName': 'Travel',
            'user':'John',
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '10',
            'photoName': 'Math Photos',
            'albumName': 'Learning',
            'user':'Eko',
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '11',
            'photoName': 'Rock Photos',
            'albumName': 'Music',
            'user':'Steve',
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '12',
            'photoName': 'Saturnus Photos',
            'albumName': 'Astronomy',
            'user':'Gege',
            'thumbnail':'https://via.placeholder.com/150/810b14'
          },
          {
            'id': '13',
            'photoName': 'Yogya Photos',
            'albumName': 'Travel',
            'user':'John',
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '14',
            'photoName': 'Math Photos',
            'albumName': 'Learning',
            'user':'Eko',
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '15',
            'photoName': 'Rock Photos',
            'albumName': 'Music',
            'user':'Steve',
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '16',
            'photoName': 'Saturnus Photos',
            'albumName': 'Astronomy',
            'user':'Gege',
            'thumbnail':'https://via.placeholder.com/150/810b14'
          }
      ]
    }
    this.handleEntries = this.handleEntries.bind(this);
    this.handlePage = this.handlePage.bind(this);
  }
  handleEntries(val){
    let pageConfigCopy = JSON.parse(JSON.stringify(this.state.pageConfig))
    pageConfigCopy.currentEntries = parseInt(val)
   
    this.setState({ pageConfig: pageConfigCopy});
    console.log("call entries:",pageConfigCopy)
    // console.log("call entries:",this.state.pageConfig) 
  }
  handlePage(val){
    let pageConfigCopy = JSON.parse(JSON.stringify(this.state.pageConfig))
    pageConfigCopy.currentPage = parseInt(val)
   
    this.setState({ pageConfig: pageConfigCopy});
    console.log("call page in MAIN:",val)
    // console.log("call entries:",this.state.pageConfig) 
  }
  render() { 
    console.log("currentPageConfig:",this.state.pageConfig)
    return ( 
      <React.Fragment>
      <div className="bg">

        <div className="button">
          <div>
            <button id="addButton" onClick="AddNew()">Add New</button>
          </div>
          <div className="searchbg">
            <input type="text" className="input" onKeyUp="Search()" placeholder="Search..." title="Type in a name"/>
          </div>
        </div>

        <div className="head1">List of</div>
        <h2 className="head2">Photos</h2>
        <div className="triangle-left"></div>
        <div className="triangle-up"></div>

        <Table data={this.state} onSelectPage={this.handlePage}/>

        <ShowEntries onSelectEntries={this.handleEntries}/>

        
        {/* <div class="pagination_section bottom">
        </div> */}

        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id="img01"/>
          <div id="caption"></div>
        </div>

      </div>
      </React.Fragment>
     );
  }
}
 
export default Todo;