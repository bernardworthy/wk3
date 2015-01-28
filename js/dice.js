function Dice(sides) {

  if (!sides) {
    sides = 6;
  }

  var newDice = {
    value: 1,

    roll: function() {
      newDice.value = Math.floor(Math.random() * sides) + 1;
    }
  };

  newDice.roll();

  return newDice;
}

var sixSided = Dice();
var twelveSided = Dice(12);

console.log(twelveSided.value);
twelveSided.roll();

//this is an example of scope and closure
//closure: is the concept that when an object or function is returned
//out of a function, other variables that call that object or function
//can access the previous object's properties (just not variables themselves)
