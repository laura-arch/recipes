import { connectToDb, disconnectToDb } from "./helpers.js"
import Recipe from "../models/model.js"
import data from "./sampleData.js"

export default async function seed(newData) {
    console.log("Hello world")
    let db = await connectToDb()
    console.log("connected!")
    // seed the database
    // await Recipe.create(data[0])
    await Recipe.create(newData)
    console.log("seeded!")
    await disconnectToDb()
    console.log("disconnected")
}

seed(data[0]);