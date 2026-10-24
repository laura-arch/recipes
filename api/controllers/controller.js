// logic of our application
// extracts the information from the model

// import data from "../db/data/data.js";

import readRecipes from "../db/read.js";
import seed from "../db/seed.js"

export async function index(req, res) {
    // res.send(data);
    try {
        console.log("hi")
        const data = await readRecipes();
        console.log(data);
        res.send(data)
    } catch {
        console.log("it failed")
        res.send("it failed")
    }
    // const data = await readRecipes();
    // console.log(data);
    // res.send(data);
};

export function create(req, res) {
    const newRecipe = req.body;
    data.push(newRecipe);
    res.status(201).json(data);
    // try {
    //     seed(newRecipe);
    //     res.status(201).json(data);
    // } catch {
    //     res.status(502).body("https://http.cat/status/502");
    // }
};

export function show(req, res) {
    // const recipeName = req.params.name;
    // const recipe = data.find(recipe => recipeName == recipe.name);
    const recipeId = Number(req.params.name);
    const recipe = data.find(recipe => recipeId === recipe.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found "});
    res.status(200).json(recipe);
};

export function remove(req, res) {
    const recipeName = req.params.name;
    const recipeIndex = data.findIndex(recipe => recipeName === recipe.name);
    if (recipeIndex === -1) return res.status(404).json({ message: "Recipe not found" });
    data.splice(recipeIndex, 1);
    res.sendStatus(204);
};

// export function update(req, res) {
//     // ...
// }

// export function search(req, res) {
//     const searchTerm = String(req.params.searchTerm);
//     const recipeList = data.filter(recipe => recipeId.contains(searchTerm));
//     // ...
// }
