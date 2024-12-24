const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
let router = express.Router();

const genAI = new GoogleGenerativeAI({
    apiKey: process.env.CHATBOT_KEY, 
});
// console.log(genAI, "heheh");


router.post("/chat", async (req, res) => {
    const { message } = req.body; 
    // console.log(req.body, "hehe");

    const genAI = new GoogleGenerativeAI(process.env.CHATBOT_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);

    res.send({ result: result.response.text() })

});

module.exports = router;