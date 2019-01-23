var path = require("path");

//require the exported object content from friend.js file
var friendsList = require("../data/friend");

module.exports = function (app) {
  var bestMatches = [];

  //the response from these routes return data in the form of JSON objects 

  //this route will match any GET HTTP requests to the url: api/friends
  app.get("/api/friends", function (req, res) {
    res.json(friendsList);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body);
    var currentFriend = req.body;

    if (friendsList.length >= 1) {
      bestMatch = {};
      bestDiff = 100;
      for (let i in friendsList) {
        totalDiff = 0;

        for (let j in currentFriend.scores) {
          totalDiff += Math.abs(currentFriend.scores[j] - friendsList[i].scores[j]);
        }
        if (bestDiff > totalDiff) {
          bestDiff = totalDiff;
          bestMatch = friendsList[i];
        }
      }
      bestMatches.push([currentFriend, bestMatch]);
      res.json(bestMatch);
    } else {
      res.json(currentFriend);
    }

    friendsList.push(currentFriend);

  });
};