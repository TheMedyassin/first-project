console.log("Hello from JavaScript!");
document.getElementById("myBtn").addEventListener("click", () => {
  alert("You clicked the button — nice!");
});
// Select the button using its ID
const button = document.getElementById("AButton");

// Add a click event listener
button.addEventListener("click", function() {
    alert("Very Nice!");
});