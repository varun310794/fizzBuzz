exports.fizzBuzz = function (req, res) {
  if (req.body.length === 0) {
    err = { message: "Body is empty" };
    res.send(err);
  }
  var requestObject = [];

  req.body.forEach((element) => {
    if (typeof element !== "number") {
      requestObject.push("Invalid Item");
    } else {
      var checkIfMultipleOfThree = element % 3;
      var checkIfMultipleOfFive = element % 5;
      if (checkIfMultipleOfThree === 0 && checkIfMultipleOfFive === 0) {
        requestObject.push("FizzBuzz");
      } else if (checkIfMultipleOfThree === 0) {
        requestObject.push("Fizz");
      } else if (checkIfMultipleOfFive === 0) {
        requestObject.push("Buzz");
      } else {
        requestObject.push("Divided " + element + " by " + 3);
        requestObject.push("Divided " + element + " by " + 5);
      }
    }
  });

  res.json(requestObject);
};
