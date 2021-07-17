// clean html inside body tag
// document.body.innerHTML = ""

var tableData = [
{
  'name': 'Steven',
  'position': 'Manager',
  'address': 'Surabaya',
},
{
  'name': 'Shayla',
  'position': 'Admin',
  'address': 'Bandung',
},
{
  'name': 'John',
  'position': 'User',
  'address': 'Jakarta',
},
{
  'name': 'Claudi',
  'position': 'Sales',
  'address': 'Semarang',
},
{
  'name': 'Angelica',
  'position': 'Accounting',
  'address': 'Tuban',
},
{
  'name': 'Zaidan',
  'position': 'Supervisor',
  'address': 'Malang',
},
{
  'name': 'Ardo',
  'position': 'Assistant',
  'address': 'Yogya',
},
{
  'name': 'Gilang',
  'position': 'Admin',
  'address': 'Semarang',
},
{
  'name': 'Babe',
  'position': 'Supervisor',
  'address': 'Bandung',
},
{
  'name': 'Golang',
  'position': 'Sales',
  'address': 'Bandung',
},
{
  'name': 'Vivi',
  'position': 'K3',
  'address': 'Makassar',
},
{
  'name': 'Nopan',
  'position': 'Manager',
  'address': 'Solo',
},
{
  'name': 'Maria',
  'position': 'HRD',
  'address': 'Aceh',
},
{
  'name': 'Iza',
  'position': 'Accounting',
  'address': 'Jakarta',
},
{
  'name': 'Uriah',
  'position': 'Sales',
  'address': 'Jember',
}
];


var table = document.querySelector('.tbl');

function buildTable() {
  
  table.innerHTML=`
  <div class="row">
          <div class="cell header">No</div>
          <div class="cell header">Name</div>
          <div class="cell header">Position</div>
          <div class="cell header">Address</div>
        </div>
  `;

  for (let i=0 ; i<tableData.length ; i++) {
    table.innerHTML += `
    <div class="row">
       <div class="cell num">${i+1}</div>
       <div class="cell">${tableData[i].name}</div>
       <div class="cell">${tableData[i].position}</div>
       <div class="cell">${tableData[i].address}</div>
    </div>
    `
  }

}

buildTable();

var button1 = document.querySelector('#addButton');

// event of click
button1.addEventListener('click', function (e) {
    console.log("e:", e);
    var number = document.querySelectorAll('.num');
    var lastNumber =  parseInt(number[number.length-1].innerHTML);
    // lastNumber = parseInt(lastNumber);

    table.innerHTML += `
    <div class="row">
      <div class="cell num">${lastNumber+1}</div>
      <div class="cell"><input class="input" type="text" autocomplete="off"></div>
      <div class="cell"><input class="input" type="text" autocomplete="off"></div>
      <div class="cell"><input class="input" type="text" autocomplete="off"></div>
    </div>
    `
})

// event of save
function Save() {
  var input = document.querySelectorAll('.row .input');
  var lastName = input[input.length-3].value;
  var lastPosition = input[input.length-2].value;
  var lastAddress = input[input.length-1].value;
  console.log(lastName);

  var cell = document.querySelectorAll('.tbl .row .cell');

  var name = cell[cell.length-3];
  name.innerHTML=lastName;

  var position = cell[cell.length-2];
  position.innerHTML=lastPosition;

  var address = cell[cell.length-1];
  address.innerHTML=lastAddress;
  
}


let option = document.querySelector(".entry");

// Initial State (one time only in the first)
let entries = parseInt(option.value);

// display pagination total based on entries
paginationTotal(entries);

let iActive = document.querySelector(".active");
let number = iActive.innerHTML;
tableBasedEntries(entries,number)


option.addEventListener('change', function() {
  entries=parseInt(this.value);
  paginationTotal(entries);
  iActive = document.querySelector(".active");
  number = iActive.innerHTML;
  tableBasedEntries(entries,number)
});


// event of search
let colomnSize = 4;
function Search() {
  let input = document.querySelector('.searchbg .input').value;
 
  console.log("input search:",input);

  let cell = document.querySelectorAll('.tbl .row .cell');
  let row = document.querySelectorAll('.tbl .row');

  let filter, table, tr, td, i, txtValue;
  filter = input.toUpperCase();
  table = document.querySelector(".tbl");
  tr = table.querySelectorAll(".row");
  console.log(tr);
  for (i = 1; i < tr.length; i++) {
    td = tr[i].querySelectorAll(".cell")[1];
    console.log(td);
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }

}

