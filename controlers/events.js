// ●  eventName 
// ●  ticketsAvailable 
// ●  createdBy ( value is a username

// ●  username 
// ●  eventName 
// ●  ticketsBought

import express from "express"
import { readEvents, writeEventsToFile} from '../utils/events.js'




export const newEvent = async (req, res) => {
    try {
        const events = await readEvents()
        const eventDetails = req.body
        console.log(eventDetails)
        const isExist = events.some(event => event.eventName === eventDetails.eventName)
        if (isExist) {
            res.status(400).send("event with the same name olready exists, try another name")
        }
        const timeOfCreation = Date()
        events.push({eventName: eventDetails.eventName, ticketsAvailable: +eventDetails.ticketsForSale, createdBy: timeOfCreation})
        await writeEventsToFile(events)
        res.status(201).json({"message": "Event created successfully"})
    } catch {
        res.status(500).send("server couldn`t handle data")
    }
}

// "eventName": "string", 
//   "ticketsForSale": number, 
//   "username": "string", 
//   “password”:”string”


//     {
//     "eventName": "sipur lo pashut",
//     "ticketsAvailable": 25,
//     "createdBy": "Thu Dec 25 2025 10:53:06 GMT+0200 (Israel Standard Time)"
//   }
// ]