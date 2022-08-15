import express from "express";

const app = express();

app.use(express.json());

app.listen(4000, () => {
    console.log("app listen: http://localhost:4000")
});