const drawer = document.querySelector('.drawer');
var ochiq = false;

function ochmoq() {
  if (ochiq) {
    drawer.style.setProperty('transform', 'translateY(-90vh)');
    ochiq = false;
  } else {
    drawer.style.setProperty('transform', 'translateY(0vh)');
    ochiq = true;
  }
}