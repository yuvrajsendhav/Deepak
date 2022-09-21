const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://localhost:27017/" ;
const DATABASE_NAME = "feedbackinfo";
var app = Express();
var cors = require('cors');
const { request } = require("express");
app.use(cors())
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, collection,collection2;
app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("feed back");
        collection2 = database.collection("feedBack");

        console.log("Connected to `" + DATABASE_NAME + "`!");
    });

});
app.get("/feed/getall",     (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/feed/get/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }   
        response.send(result);
    });
});

//for login
app.post('/signin', (request, response)=>{
    collection.findOne(request.body, (error, result)=>{
        if(error) return response.status(500).send(error);
       
        var s="";
        if(!result){
            s='0';
            console.log('login fail')
                       
        }
        else{
            
           s='1'
           console.log('login'+" "+result.name)
        }
        let responseData={
            message:s
        } 
        
        response.send(responseData);
    })
})


app.post("/feed/postdata", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

app.put("/feed/update/:id", (request, response) => {
    collection.updateOne({ "_id": new ObjectId(request.params.id) },{$set:request.body}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});
app.delete("/feed/:id", (request, response) => {
    collection.remove({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    }); 
});


//For FeedBack
//for find all
app.get('/getall/data', (request, response)=>{
    collection2.find({}).toArray((err, result)=>{
        if(err) return response.status(500).send(err);
        response.send(result);
    });
});

//find by id
app.get("/get/data/:id", (request, response) => {
    collection2.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }   
        response.send(result);
    });
});
//for insert data
app.post('/newdata', (request, response)=>{
    collection2.insert(request.body, (err, result)=>{
        if(err) return response.status(500).send(err)
        response.send(result.result);
    });
});

//for update (edit) data 


app.put('/updatedata/:id', (request, response)=>{
    collection2.updateOne({'_id': new ObjectId(request.params.id)}, {$set: request.body}, (err, result)=>{
        if(err) return response.status(500).send(err);
        response.send(result.result)
    });
});

// for delete
app.delete('/dlt/:id', (request, response)=>{
    collection2.remove({'_id': new ObjectId(request.params.id)}, (err, result)=>{
        if(err) return response.status(500).send(err);
        
        response.send(result.result);
    });
});

//for feedback one
app.post('/feed/one', (request, response)=>{
    collection2.findOne(request.body, (error, result)=>{
        if(error) return response.status(500).send(error);
        response.send(result);
    })
})