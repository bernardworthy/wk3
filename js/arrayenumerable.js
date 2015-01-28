// function ArrayEnumerable(arr) {
//
//   var cancelled = false;
//
//   var options = {
//     cancel: function () {
//       cancelled = true;
//     }
//   };
//
//   var result = {
//     enumerate: function(callback) {
//       // for (var x = fromX; x <= toY; ++x) {
//       //   if (cancelled) {
//       //     break;
//         }
//
//         callback(x, options);
//       }
//     }
//   };
//
//   return result;
// }
//
// var testEnum = ArrayEnumerable(arr);
//
// testEnum.enumerate(function (item, loop) {
//   console.log(item);
//
//   if () {
//     loop.cancel();
//   }
// });

function RandEnumerable(fromX, toY) {

  var cancelled = false;

  var options = {
    cancel: function () {
      cancelled = true;
    }
  };

  var resultsArr = [];

  var result = {
    enumerate: function(callback) {
      for (var x = fromX; x <= toY; ++x) {
        // if (cancelled) {
        //   break;
        // }

        callback(x, options);
        // resultsArr.push(x);
      }
    }
  };

    return result;
    return Object.keys(result);
}

var testEnum = RandEnumerable(1, 15);
// var random = (Math.random() * testEnum);

testEnum.enumerate(function (item, loop) {
  console.log(item);

  if (item === 6) {
    loop.cancel();
  }
});
