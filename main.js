// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!

const makeHidden = () => {  
  let modHide = document.querySelector("#modal");
  modHide.classList.add("hidden");
}

makeHidden();

function heartFunction(num){
  let heart = document.querySelectorAll(".like-glyph")[num];
  heart.addEventListener("click", () => {
    mimicServerCall()
    .then(() => {
      if(heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
       }
      else{
        heart.innerText = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }

    })
    .catch((error) => {
      let modHide = document.querySelector("#modal");
      modHide.classList.remove("hidden");
      setTimeout(() => modHide.classList.add("hidden"), 3000);

    })
  
  
  
  
  });



}

heartFunction(0)
heartFunction(1)
heartFunction(2)
heartFunction(3)
heartFunction(4)





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
