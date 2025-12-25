import fs from 'fs/promises'
import path from 'path'


const __dirname = path.resolve()
const usersPath = path.join(__dirname, "data", "users.json")
const recieptsPath = path.join(__dirname, "data", "reciepts.json")

export const readUsers = async () => {
    try {
        let data = await fs.readFile(usersPath)
        data = JSON.parse(data)
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}


export const validateUser = async (username, password) => {
    const users = await readUsers()
    const user = users.find(user => user.username.toUpperCase() === username.toUpperCase())
    if (user){
        if (user.password === password){
            const isValid = true
            if (user && isValid) {
                return user
            }
        }
    } else return null
}


export const writeUsersToFile = async (users) => {
    try {
        await fs.writeFile(usersPath, JSON.stringify(users, null, 2))
        console.log("succede")
    } catch (err) {
        console.log(err)
    }
}

export const readReciepts = async () => {
    try {
        let data = await fs.readFile(recieptsPath)
        data = JSON.parse(data)
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}


export const writeRecieptsToFile = async (reciepts) => {
    try {
        await fs.writeFile(recieptsPath, JSON.stringify(reciepts, null, 2))
        console.log("succede")
    } catch (err) {
        console.log(err)
    }
}



export const createReciept = async (userDetails) => {
    const reciept = {
        username: userDetails.username,
        eventName: userDetails.events,
        ticketsBought: userDetails.quantity
    }
     
    return reciept
}

