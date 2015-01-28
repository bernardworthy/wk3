(function () {
  var y = 6000;

  function foo() {
    var x = 400;

    function sayX() {
      alert(x);
    }

    return sayX;
  }

  var fn = foo();


})();

//Chris wraps his entire js file in a function and doesn't create
//global variables when he is coding professionally
