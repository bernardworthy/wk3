function toggleClass(element, className) {
  var currentClasses = element.className;

  if (currentClasses.indexOf(className) >= 0) {
    element.className = currentClasses.replace(className, '').trim();
  } else {
    element.className += ' ' + className;
  }
}

var wkspcBtn = document.querySelector('.navbar__workspaces');

var wkspcDropdown = document.querySelector('.navbar-list__workspaces');

var body = document.querySelector('body');

wkspcBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleClass(wkspcBtn.parentNode, 'show');
  console.log('btn clicked');
});

wkspcDropdown.addEventListener('click', function(e) {

  toggleClass(wkspcBtn.parentNode, 'show');
  console.log('drpdwn clicked');

});

// var show = document.querySelector('.navbar-items__left').className.replace('show', '').trim();
//
// body.addEventListener('click', function(e) {
//
//   document.querySelector('.navbar-items__left').className = show;
//
// });

// ___________________________________
//
// Text-Area Auto Grow Section
// ____________________________________
//
// My version
// _________________________

var charsTextArea = document.querySelector('.list-item-textarea');

var psuedo;

charsTextArea.addEventListener('keyup', function(e) {


  psuedo = document.querySelector('.list-item__psuedo');

  psuedo.innerHTML = charsTextArea.value;

  console.log(psuedo.clientHeight);

  var currentHeight = psuedo.clientHeight;

  charsTextArea.style.height = currentHeight + 20 + "px";

});
