// node-mongo
// node-mongo123456


const MongoClient = require('mongodb').MongoClient;

const URL = "mongodb+srv://node-mongo:node-mongo123456@cluster0.buk2o.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(URL, (error, MongoClientConnection) => {

    if (error) {
        console.log('Your Connection is Failed');
    } else {
        console.log('Your Connection is Success');

        // insertData(MongoClientConnection);

        // deleteDataOne(MongoClientConnection);

        // dataDeleteMany(MongoClientConnection);

        // findOneItem(MongoClientConnection);

        // findSpecificElement(MongoClientConnection);

        findAllItem(MongoClientConnection);
    }
})

const insertData = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    // var myData = { "name": "SOHAN", "Roll": "01", "Class": "ten", "City": "Khulna" }
    const myData = { name: "RUMI", age: "33", Roll: "04", Class: "Five" }

    MyCollection.insertOne(myData, (error) => {
        if (error) {
            console.log('Data Inserted Failed');
        } else {
            console.log('Data Inserted Success');
        }
    })
}


const deleteDataOne = (MongoClientConnection) => {

    const myDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = myDataBaseConnection.collection("Students");

    const deleteItem = { Roll: "01" }

    MyCollection.deleteOne(deleteItem, (error) => {
        if (error) {
            console.log('Data Delete Failed');
        } else {
            console.log('Data Delete Success');
        }
    })
}


const dataDeleteMany = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    MyCollection.deleteMany((error) => {
        if (error) {
            console.log('Data Delete Failed');
        } else {
            console.log('Data Delete Success');
        }
    })
}


const findOneItem = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    const findItem = {};

    MyCollection.findOne((error, result) => {

        if (error) {
            console.log(error)
        } else if (result) {
            console.log(result)
        }
    })
}



const findSpecificElement = (MongoClientConnection) => {


    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyConnection = MyDataBaseConnection.collection("Students");

    const findSpecificItem = { Class: "Nine" }

    MyConnection.findOne(findSpecificItem, (error, result) => {

        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
    })
}



const findAllItem = (MongoClientConnection) => {


    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyConnection = MyDataBaseConnection.collection("Students");

    MyConnection.find().toArray((error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
    })
}