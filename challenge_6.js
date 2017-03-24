/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers){
  this.naturalNumbers = naturalNumbers;
}

SumOfASquare.prototype.sumOfSquares = function() {
  var sum = 0;
  for (var i = 0; i <= this.naturalNumbers; i++) {
    sum += i * i;
  }
  return sum;
};

SumOfASquare.prototype.squareOfTheSums = function() {
  var sum = 0;
  for (var i = 0; i <= this.naturalNumbers; i++) {
    sum += i;
  }
  sum *= sum;
  return sum;
};
// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
