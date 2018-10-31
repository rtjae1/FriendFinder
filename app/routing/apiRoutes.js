var surveyData = require("../data/friends.js");

module.exports = function(app) {
  var scoreArray = [];
  var lastArray = [];
  
    app.get("/api/friends", function(req, res) {
      res.json(surveyData);
    });
  
    app.post("/api/friends", function(req, res) {

      var masterLead = function (inArr) {
        lastArray.push(inArr.pop());
        lastArray.forEach(function(item) {
            lastScore = (item.scores).map(Number) ;
            var sumOf = lastScore.reduce(function(acc, cur) {return acc + cur}, 0)
            var lastEntrySum = sumOf;
            secGuy(inArr, lastEntrySum)
        });
      };
      
      var secGuy = function(inSecArr, inOperator) {
        var firstOperator = true;
        var operator = inOperator;
        var currentOperator = 0;
        inSecArr.forEach(function(element) {
            scoreArray = (element.scores).map(Number);
            objName = element.name;
            objImg = element.photo;
            var sumArrayAll = scoreArray.reduce(function(acc, cur) {return acc + cur}, 0)  
            var compare = Math.abs(sumArrayAll - operator);
            if (firstOperator === true){
                currentOperator = compare;
                firstOperator = false;
            }
            if (compare <= currentOperator){
                currentOperator = compare;
                winner = sumArrayAll;
                winnerName = objName;
                winnerImg = objImg;
            }
            else {return true}
        });
        res.json({name: winnerName, photo: winnerImg})
    };

    if (surveyData) {
      surveyData.push(req.body);
      //res.json(surveyData);
      let newArray = surveyData.slice();
      masterLead(newArray);
    }

  });
  
  };
