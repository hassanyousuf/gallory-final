// identification relevant document objects and store them
// var . . . = document.querySelector('#'); this is the first thing to do so connect each object of html to have js movments.
var mainphoto = document.querySelector('#photo');
// connecting to the id="photo"
var caption = document.querySelector('#caption');
// connecting to the id="caption"
var prev = document.querySelector('#prevbtn');
var next = document.querySelector('#nextbtn');
// this is for the next prev buttons
var count = 0;

var photos = ['images/acropolis.jpg', 'images/porto.jpg', 'images/sintra.jpg'];
// [] are used to an array and an array is a fansy container that is one big container that has sections inside of it like a box of beer bottles (has no limit to the slots inside).
 // to grag the 'porto.jpg' sepeeratly than it woud look like photos[1]; becuase numbers start at 0

 var captions = ['Acropolis, Athens', 'centro Storico, Porto', 'Grotto of the']







// fucntions that perform actions on the objects above
function nextPhoto(){
  if(count < 2) {
  count++;
}
// this is so it cant forward loop back to  beginning
  // means count = count + 1;
  mainphoto.src = photos[count];
    // document.querSelector(#'photo').src="images/sintra.jpg"; this is the longer form of linking the var
    // caption.style.backgroundColor="#ccc";
    // caption is the object and i want to change style which will be a color change to #ccc
  caption.innerHTML = captions[count];
}
// this changes the property of src. mainphoto was called from var above and src is from html.

function prevPhoto(){
  if(count >0){
  count--;}
  // this is so it isnt on a loops and cant go background loop
  mainphoto.src = photos[count];
  caption.innerHTML = caption[count];
}

// fucntion prevbtn (){
//   mainphoto.src = 'images/'
// }




// listeners and events

next.addEventListener('click', nextPhoto, false);
prev.addEventListener('click', prevPhoto, false);
