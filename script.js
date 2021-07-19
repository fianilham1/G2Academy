// clean html inside body tag
// document.body.innerHTML = ""

// var User = [
// {
//   'name': 'Steven',
//   'position': 'Manager',
//   'address': 'Surabaya',
// },
// {
//   'name': 'Shayla',
//   'position': 'Admin',
//   'address': 'Bandung',
// },
// {
//   'name': 'John',
//   'position': 'User',
//   'address': 'Jakarta',
// },
// {
//   'name': 'Claudi',
//   'position': 'Admin',
//   'address': 'Semarang',
// },
// {
//   'name': 'Angelica',
//   'position': 'Accounting',
//   'address': 'Tuban',
// },
// {
//   'name': 'Zaidan',
//   'position': 'Supervisor',
//   'address': 'Malang',
// },
// {
//   'name': 'Ardo',
//   'position': 'Assistant',
//   'address': 'Yogya',
// },
// {
//   'name': 'Gilang',
//   'position': 'Admin',
//   'address': 'Semarang',
// },
// {
//   'name': 'Babe',
//   'position': 'Supervisor',
//   'address': 'Bandung',
// },
// {
//   'name': 'Golang',
//   'position': 'Sales',
//   'address': 'Bandung',
// },
// {
//   'name': 'Vivi',
//   'position': 'K3',
//   'address': 'Makassar',
// },
// {
//   'name': 'Nopan',
//   'position': 'Manager',
//   'address': 'Solo',
// },
// {
//   'name': 'Maria',
//   'position': 'HRD',
//   'address': 'Aceh',
// },
// {
//   'name': 'Iza',
//   'position': 'Accounting',
//   'address': 'Jakarta',
// },
// {
//   'name': 'Uriah',
//   'position': 'Sales',
//   'address': 'Jember',
// },
// {
//   'name': 'Steven',
//   'position': 'Manager',
//   'address': 'Surabaya',
// },
// {
//   'name': 'Shayla',
//   'position': 'Admin',
//   'address': 'Bandung',
// },
// {
//   'name': 'John',
//   'position': 'User',
//   'address': 'Jakarta',
// },
// {
//   'name': 'Claudi',
//   'position': 'Admin',
//   'address': 'Semarang',
// },
// {
//   'name': 'Angelica',
//   'position': 'Accounting',
//   'address': 'Tuban',
// },
// {
//   'name': 'Zaidan',
//   'position': 'Supervisor',
//   'address': 'Malang',
// },
// {
//   'name': 'Ardo',
//   'position': 'Assistant',
//   'address': 'Yogya',
// },
// {
//   'name': 'Gilang',
//   'position': 'Admin',
//   'address': 'Semarang',
// },
// {
//   'name': 'Babe',
//   'position': 'Supervisor',
//   'address': 'Bandung',
// },
// {
//   'name': 'Golang',
//   'position': 'Sales',
//   'address': 'Bandung',
// },
// {
//   'name': 'Vivi',
//   'position': 'K3',
//   'address': 'Makassar',
// },
// {
//   'name': 'Nopan',
//   'position': 'Manager',
//   'address': 'Solo',
// },
// {
//   'name': 'Maria',
//   'position': 'HRD',
//   'address': 'Aceh',
// },
// {
//   'name': 'Iza',
//   'position': 'Accounting',
//   'address': 'Jakarta',
// },
// {
//   'name': 'Uriah',
//   'position': 'Sales',
//   'address': 'Jember',
// }
// ];

let User = []; //data photo which used as MAIN DATA >>>>>>>>>>>

let UserData = []; //data User

let AlbumData = []; //data album

let PhotoData = []; //data photo >>>>..


const getUsers = () => {
  // promise
  fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        UserData = json.map(users => {
              return {
                  userId: users.id,
                  userName: users.name
              }
          })
      })

      fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(json => {
        AlbumData = json.map(albums => {
              return {
                  albumId: albums.id,
                  albumName: albums.title,
                  userId: albums.userId
              }
          })
      })

      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        PhotoData = json.map(photos => {
              return {
                  albumId: photos.albumId,
                  title: photos.title,
                  url: photos.url,
                  thumbnailUrl: photos.thumbnailUrl
              }
          })
      })
  .then(buildData)   
  .then(setTimeout(() => buildTable(pageConfig.currentEntries,pageConfig.currentPage), 500))
  .then(eventAddNew)
  .then(resetSearch)
}

