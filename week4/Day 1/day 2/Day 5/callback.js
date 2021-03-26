

document.queryselector("#callback-btn")
.addEventListener("click", function() {    
  console.log("Don't be Afraid, Click Me!");
});




function processThis(message, callback) { 
  console.log("Running function first with message: " + message); 

  if (typeof callback == "function") 
      callback(); 
} 

processThis("Welcome Everyone", function callFunction() { 
  console.log("Welcome Home.") 
}); 

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "index.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}