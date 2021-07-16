// clean html inside body tag
// document.body.innerHTML = ""

var table = document.querySelector('.tbl');
console.log(table);
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



/**
 * Latihan:
 *          - Buatlah setiap cell pada tambah baru menjadi field input dan ketika enter maka otomatis menjadi value dari cell tersebut
 *            (input berubah menjadi text)
 *          - Buatlah slider gambar untuk web masing-masing
 */