import express from "express";
import { create, index, remove, show } from "../controllers/controller.js";

// Router object
const router = express.Router()

// 
router.route("/all-recipes")
    .get(index)
    .post(create)

router.route("/:name")
    .get(show)
    .delete(remove)

export default router;