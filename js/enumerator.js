function RangeEnumerable(fromX, toY) {
  var cancelled = false;

  var options = {
    cancel: function () {
      cancelled = true;
    }
  };

  var result = {
    enumerate: function(callback) {
      for (var x = fromX; x <= toY; ++x) {
        if (cancelled) {
          break;
        }

        callback(x, options);
      }
    }
  };

  return result;
}

var testEnum = RangeEnumerable(1, 100);

testEnum.enumerate(function (item, loop) {
  console.log(item);

  if (item > 40) {
    loop.cancel();
  }
});


function Sayable() {
  var result = {
    say: function (text) {
      console.log(text);
      return result;
    }
  };
}

Sayable().say('Hi').say('bye').



function LinqEnumerable(enumerable) {



  return {

  };
}
