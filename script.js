
function myFunction(){
    alert("Congratulations you subscribed the kunal notes");
}


// ***********************for the summer sale*************
console.log("hare rama hare krishna");

const endDate = "26 May 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor((diff / 3600) % 24);
    input[2].value = Math.floor((diff / 60) % 60);
    input[3].value = Math.floor(diff % 60);
}

clock();
console.log(Date());


setInterval(
    () => {
        clock()
    },
    1000
)

// ******************* for notes parts***************************************
 shownotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class="noteCard">
                  <div class="card-body">
                    <h5 class="card-title">note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p><br>
                    <buttom id="${index}"onclick="deleteNote(this.id)" class="primary">Delete notes</buttom><br>
                  </div>
                </div >`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
     else {
        notesElm.innerHTML = `nothing please add notes`;
    }
}

function deleteNote(index){
    // console.log('i am deleting this note',index);
    
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));

    shownotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();
    // console.log('input event fired!',inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})