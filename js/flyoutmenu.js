(function() {

  function toggleClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }

  var menuBtn = document.querySelector('.menu-btn');

  var dropdown = document.querySelector('.menu-dropdown');

  var body = document.querySelector('body');


  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleClass(menuBtn.parentNode, 'show');
    console.log('btn clicked');
  });

  dropdown.addEventListener('click', function(e) {

    toggleClass(menuBtn.parentNode, 'show');
    console.log('drpdwn clicked');

  });

  var show = document.querySelector('.menu').className.replace('show', '').trim();

  body.addEventListener('click', function(e) {

    document.querySelector('.menu').className = show;

  });

})();
