require('dotenv').config();
const express = require('express')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-4k2cf2bJPKk737u9vBb8TO9r",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);




// Create a simple express api that calls the function above

const app = express()
const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message)
/*     const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
*//* 
    console.log(response.data.choices[0].text) */
    res.json({/* 
        data: response.data */
        data: message,
    })

});

app.listen(port, () => {
    console.log(`Listening at localhost:${port}`)
});