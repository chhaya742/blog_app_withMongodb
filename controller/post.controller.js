const { MongoClient, ObjectId } = require('mongodb');
require("dotenv").config();
const url = process.env.MONGO_URL
const client = new MongoClient(url)


insert_data1=(req,res) =>{
    var myobj = { Title: req.body.Title,Description:req.body.Description,user_id:res.tokendata.id};
      client.connect();
      const db = client.db("BLOG")
      db.collection('postDetail').insertOne(myobj,function(err, result) {
          if (err){
              res.send(err)
          }
          else{
            
          console.log(myobj);
          res.send({success:"post successfuly",user:myobj})
          }
        });
  }
list_data1=async(req,res)=>{
    await client.connect();
    const db = client.db("BLOG")
    const collection = db.collection('postDetail');
    const findResult = (await collection.find({}).toArray())
    for (post of findResult){
      post.userDetail = await db.collection('UserDetail').find({_id: ObjectId(post.post_id)}).toArray()
      console.log(post);
    }
    res.send(findResult);
}

module.exports={insert_data1,list_data1}


