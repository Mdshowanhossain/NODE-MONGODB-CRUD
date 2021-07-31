
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

        // findAllItem(MongoClientConnection);

        // findProjection(MongoClientConnection);

        // findItemQuery(MongoClientConnection);

        // findLimit(MongoClientConnection);

        // findDataBySorting(MongoClientConnection);
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


const findProjection = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");
    const MyCollection = MyDataBaseConnection.collection("Students");

    const ItemObj = {};

    const ItemProjection = { projection: { Roll: "" } }
    MyCollection.find(ItemObj, ItemProjection).toArray((error, result) => {

        if (error) {
            console.log('Your Data Is Failed')
        } else {
            console.log(result)
        }
    })
}


const findItemQuery = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    const QueryItem = { name: "RUMI" }

    MyCollection.find(QueryItem).toArray((error, result) => {

        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
    })
}


const findLimit = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    MyCollection.find().limit(6).toArray((error, result) => {

        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
    })
}


const findDataBySorting = (MongoClientConnection) => {

    const MyDataBaseConnection = MongoClientConnection.db("School");

    const MyCollection = MyDataBaseConnection.collection("Students");

    // const sortingData = { Roll: 1 }
    const sortingData = { Roll: -1 }

    MyCollection.find().sort(sortingData).toArray((error, result) => {

        if (error) {
            console.log(error)
        } else {
            console.log(result)
        }
    })
}



const updateDataOne = (MongoClientConnection) => {




}
