
let fmouse = document.querySelectorAll(".txnav")

fmouse.forEach(input => {
	input.addEventListener("mouseover", function (e) {
        input.classList.add("bgyellow")
        console.log(e);
    })
    
	input.addEventListener("mouseout", function () {
        input.classList.remove("bgyellow")
    })
});



// fmouse.forEach(input => {
// 	input.addEventListener("click", function () {
//         input.classList.add("bgblue")
//     })
// });


let fclickform = document.querySelectorAll(".input")

function addcl(){
	let parent = this.parentNode.parentNode
	parent.classList.add("borderblue")
}

function remcl(){
	let parent = this.parentNode.parentNode
	if(this.value == ""){
		parent.classList.remove("borderblue")
	}
}

fclickform.forEach(input => {
	input.addEventListener("focus",addcl)
	input.addEventListener("blur",remcl)
})

let dateform = document.querySelector("#form_birth")

// dateform.setAttribute("type","date")

dateform.addEventListener("focus", function () {
    dateform.setAttribute("type","date")
})

dateform.addEventListener("blur", function () {
    dateform.removeAttribute("type","date")
})

// function adddate(){
// 	let parent = this.parentNode.parentNode
// 	parent.setAttribute("type","date")
// }

// function remdate(){
// 	let parent = this.parentNode.parentNode
// 	if(this.value == ""){
// 		parent.removeAttribute("type","date")
// 	}
// }

//     dateform.addEventListener("focus",adddate)
//     dateform.addEventListener("blur",remdate)

const array_name = []

function Submit() {
    let name = document.querySelector("#form_name");
    let birth = document.querySelector("#form_birth");
    let address = document.querySelector("#form_address");
    
    if (name.value != "") {
    let menu1 = document.querySelector("#out_name")
    menu1.innerHTML = name.value
    }
    if (birth.value != "") {
    let menu2 = document.querySelector("#out_birth")
    menu2.innerHTML = Date_indexesOf(birth.value)
    console.log(Date_indexesOf(birth.value))
    }
    if (address.value != "") {
    let menu3 = document.querySelector("#out_address")
    menu3.innerHTML = address.value
    }
    // console.log(birth.value)

    ChangePage("in_home")

    name.value = ""
    birth.value = ""
    address.value = ""
    
    // array_name.push(name)
    // if(array_name.length>1){
    //     document.querySelector("#form_name").setAttribute("autocomplete","off");
    // }
    // document.querySelector("#form_name").setAttribute("autocomplete","on");
}

function ChangePage(input) {
    let pageForm = document.querySelector("#FormContent")
    let pageHome = document.querySelector("#HomeContent")

    if (input == "in_form") {
        pageForm.classList.remove("hidden")
        pageHome.classList.add('hidden')
    } else if (input == "in_home") {
        pageForm.classList.add("hidden")
        pageHome.classList.remove('hidden')
    } else {
        alert("Page is not available!!")
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
   slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}