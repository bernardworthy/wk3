var str = ('A cat, a mouse, and the Cat Captain.');

function wordCount(str) {
  // var splitArray = str.split(' ');

  var patt1 = /[,. ]/g;

  var splitArray = str.split(patt1);

  var arrayWord = {};

  splitArray.forEach(function (item) {
    if (arrayWord[item] === undefined) {
      arrayWord[item] = 1
    } else {
      arrayWord[item] = (arrayWord[item] + 1);
    }
});

  return arrayWord;
}
