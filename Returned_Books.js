//Rupinder Kaur (C0745120)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{Book_Id:'B1',User_Id:'U1',Date_Returned:'2019-08-15',Fine:'0'},
{Book_Id:'B2',User_Id:'U3',Date_Returned:'2019-07-24',Fine:'0'},
{Book_Id:'B3',User_Id:'U3',Date_Returned:'2019-07-24',Fine:'0'},
{Book_Id:'B4',User_Id:'U2',Date_Returned:'2019-10-30',Fine:'20'},
{Book_Id:'B5',User_Id:'U4',Date_Returned:'2019-11-27',Fine:'4'},
];
dbo.collection("Returned_Books").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents inserted");
db.close();
});
});
