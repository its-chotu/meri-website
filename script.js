function downloadResume() {
    alert("Upload your resume PDF and add its link here.");
}

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();
});