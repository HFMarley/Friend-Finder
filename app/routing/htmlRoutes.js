var path = require("path")

module.exports = function (app){
//navigation routes. The response from these routes return html files to be rendered in the browser
app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}
