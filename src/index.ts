import express from "express";
import { add } from "./add";

const app = express();

app.get("/", (req, res) => {
    console.log(add(2, 3))
    res.send("Hello");
});

app.listen(5000, () => console.log("Server running"));