function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (width >= 0) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}
window.onload = move;
function showYes(){
  document.getElementById('ad-yes').style.display = "block";
}
