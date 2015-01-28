// (function() {

  function toggleClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }

  var loginBtn = document.querySelector('.navbar__login');

  var dropdown = document.querySelector('.navbar-list__login');

  var body = document.querySelector('body');


  loginBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleClass(loginBtn.parentNode, 'show');
    console.log('btn clicked');
  });

  dropdown.addEventListener('click', function(e) {

    toggleClass(loginBtn.parentNode, 'show');
    console.log('drpdwn clicked');

  });

  var show = document.querySelector('.navbar-items').className.replace('show', '').trim();

  body.addEventListener('click', function(e) {

    document.querySelector('.navbar-items').className = show;

  });

// })();
