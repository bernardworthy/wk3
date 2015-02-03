// (function() {



//______________________________

//Toggle Modal Section

//______________________________

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

//______________________________

//Text-Area Max Length Section

//What we need:

// - available chars variable = max-length value
// - some keyup event will --(available char variable.value)
// - .textContent = available chars
// - .setAttribute.color = red if available chars <= 0

//______________________________

  var maxChars = 50;

  var charsDiv = document.querySelector('.form-textarea');

  var charsTextArea = document.querySelector('.capped-txt');

  var usedChars;

  var availChars;

  // function updateChars() {
  //   if (availChars - usedChars < 0) {
  //     charsTextArea.style.color = "red";
  //   }
  // }

  charsTextArea.addEventListener('keyup', function(e) {

    usedChars = charsTextArea.value.length;

    availChars = maxChars - usedChars;

    document.querySelector('.available-chars').textContent = availChars + " chars remaining";

    if (availChars < 0) {
      charsTextArea.style.color = "red";
    } else {
      charsTextArea.style.color = "initial";
    }

  });





































// })();
