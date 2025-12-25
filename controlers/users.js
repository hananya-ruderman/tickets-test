//   username 
//   password 
import express from "express"
import { readUsers, validateUser, writeUsersToFile, readReciepts, writeRecieptsToFile, createReciept} from '../utils/users.js'
import { readEvents, writeEventsToFile} from '../utils/events.js'


export const userLogin = async (req, res, next) => {
    const {username, password} = req.body
    try {
        const user = await validateUser(username, password)
        if (user) {
            next()
            return
        } else {
            res.status(404).send("user not found")
        }    
    } catch {
        res.status(500).send("server couldn`t extract data")
    }
}


export const registerUser = async (req, res) => {
    try {
        const users = await readUsers()
        const userDetails = req.body
        console.log(userDetails)
        const isExist = users.some(user => user.username === userDetails.username)
        if (isExist) {
            res.status(400).send("the user olready registred")
        }
        users.push(userDetails)
        await writeUsersToFile(users)
        res.status(201).json({"message": "User registered successfully"})
    } catch {
        res.status(500).send("server couldn`t handle data")
    }
}


export const buyTicket = async (req, res) => {
    try {
        const events = await readEvents()
        const requestDetails = req.body
        const requestedEvent = events.find(event => event.eventName.toUpperCase() === requestDetails.eventName.toUpperCase())
        if (!requestedEvent) {
            res.status(404).send("there is no sach an event")
        }
        if (requestedEvent.ticketsAvailable < requestDetails.quantity){
            res.status(400).send("not enough tickets")
        }
        const eventsArrey = events.filter(event => event.eventName != requestDetails.eventName)
        const newquantity = +requestedEvent.ticketsAvailable - +requestDetails.quantity
        requestedEvent.ticketsAvailable = newquantity
        eventsArrey.push(requestedEvent)
        const userD = {
    "eventName": "sipur pashut", 
    "quantity": 4,
    "username": "hananya",
}
        createReciept(userD)
        await writeEventsToFile(eventsArrey)
        res.status(201).json({ "message": "Tickets purchased successfully"})
    } catch {
        res.status(500).send("server couldn`t handle data")
    }
}

export const userReciept = async (req, res) => {
    try {
        const reciepts = await readReciepts()
        const {username} = req.params
        const user = data.filter(user => user.username === userDetails.username)
        if (!user) {
            res.status(400).send("no reciepts for this user")
        }
        const totalQantity = user.reduce(() => {
            num, user.ticketsBought
        } )
        const totale = []
        const totalEvents = user.foreach(totale.push(userDetails.eventName))
        const avarage = totalQantity/totale.length
        const userData = {
            "totalTicketsBought": totalQantity, 
            "events": totalEvents, 
            "averageTicketsPerEvent": userData 
            }
        res.status(200).json(userData)
    } catch {
        res.status(500).send("server couldn`t handle data")
    }
}
