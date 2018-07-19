// identification relevant document objects and store them
// var . . . = document.querySelector('#'); this is the first thing to do so connect each object of html to have js movments.
var mainphoto = document.querySelector('#photo');
// connecting to the id="photo"
var caption = document.querySelector('#caption');
// connecting to the id="caption"
var prev = document.querySelector('#prevbtn');
// this is for the next prev buttons
var next = document.querySelector('#nextbtn');
var thumbs = document.querySelectorAll('.thumb');
// this is for clicking on number directly to move from images
var count = 0;

photos = ['100%_overdrive.jpg', '100%_portrait.jpg', '100%_startup.jpg', 'allmight_final.jpg', 'boku_allmight.jpg', 'doku_izuki.jpg', 'katsuki.jpg', 'onepunchman_king_cyborg.jpg', 'onepunchman_100%.jpg'];
 // photos = ['acropolis.jpg', 'porto.jpg', 'sintra.jpg'];
// [] are used to an array and an array is a fansy container that is one big container that has sections inside of it like a box of beer bottles (has no limit to the slots inside).
 // to grag the 'porto.jpg' sepeeratly than it woud look like photos[1]; becuase numbers start at 0
var captions = ['Mob Psycho 100%', 'Mob Psycho Shigeo Kageyama', 'shigeon ruthless', 'Allmight Final Battle', 'Boku and Allmight', 'Boku and Izuki', 'Katsuki', 'Onepunchman and Mob Psycho', 'Onepunchman, king, and onepunchman_king_cyborg'];

/*
comment:
if(statment is true){
  do this if it is true
} else if (something else is true){
  do the other thing
}
*/
// if () only works as a true or false so use ==, beucase it is a comparison

// fucntions that perform actions on the objects above

function nextPhoto() {
  count++;
  if(count == photos.length) {
    // to say count the photos that are there so that the photos can be changed without changing the code
  count = 0;
}
// this is so it cant forward loop back to  beginning
  // means count = count + 1;
  mainphoto.src = 'assets/'+photos[count];
    // document.querSelector(#'photo').src="images/sintra.jpg"; this is the longer form of linking the var
    // caption.style.backgroundColor="#ccc";
    // caption is the object and i want to change style which will be a color change to #ccc
  caption.innerHTML = captions[count];
}
// this changes the property of src. mainphoto was called from var above and src is from html.

function prevPhoto(){
  count--;
  if(count < 0){
    count = photos.length - 1;
    // photos.length - 1 means a changing amount of photos -1
}
  // this is so it isnt on a loops and cant go background loop
  mainphoto.src =  'assets/'+photos[count];
  caption.innerHTML = captions[count];
}

// fucntion prevbtn (){
//   mainphoto.src = 'images/'
// }

function showPhotoById(evt){
  var pick = evt.target.id;
  mainphoto.src = 'assets/'+photos[pick];
  caption.innerHTML = captions[pick];count = pick;
  count = pick;

}

function showPhotoByData(){
  var pick = this.dataset.pick;
  console.log(pick);
  mainphoto.src = 'assets/'+photos[pick];
  caption.innerHTML = captions[pick];
  count = pick;
}


for(var i = 0; i < thumbs.length; i++){
  // i++ means go up by one each time
  thumbs[i].addEventListener('click', showPhotoByData, false);

}


// listeners and events

next.addEventListener('click', nextPhoto, false);
prev.addEventListener('click', prevPhoto, false);
