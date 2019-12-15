//Rupinder Kaur (C0745120)

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{Book_Id:'B1',User_Id:'U1',Date_Issued:'2019-08-07',Return_Date:'2019-08-17',Librarian_Id:'L2'},
{Book_Id:'B2',User_Id:'U3',Date_Issued:'2019-07-19',Return_Date:'2019-07-29',Librarian_Id:'L3'},
{Book_Id:'B3',User_Id:'U3',Date_Issued:'2019-07-19',Return_Date:'2019-07-29',Librarian_Id:'L3'},
{Book_Id:'B4',User_Id:'U2',Date_Issued:'2019-10-10',Return_Date:'2019-10-20',Librarian_Id:'L1'},
{Book_Id:'B5',User_Id:'U4',Date_Issued:'2019-11-15',Return_Date:'2019-11-25',Librarian_Id:'L4'},
];
dbo.collection("Issued_Books").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents inserted");
db.close();
});
});
