// our actual data eg. array of recipe objects

import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    ingredients: { type: String, required: false },
    tags: [String]
})

export default mongoose.model('Recipe', recipeSchema)