// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  // Add sequelize code to get all and return them as JSON
  app.get("/api/fishing", function(req, res) {
    db.Fish.findAll({})
        .then(function(results) {
            // results are available to us inside the .then
            res.json(results);  
        });
    });

  // POST route for saving a new 
  app.post("/api/fishing", function(req, res) {
    db.Fish.create(req.body).then(function(dbFish) {
      res.json(dbFish);
    });
  });

}