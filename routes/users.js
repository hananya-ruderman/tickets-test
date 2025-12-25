import express from "express"
import { buyTicket, registerUser, userLogin, userReciept } from "../controlers/users.js"


const ruoter = express.Router()



ruoter.route("/user/register")
    .post(registerUser)

ruoter.route("/tickets/buy")
    .post(userLogin, buyTicket)

ruoter.route("/:username/summary")
    .get(userLogin, userReciept)


export default ruoter