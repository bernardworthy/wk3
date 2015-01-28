(function() {







  function toggleModal(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }

  var signupBtn = document.querySelector('.navbar__signup');

  var closeBtn = document.querySelector('.close-icon__signup');

  var bkg = document.querySelector('.section-bkg__modal');

  var modal = document.querySelector('.section__modal');

  var body = document.querySelector('body');

  signupBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleModal(body, 'showModal');
    console.log('btn clicked');
  });

  closeBtn.addEventListener('click', function(e) {

    toggleModal(body, 'showModal');
    console.log('modalForm clicked');

  });

  var noshow = body.className.replace('showModal', '').trim();

  bkg.addEventListener('click', function(e) {

    // document.querySelector('body').className = show;

    body.className = noshow;

  });































})();
