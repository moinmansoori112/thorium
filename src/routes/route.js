const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// QUERY PARAMS
// localhost:3000/get-query-1?myCoolVar=24&xyz=hiFunctionUP
router.get("/get-query-1", function (req, res) {
    let data = req.query
    console.log(data)
    res.send({ data: data, status: true })
})


// take marks in req.query variable named "marks" and send "pass" if > 40 else "fail"
router.get("/get-query-2", function (req, res) {
    let marks = req.query.marks
    // { marks: '80'}

    let result = marks > 40 ? "pass" : "fail"
    // let result = "fail"
    // if (marks> 40) { result = "pass" }
    // // else { result = "fail" }

    res.send({ result: result, status: true })
})

//query params are also available in post request
router.post("/post-query-1", function (req, res) {
    let data = req.query
    console.log(data)
    res.send({ result: data, status: true })
})

let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]
//filter out all the numbers that are greater than input( input is received from query params)
router.post("/post-query-2", function (req, res) {
    //CODE HERE
    let input= req.query.input
    let finalArr= myArr.filter( ele => ele > input)
    // let finalArr=[]
    // for (i=0 ; i<myArr.length; i++) {
    //     if ( myArr[i] > input )      finalArr.push(myArr[i]) 
    // }
    res.send({ result: finalArr , status: true })
})


// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

//  take this as sample for array of persons:
let persons= [
    {
    name: "Moin",
    age: 10,
    votingStatus: false
},
{
    name: "Atif",
    age: 20,
    votingStatus: false
},
{
    name: "Modi",
    age: 70,
    votingStatus: false
},
{
    name: "Rahul",
    age: 5,
    votingStatus: false
},
{
    name: "Akhilash",
    age: 40,
    votingStatus: false
}
]

router.post("/post-query-3", function(req,res){
    let input = req.query.input;
    let finalArray = [];
for ( let i = 0; i < persons.length; i++){
    if(persons[i].age>= input){
        persons[i].votingStatus= true
        finalArray.push(persons[i])

    }
}
if (finalArray.length > 0){
    return res.send(finalArray)
}
})
module.exports = router;