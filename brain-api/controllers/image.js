const {ClarifaiStub, grpc} = require("clarifai-nodejs-hrpc");
const API_KEY = process.env.REACT_APP_API_KEY;

const stub = ClarifaiStub.grpc();

const metadata = new grpc.metadata();
metadata.set("authorization", API_KEY);

const Clarifai = require('clarifai');
console.log(Clarifai)
/* 
const app = new Clarifai.App({
    apiKey: ''
}); 
 */
const handleApiCall = (req, res) => {
    stub.PostModelOutputs(
        {
            // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
            model_id: "aaa03c23b3724a16a56b629203edc62c",
            inputs: [{ data: { image: { url: req.body.input } } }]
        },
        metadata,
        (err, response) => {
            if (err) {
                console.log("Error: " + err);
                return;
            }

            if (response.status.code !== 10000) {
                console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
                return;
            }

            console.log("Predicted concepts, with confidence values:")
            for (const c of response.outputs[0].data.concepts) {
                console.log(c.name + ": " + c.value);
            }
            res.json(response)
        }
);

}

/* 
stub.PostModelOutputs(
        {
            model_id: ""
        }
) */

/* const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)

} */

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.json(entries[0].entries);
        })
        .catch(err => res.status(400).json('unable to get entries'))
}


module.exports = {
    handleImage,
    handleApiCall
}