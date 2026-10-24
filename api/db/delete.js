import { connectToDb, disconnectToDb } from "./helpers.js"
import Recipe from "../models/model.js"
import data from "./sampleData.js"

async function deleteFromDb() {
    try {
        let db = await connectToDb()
        console.log("connected!")
        // delete the recipe
        await Recipe.deleteOne({ id: 1 })
        console.log("deleted!")
        await disconnectToDb()
        console.log("disconnected")
    } catch {
        console.log("failed to delete from DB")
    }
}

deleteFromDb();