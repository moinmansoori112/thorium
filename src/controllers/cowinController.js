let axios = require("axios");
const { response } = require("express");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
         method: "get",
         url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getCenter = async function (req, res) {
    try {
        let pin = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getWeather = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`query params are: ${q} ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArr = []

        for (i=0; i<cities.length; i++){
            
            let obj= { city : cities[i] }
            resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=746cc0753017e60a0327f4dd8a99d10a`)
            console.log(resp.data.main.temp)

            obj.temp= resp.data.main.temp
            cityObjArr.push(obj)
        }
        
        let sorted = cityObjArr.sort( function (a,b) {return a.temp - b.temp})
        console.log (sorted) 
        res.status(200).send({status : true, data:sorted})

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status: false,msg: "server error"})
    }
}

let memeHandler = async function (req,res){

    try {
         let options = {
             mehtod : "post",
             url : 'https://api.imgflip.com/caption_image?template_id=87743020&text0=K.G.F&text1=Laal singh Chaddha&username=chewie12345&password=meme@123'
       }
       let result= await axios(options)
       res.send({ data: result.data})
    }
     catch (error) {
         console.log(error)
         res.status(500).send({ status: false , msg: "server error"})
     }

}
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getCenter= getCenter
module.exports.getWeather= getWeather
module.exports.getSortedCities = getSortedCities
module.exports.memeHandler = memeHandler