import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./api/v1.0/modules/bot/routes.js";
import { connection } from "./helpers/db.js";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/message", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ message: "Server is running!!!" });
});

app.use("/api", routes);

app.listen(process.env.NODE_LOCAL_PORT, () => {
    console.log("Server is running on port", process.env.NODE_LOCAL_PORT);
});

if (connection) {
    console.log("Successfully connected to database");
}
else {
    console.log("Cannot able to connect to database");
}
