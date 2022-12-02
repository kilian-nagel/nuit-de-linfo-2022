const mong = require('mongoose')
const fs   = require('fs')
const path = require('path')
const dataDir = 'data'

require("dotenv").config()

const mongUser = process.env.mongouser
const mongPwd = process.env.mongoPwd
const mongoUrl = `mongodb+srv://${mongUser}:${mongPwd}@ndli.bksxxqh.mongodb.net/quiz_ndli?retryWrites=true&w=majority`

const states = ["Disconnected","Connected", "Connecting", "Disconnecting"]


async function mongConnect() {
    await mong.connect(mongoUrl).catch(error => {
        console.log("[Error]: " + error)
    })
    if (mong.connection.readyState > 4) {
        console.log("Can't get mongoDB connection status")
    } else {
        console.log(states[mong.connection.readyState])
    }
    return mong
}

const q_schema = new mong.Schema({
    question: String,
    answer: [{ rep: String, isRepTrue: Boolean }],
    truePercent: {type : Number, default: 0}
})

async function fillQuiz() {
    const data = fs.readdirSync(dataDir).filter(file => path.extname(file) ==='.json')
    data.forEach(element => {
        const data = fs.readFileSync(`${dataDir}/${element}`)
        const parseData = JSON.parse(data)
        for (let i = 1; i < Object.keys(parseData).length; i++) {
            console.log(parseData[i]['question'])
        }
    });
}

exports.fillQuiz = fillQuiz
exports.mongConnect = mongConnect
exports.mong = mong