const buildData = () => {

  for (let i=0;i<PhotoData.length-4000;i++){ //LIST of PhotoData
    const photoData_ith = PhotoData[i];
    const albumNameById = AlbumData.filter(function (currentElement) { //ARRAY of Album
      return currentElement.albumId === photoData_ith.albumId; 
    });
    const userNameById = UserData.filter(function (currentElement) { //ARRAY of User
      return currentElement.userId === albumNameById[0].userId;
    });
    User.push({
      photoName: photoData_ith.title,
      albumName: albumNameById[0].albumName,
      user: userNameById[0].userName,
      url: photoData_ith.url,
      thumbnail: photoData_ith.thumbnailUrl
    })
    // console.log(userNameById)
  }

 
}

let option = document.querySelector(".entry");
// Initial State (one time only in the first)
let entries = parseInt(option.value);
let pageTotal = Math.ceil(User.length/entries);
let table = document.querySelector('.tbl');
let filteredUsers = []
let updateStatus = false

// let iActive = document.querySelector(".active");
// let number = iActive.innerHTML;
let pageConfig = {
  currentEntries:entries,
  currentPage:1
};

const buildTable = (entries,current,data = User) => {

  let countRow=0;
  // buildTable();
  let startIndex = (entries)*(current-1);
  let endIndex = (entries)+(entries)*(current-1);
  let rows = "";
  let HeaderRow = `
  <div class="row">
    <div class="cell header">No</div>
    <div class="cell header">Photo Name</div>
    <div class="cell header">Album Name</div>
    <div class="cell header">User</div>
    <div class="cell header">Thumbnail</div>
  </div>
  `
      for(let i = startIndex;i < endIndex;i++){
        if(i<data.length){ //limit to user data length
          const photos = data[i];

          if(countRow==0){
            table.innerHTML = HeaderRow;
          }
          
          rows += `
          <div class="row">
             <div class="cell num">${i+1}</div>
             <div class="cell">${photos.photoName}</div>
             <div class="cell">${photos.albumName}</div>
             <div class="cell">${photos.user}</div>
             <div class="cell">
                <img class="myImg" src="${photos.thumbnail}" onClick="imgPop('${photos.url}')"></a>
             </div>
          </div>
          `
          countRow++;
        }
        
      }
      table.innerHTML += rows;
      // display pagination total based on current entries
      buildPagination(entries,current,data);
      if(data.length==0){
        table.innerHTML = HeaderRow;
      }
}

//event of pagination
const buildPagination = (entries,currentPage,data = User) => {
  let pagination = document.querySelector(".pagination_section");
  pagination.innerHTML = "";

  if(currentPage!=1){
    pagination.innerHTML = `
    <a href="#" onclick="Choose('prev')" class="prev"><< Previous</a>
    `
  }
  
  let pageTotal = Math.ceil(data.length/entries); //total pagination number
  let showPagination = 5; //show 5 button only
  let diff = (showPagination-1); //differences between start index and end index
  let halfLengthPage = Math.floor(showPagination/2); //5/2 == 2
  console.log("TOTAL",pageTotal)

  if(diff>=pageTotal){
    showPagination = pageTotal;
    diff = (showPagination-1); //if custom showpagination >= page total based entries
    halfLengthPage = Math.floor(showPagination/2);
  }

  let startIndex = currentPage-halfLengthPage; //declare start index
  if(startIndex<1){
    startIndex = 1; //first page
  }

  let endIndex = startIndex+diff; //declare end index
  if(endIndex>pageTotal){
    endIndex = pageTotal;
  }

  let currentDiff = endIndex-startIndex;
  console.log("currentDIF",currentDiff)
  console.log("DIFF",diff)
  if(currentDiff<diff){
    let correction = diff-currentDiff;
    startIndex = currentPage - halfLengthPage - correction;
  }

  console.log("selish",endIndex-startIndex)
  console.log("current",currentPage)
  console.log("startpag",startIndex)
  console.log("endpag",endIndex)

  let buttonPagination="";

  for(let i = startIndex-1 ;i < endIndex;i++){
    if(i==currentPage-1){
      buttonPagination += `
      <a href="#" onclick="Choose('${i+1}')" class="page${i+1} active">${i+1}</a>
    `
    }else{
      buttonPagination += `
      <a href="#" onclick="Choose('${i+1}')" class="page${i+1}">${i+1}</a>
      `
    }
  }
  pagination.innerHTML += buttonPagination;

  if(currentPage!=pageTotal && pageTotal!=0){
    pagination.innerHTML += `
    <a href="#" onclick="Choose('next')" class="next">Next >></a>
    `
  }else{
    pagination.innerHTML += `
    <span class="hide">Next >></span>
    `
  }

}


