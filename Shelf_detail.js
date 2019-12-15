//Rupinder Kaur (C0745120)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{Shelf_No:'S1',Category_Id:'C5',Row_No:'2'},
{Shelf_No:'S2',Category_Id:'C4',Row_No:'4'},
{Shelf_No:'S3',Category_Id:'C2',Row_No:'7'},
{Shelf_No:'S4',Category_Id:'C3',Row_No:'9'},
{Shelf_No:'S5',Category_Id:'C1',Row_No:'10'}
];
dbo.collection("Shelf_detail").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents inserted");
db.close();
});
});
