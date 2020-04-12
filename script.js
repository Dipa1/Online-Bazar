var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var typed = new Typed('.text1', {
  strings: [
    'WELCOME',
    'Bazar-Shodai',
    'Online Shop',
    'Free-Delivery'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});