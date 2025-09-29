console.log("Hello from JavaScript!");
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("AButton");
    button.addEventListener("click", function() {
        alert("Very Nice!");
    });
});