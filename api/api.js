import cors from "cors";
import express from "express";
import { getTitle } from "./ai.js";

const app = express();
const port = 3000;

// enable cors for local development
app.use(
    cors({
        origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    })
);

app.use(express.json());

app.post("/", async (req, res) => {
    const { topic, education, researchLength } = req.body;
    console.log("sent");

    if (!topic || !education || !researchLength) {
        return res.status(400).json({ error: "All fields are required" });
    } else {
        res.status(200).json({
            data: await getTitle(topic, education, researchLength),
        });
    }
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
