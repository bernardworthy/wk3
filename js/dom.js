(function() {

  //querySelector is relatively new, but is supported by IE9

  var myH1 = document.querySelector('.page-header');

  var myElements = document.querySelectorAll('.page-text');

  for (var i = 0; i < myElements.length; ++i) {
    var element = myElements[i];
    element.innerHTML = '<span style="color:blue">Shweet!</span>';
  }

  myH1.innerHTML = '<span style="color: blue">Shweet!</span>';
  myElements.innerHTML = '<span style="color: red">Shweet!</span>';


  var myBody = document.querySelector('body');

  myBody.onclick = function () {
    alert('I clicked the body');
  };

  var myDiv = document.querySelector('button-container');

  myDiv.onclick = function () {
    alert('I clicked the div');
  };

  // var myButton = document.querySelector('button');
  //
  // myButton.onclick = function () {
  //   alert('I\'ve been had!');
  // };

  function oneTimeEvent (e) {
    alert('Button clicked');

    theButton.removeEventListener('click', oneTimeEvent);
  }

  // var myButton = document.querySelector('button');
  //
  // myButton.onclick = function (e) {
  //   e.stopPropagation();
  //   alert('I\'ve been had!');
  // };


  var theButton = document.querySelector('button');

  theButton.addEventListener('click', function(e) {

    alert('I\'ve been had!');

  });

  var theButton = document.querySelector('button');

  theButton.addEventListener('click', function(e) {

    alert('I\'ve been had!');

  });


















})();
