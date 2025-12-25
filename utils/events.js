import fs from 'fs/promises'
import path from 'path'


const __dirname = path.resolve()
const usersPath = path.join(__dirname, "data", "events.json")

export const readEvents = async () => {
    try {
        let data = await fs.readFile(usersPath)
        data = JSON.parse(data)
        return data
    } catch (err) {
        console.log(err)
        return []
    }
}



export const writeEventsToFile = async (events) => {
    try {
        await fs.writeFile(usersPath, JSON.stringify(events, null, 2))
        console.log("succede")
    } catch (err) {
        console.log(err)
    }
}