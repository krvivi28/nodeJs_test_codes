// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import { renderUpdateForm } from "./user.controller.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUpdateForm);

// Write route for post("/") here

export default app;
