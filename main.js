// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.getElementsByClassName("like-glyph")[0];
const errorModal = document.getElementById("modal");
const errorMessage = document.getElementById("modal-message");

function handleLike() {
  mimicServerCall()
    .then(() => {
      heart.classList.add("activated-heart");
      heart.textContent = FULL_HEART;
    })
    .catch((error) => {
      errorMessage.textContent = error;
      errorModal.classList.remove("hidden");
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
}

heart.addEventListener("click", handleLike);



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
