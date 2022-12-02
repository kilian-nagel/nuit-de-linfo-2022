const {MongoClient}      = require('mongodb')
const fs        = require('fs')
const path      = require('path')
const dataDir   = 'data'

require("dotenv").config()

const mongUser = process.env.mongouser
const mongPwd = process.env.mongoPwd
const mongoUrl = `mongodb+srv://${mongUser}:${mongPwd}@ndli.bksxxqh.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(mongoUrl)


async function mongConnect() {
    try {
        await client.connect()
        await client.db("quiz_ndli").command({ ping: 1 });
        console.log("Connected");
    }finally {
        await client.close();
    }
}

const db = client.db('NDLI')

async function fillQuiz() {
    const data = fs.readdirSync(dataDir).filter(file => path.extname(file) ==='.json')
    let count = await db.stats().then( element => {
        return element.collections
    })
    data.forEach( async element => {
        const collec = db.collection('quiz_ndli_' + (count + 1))
        const data = fs.readFileSync(`${dataDir}/${element}`)
        const parsedData = JSON.parse(data)
        count++
        await collec.insertMany(parsedData)
        console.log("Inserted")
    });
}

exports.fillQuiz = fillQuiz
exports.mongConnect = mongConnect
exports.db = db