
const { MongoClient, ObjectId } = require('mongodb');
require("dotenv").config();
const url =process.env.MONGO_URL
const client = new MongoClient(url)

insert_data2 = (req, res) => {
  var myobj = { Like: req.body.Like, Dislike: req.body.Dislike, post_id: req.body.post_id, user_id: res.tokendata.id };
  client.connect();
  const db = client.db("BLOG")
  db.collection('Like_Dislike').insertOne(myobj, function (err, result) {
    if (err) {
      res.send(err)}
    else {
      console.log(myobj);
      res.send(myobj)
    }
  });
}

list_data2 = async (req, res) => {

  await client.connect();
    const db = client.db("BLOG")
    const collection = db.collection('Like_Dislike');
    const findResult = (await collection.find({}).toArray())
    for (post of findResult){
      post.userDetail = await db.collection('UserDetail').find({_id: ObjectId(post.user_id)}).toArray()
      post.postDetail = await db.collection('postDetail').find({_id: ObjectId(post.post_id)}).toArray()
      // console.log(post);
    }
    res.send(findResult);

}

module.exports = { insert_data2, list_data2 }

