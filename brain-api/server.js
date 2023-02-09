const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
require(".env").config();

const db = knex({
  client: 'pg',
  connection: {
    connectionString : process.env.DB_HOST,
    ssl: true,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

db.select('*').from('users').then(data => {
  console.log(data);
});

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => { res.send('it is working') })
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register.js', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGET(req, res, db, bcrypt) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3005, () => {
  console.log('app is running on port ${process.env.PORT}');
})

console.log(process.env)