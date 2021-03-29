const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch')
const dotenv = require('dotenv');
dotenv.config();
app.use(function (req, res, next) {
    res.header(
        'Access-Control-Allow-Origin',
        "http://localhost:3001"
    )
    next()
})
// app.get('/', async(req, res) => {

//     await fetch('https://us.api.insight.rapid7.com/ias/v1/apps',
//     {
//         headers: { 'x-api-key': process.env.R7APIKEY
//     },
//     }).then((res)=>{
//         return res.json()
//     }).then(data => {
//         // console.log(data)
//         res.send(data)
//     })   
// })

app.get('/vulns', async(req,res) => {
    await fetch('https://us.api.insight.rapid7.com/ias/v1/vulnerabilities',
    {
        headers: { 'x-api-key': process.env.R7APIKEY
    },
    }).then((res)=>{
        return res.json()
    }).then(data => {
        res.send(data)
    })
})
app.get('/apps', async(req,res)=>{
    await fetch('https://us.api.insight.rapid7.com/ias/v1/apps',
    {
        headers: { 'x-api-key': process.env.R7APIKEY
    },
    }).then((res)=>{
        return res.json()
    }).then(data => {
        res.send(data)
    })
})
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
   
  })