// event of add New Data
const AddNew = () => {

  if (updateStatus) return alert("Please fill the input!!");
  
  let row = document.querySelectorAll('.tbl .row');
  console.log(row)

    const newRow = `
    <div class="row">
      <div class="cell num">${User.length + 1}</div>
      <div class="cell"><input class="input" name="name" type="text" autocomplete="off"></div>
      <div class="cell"><input class="input" name="position" type="text" autocomplete="off"></div>
      <div class="cell"><input class="input" name="address" type="text" autocomplete="off"></div>
      <div class="cell action">
      </div>
    </div>
        `
    const headerRow = `
    <div class="row">
      ${row[0].innerHTML}
    </div>
    `
    let dataRow = "";
    for(let i=1;i<row.length;i++){
      dataRow += `
      <div class="row">
        ${row[i].innerHTML}
      </div>
      `
    }

    table.innerHTML = headerRow + newRow + dataRow;
    updateStatus = true;
}

const eventAddNew = () => {
  document.querySelector(".tbl").addEventListener('keyup', e => {
      // console.log("e?",e)
      if (e.key === "Enter") saveData()
  })
}

const saveData = () => {

  const name = document.querySelector("input[name='name']");
  const position = document.querySelector("input[name='position']");
  const address = document.querySelector("input[name='address']");

  if (name.value == "" && position.value == "" && address.value == "") {
      return alert("Please fill all of datas first!!");
  }

  User.push({
      name: name.value,
      position: position.value,
      address: address.value
  })

  updateStatus = false;
  buildTable(pageConfig.currentEntries,pageConfig.currentPage);
}

// event of change number of entries
option.addEventListener('change', function() {
    pageConfig.currentEntries = parseInt(this.value);
    pageConfig.currentPage = 1;
    buildTable(pageConfig.currentEntries,pageConfig.currentPage);
});


// event of Search Data
let colomnSize = 4;
const Search = () => {
  filteredUsers = [];
  let input = document.querySelector('.searchbg .input').value;
  let filter, table, tr, td, i, txtValue;
  filter = input.toUpperCase();
  table = document.querySelector(".tbl");
  tr = table.querySelectorAll(".row");
  // tr = rowAll;
  for (i = 0; i < User.length; i++) {
    const userData = User[i];
    td = [userData.photoName, userData.albumName, userData.user];
    
    let found = 0;
    for(j = 0;j<td.length;j++){
      if (td[j]) {
        txtValue = td[j];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found++;
          // tr[i].style.display = "";
        } else {
          // tr[i].style.display = "none";
        }
      }    
    }
  
    if(found>0){
      filteredUsers.push(userData);
      // tr[i].style.display = "";
      
    }else{
      // tr[i].style.display = "none";
    }

    // if (td) {
    //   txtValue = td.textContent || td.innerText;
    //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //     tr[i].style.display = "";
    //   } else {
    //     tr[i].style.display = "none";
    //   }
    // }       
  }
  
  buildTable(pageConfig.currentEntries,pageConfig.currentPage,filteredUsers);
}

