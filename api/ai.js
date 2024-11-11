import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config.js";

import { query } from "./prompt.js";

const apiKey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function getTitle(topic, education, researchLength) {
    // create prompt
    const prompt = query(topic, education, researchLength);

    // generate title
    const result = await model.generateContent(prompt);
    const stringResult = result.response.text();

    // replace ```json and ``` that gemini adds
    const cleanedResult = stringResult
        .replace("```json", "")
        .replace("```", "");

    const jsonResult = JSON.parse(cleanedResult);
    console.log(jsonResult);
    return jsonResult;
}
