import express from "express"
import { newEvent } from "../controlers/events.js"
import { userLogin } from "../controlers/users.js"


const ruoter = express.Router()



ruoter.route("/creator")
    .post(userLogin, newEvent)


export default ruoter

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              