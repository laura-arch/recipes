import { connectToDb, disconnectToDb } from "./helpers.js"
import Recipe from "../models/model.js"

export default async function readRecipes() {
    console.log("Hello world")
    await connectToDb()
    console.log("connected!")
    // read the database
    let data = await Recipe.find()
    console.log(data);
    console.log("Read!")
    await disconnectToDb()
    console.log("disconnected")
    return data;
}

readRecipes();