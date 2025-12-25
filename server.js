import express from "express"
import dotenv from 'dotenv'
import users from './routes/users.js'
import events from './routes/events.js'

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the national library events" })
})
 


app.use("/users", users)
app.use("/events", events)


app.listen(PORT)