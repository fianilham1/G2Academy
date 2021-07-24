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
import Login from './Login';

import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      pageConfig : {
        currentEntries:4,
        currentPage:1
      },
      isAddNew : false,
      user : [
          {
            'id': '1',
            'photoName': 'Bali Photos',
            'albumName': 'Travel',
            'user':'John',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '2',
            'photoName': 'Isekai Photos',
            'albumName': 'Wibu',
            'user':'Eko',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '3',
            'photoName': 'DJ Photos',
            'albumName': 'Music',
            'user':'Steve',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '4',
            'photoName': 'Interstellar Photos',
            'albumName': 'Movie',
            'user':'Gege',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/810b14'
          },
          {
            'id': '5',
            'photoName': 'Yogya Photos',
            'albumName': 'Travel',
            'user':'John',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '6',
            'photoName': 'Math Photos',
            'albumName': 'Learning',
            'user':'Eko',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '7',
            'photoName': 'Rock Photos',
            'albumName': 'Music',
            'user':'Steve',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '8',
            'photoName': 'Saturnus Photos',
            'albumName': 'Astronomy',
            'user':'Gege',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/810b14'
          },
          {
            'id': '9',
            'photoName': 'A Photos',
            'albumName': 'Alphabet',
            'user':'John',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '10',
            'photoName': 'B Photos',
            'albumName': 'Alphabet',
            'user':'Eko',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '11',
            'photoName': 'C Photos',
            'albumName': 'Alphabet',
            'user':'Steve',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '12',
            'photoName': 'D Photos',
            'albumName': 'Alphabet',
            'user':'Gege',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/810b14'
          },
          {
            'id': '13',
            'photoName': 'Child Photos',
            'albumName': 'Family',
            'user':'John',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/92c952'
          },
          {
            'id': '14',
            'photoName': 'Picnic Photos',
            'albumName': 'Family',
            'user':'Eko',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/24f355'
          },
          {
            'id': '15',
            'photoName': 'World War Photos',
            'albumName': 'Histoty',
            'user':'Steve',
            "url": "https://via.placeholder.com/600/92c952",
            'thumbnail':'https://via.placeholder.com/150/54176f'
          },
          {
            'id': '16',
            'photoName': '1945 Photos',
            'albumName': 'History',
            'user':'Gege',
            "url": "https://via.placeholder.com/600/92c952",
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
  }
  handleUpdateData = val => {
    let userCopy = JSON.parse(JSON.stringify(this.state.user))
    userCopy[`${val.row-1}`].photoName = val.photoName;
    userCopy[`${val.row-1}`].albumName = val.albumName;
    userCopy[`${val.row-1}`].user = val.user;
   
    this.setState({ user: userCopy});
    console.log("call update in MAIN:",val.row)
  }
  handleDeleteData = val => {
    let userCopy = JSON.parse(JSON.stringify(this.state.user))
    userCopy.splice(val-1, 1)
   
    this.setState({ user: userCopy});
    console.log("call delete in MAIN:",val)
  }
  handleAddData = val => {
    let userCopy = JSON.parse(JSON.stringify(this.state.user))
    userCopy.push(val)
   
    this.setState({ user: userCopy});
    this.setState({ isAddNew: false });
    console.log("call add new in MAIN:",val)
  }
  handleClickAddData = val => {
    this.setState({ isAddNew: true });
  }

  render() { 
    console.log("currentPageConfig:",this.state.pageConfig)
    return ( 
      <React.Fragment>
      <div className="bg">

        <div className="button">
          <div>
            <button id="addButton" onClick={this.handleClickAddData}>Add New</button>
          </div>
          <div className="searchbg">
            <input type="text" className="input" onKeyUp="Search()" placeholder="Search..." title="Type in a name"/>
          </div>
        </div>

        <div className="head1">List of</div>
        <h2 className="head2">Photos</h2>
        <div className="triangle-left"></div>
        <div className="triangle-up"></div>

        <Table data={this.state} onSelectPage={this.handlePage} onUpdateDate={this.handleUpdateData} onDelete={this.handleDeleteData} onAddData={this.handleAddData}/>

        <ShowEntries onSelectEntries={this.handleEntries}/>

        
        {/* <div class="pagination_section bottom">
        </div> */}

      </div>
      </React.Fragment>
     );
  }
}
 
export default Todo;

