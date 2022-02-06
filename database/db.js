var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const db=MongoClient.connect(url)
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BLOG");
  dbo.createCollection("UserDetail", function(err, res) {
    if (err){
    console.log("UserDetail already created!");
    db.close();}
    else{
      console.log("UserDetail Collection  created!");
    }
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BLOG");
  dbo.createCollection("postDetail", function(err, res) {
    if (err){
    console.log("postDetail already created!");
    db.close();}
    else{
      console.log("postDetail Collection  created!");
    }
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BLOG");
  dbo.createCollection("Like_Dislike", function(err, res) {
    if (err){
    console.log("Like_Dislike already created!");
    db.close();}
    else{
      console.log("Like_Dislike collection created!");
    }
  });
});

module.exports=db