// event of choose pagination
function Choose(input) {
  // let pageTotal = 5;
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let pageList = document.querySelectorAll(".page");
  let iActive = document.querySelector(".active");
  let number = iActive.innerHTML;

  if (input == "page1") {
      let current = 1;
      
      tableBasedEntries(entries,current)

      if(current!=number){
        pageList[current-1].classList.add("active");
        pageList[number-1].classList.remove("active");
      }  
  } else if (input == "page2") {
      let current = 2;
      
      tableBasedEntries(entries,current)
     
      if(current!=number){
        pageList[current-1].classList.add("active");
        pageList[number-1].classList.remove("active");
      }  
  } else if (input == "page3") {
      let current = 3;
   
      tableBasedEntries(entries,current)
      if(current!=number){
        pageList[current-1].classList.add("active");
        pageList[number-1].classList.remove("active");
      }
  } else if (input == "page4") {
      let current = 4;
   
      tableBasedEntries(entries,current)
      if(current!=number){
        pageList[current-1].classList.add("active");
        pageList[number-1].classList.remove("active");
      }
  } else if (input == "page5") {
      let current = 5;
 
      tableBasedEntries(entries,current)
      if(current!=number){
        pageList[current-1].classList.add("active");
        pageList[number-1].classList.remove("active");
      }
  } else if (input == "page6") {
    let current = 6;

    tableBasedEntries(entries,current)
    if(current!=number){
      pageList[current-1].classList.add("active");
      pageList[number-1].classList.remove("active");
    }
} else if (input == "page7") {
  let current = 7;

  tableBasedEntries(entries,current)
  if(current!=number){
    pageList[current-1].classList.add("active");
    pageList[number-1].classList.remove("active");
  }
} else if (input == "prev") {
    pageList[number-1].classList.remove("active");
    number--;
    if(number==0){
      number=pageTotal;
    }
    console.log(number);
    pageList[number-1].classList.add("active");
   
  } else if (input == "next") {
    pageList[number-1].classList.remove("active");
    number++;
    if(number>pageTotal){
      number=1;
    }
    pageList[number-1].classList.add("active");
    
  }
}

function tableBasedEntries(entries,current){
  let countRow=0;
  buildTable();
  let row = document.querySelectorAll('.tbl .row');
      for(let i=(1+(entries)*(current-1));i<(entries+1)+(entries)*(current-1);i++){
        if(i<=row.length-1){
          console.log(i);
          let cellList = row[i].querySelectorAll('.cell');

          if(countRow==0){
            table.innerHTML = `
            <div class="row">
              <div class="cell header">No</div>
              <div class="cell header">Name</div>
              <div class="cell header">Position</div>
              <div class="cell header">Address</div>
            </div>
            `
          }
          
          table.innerHTML += `
          <div class="row">
             <div class="cell num">${cellList[0].innerHTML}</div>
             <div class="cell">${cellList[1].innerHTML}</div>
             <div class="cell">${cellList[2].innerHTML}</div>
             <div class="cell">${cellList[3].innerHTML}</div>
          </div>
          `
          countRow++;
        }
        
      }
}

function paginationTotal(entries){
  let pagination = document.querySelector(".pagination_section");
pagination.innerHTML = `
      <a href="#" onclick="Choose('prev')" class="prev"><< Previous</a>
`
let pageTotal = Math.ceil(tableData.length/entries);

for(let i=0;i<pageTotal;i++){
  if(i==0){
    pagination.innerHTML += `
    <a href="#" onclick="Choose('page${i+1}')" class="page active">${i+1}</a>
  `
  }else{
    pagination.innerHTML += `
    <a href="#" onclick="Choose('page${i+1}')" class="page">${i+1}</a>
    `
  }
 
}

pagination.innerHTML += `
  <a href="#" onclick="Choose('next')" class="next">Next >></a>
  `

}

/**
 * Latihan:
 *          - Buatlah setiap cell pada tambah baru menjadi field input dan ketika enter maka otomatis menjadi value dari cell tersebut
 *            (input berubah menjadi text)
 *          - Buatlah slider gambar untuk web masing-masing
 */