// event of choose pagination
const Choose = (input) => {
  let number = pageConfig.currentPage;
  let buttonPage = parseInt(input);

  let beforePage = document.querySelector(".page"+number);
  let currentPage = "";
  if(buttonPage!=NaN){
    currentPage = document.querySelector(".page"+buttonPage);
  }
  
  // pageConfig.currentPage =  document.querySelector(".active").innerHTML;

  let pageTotal = Math.ceil(User.length/pageConfig.currentEntries);  

if (input == "prev") {
    beforePage.classList.remove("active");
    number--;
    if(number==0){
      number=1;
    }
    let currentPage = document.querySelector(".page"+number);
    currentPage.classList.add("active");
    pageConfig.currentPage = number;
    buildTable(pageConfig.currentEntries,number)
  } else if (input == "next") {
    beforePage.classList.remove("active");
    number++;
    if(number>pageTotal){
      number=pageTotal;
    }
    let currentPage = document.querySelector(".page"+number);
    currentPage.classList.add("active");
    pageConfig.currentPage = number;
    buildTable(pageConfig.currentEntries,number)
  } else{
      
    // buildTable(pageConfig.currentEntries,buttonPage)
    if(buttonPage!=number){
      currentPage.classList.add("active");
      pageConfig.currentPage = buttonPage;
      beforePage.classList.remove("active");
      buildTable(pageConfig.currentEntries,pageConfig.currentPage)
    }  
  }
}


//event of Edit Data
const Edit = (no) => {
    document.querySelector("#editButton"+no).style.display="none";
    document.querySelector("#saveButton"+no).style.display="block";
    let row = document.querySelectorAll('.tbl .row');
    let index = no % pageConfig.currentEntries;
    if(index==0){
      index = pageConfig.currentEntries;
    }
    let cellList = row[index].querySelectorAll('.cell');
      
    let name=cellList[1];
    let position=cellList[2];
    let address=cellList[3];

    console.log(name)
      
    let name_data=name.innerHTML;
    let position_data=position.innerHTML;
    let address_data=address.innerHTML;
      
    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    position.innerHTML="<input type='text' id='position_text"+no+"' value='"+position_data+"'>";
    address.innerHTML="<input type='text' id='address_text"+no+"' value='"+address_data+"'>";

}

//Event of Save Data after Edit
const Save = (no) => {
    let name_val=document.querySelector("#name_text"+no).value;
    let position_val=document.querySelector("#position_text"+no).value;
    let address_val=document.querySelector("#address_text"+no).value;

    let row = document.querySelectorAll('.tbl .row');
    let index = no % pageConfig.currentEntries;
    if(index==0){
      index = pageConfig.currentEntries;
    }
    let cellList = row[index].querySelectorAll('.cell');
      
    let name=cellList[1].innerHTML=name_val;
    let position=cellList[2].innerHTML=position_val;
    let address=cellList[3].innerHTML=address_val;

    document.getElementById("editButton"+no).style.display="block";
    document.getElementById("saveButton"+no).style.display="none";

    let updateUser = {
      'name': name,
      'position': position,
      'address': address
    }

    User.splice(no-1, 1, updateUser);
}

//event of Delete Data
const Delete = (no) => {
    let row = document.querySelectorAll('.tbl .row');
    User.splice(no-1, 1);
    
    let index = no % pageConfig.currentEntries;
    if(index==0){
      index = pageConfig.currentEntries;
    }
    row[index].outerHTML="";
    
    let checkLastRow = document.querySelectorAll('.tbl .row');
    if(checkLastRow.length<2 && User.length!=0){ //left header only
      pageConfig.currentPage -= 1;
      console.log("cek",pageConfig.currentPage)
    }

    buildTable(pageConfig.currentEntries,pageConfig.currentPage);

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// event of change number of entries
const imgPop = (url) => {
  modal.style.display = "block";
  modalImg.src = url;
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

const resetSearch = () => {
  document.querySelector('.searchbg .input').value = "";
}

const __init = () => {
  // Initialization Function
  getUsers();
  //   buildTable(pageConfig.currentEntries,pageConfig.currentPage)  
  // resetSearch();
  // eventAddNew();
}

__init()