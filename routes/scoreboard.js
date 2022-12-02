const quiz = require('./quiz_db')

const db = quiz.db
const collec = db.collection("scoreboard")

async function addScore(data) {
    const parsedData = JSON.parse(data)
    collec.insertMany(parsedData)
    console.log("Inserted")
}
exports.addScore = addScore