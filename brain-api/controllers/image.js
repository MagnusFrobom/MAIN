const {ClarifaiStub, grpc} = require("clarifai-nodejs-hrpc");
const API_KEY = process.env.REACT_APP_API_KEY;

const stub = ClarifaiStub.grpc();

const metadata = new grpc.metadata();
metadata.set("authorization", API_KEY);

/* const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: ''
}); */

stub.PostModelOutputs(
        {
            model_id: ""
        }
)

const handleApiCall = (req, res) => {
    app.models
        .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)

}

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