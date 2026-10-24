import express from "express"
import data from "./db/sampleData.js"
import { PORT } from "./config/environment.js"
import router from "./views/router.js"

// set up express ready to use
const app = express()

app.use(express.json());

// give the app a route
// the app has a method 'get' which takes 2 arguments: a path and a function
// app.get("/all-recipes", (req, res) => {
//     // res.send("Hello world")
//     // res.json({ hello: "world" })
//     res.status(200).json(data)
// })
app.use(router);

// run app listening on a port
app.listen(PORT, () => console.log("Server running!"))
// first argument is port number, second argument is a function which runs


// running this in terminal doesn't give back the prompt
