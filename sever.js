
const express = require('express');
const cors = require('cors');
const mongosse = require('mongosse');
const Blogmodel = require('./models/blogs')

const app = express()
const port = process.env_PORT;

// set up middleware
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {console.log('Connected to Mongo DB')}, err => {console.log(`Cannot connect to DB ${err}`)});

// routes
app.get('/', (req, res) => res.status(200).send('Server is Running.'));

app.post('/add-blog', (req, res) => {
    const incomingData = req.body;

    try {
        const newUser = new UserModel(incomingData);
        UserBlog.save();

        res.status(200).send({
            message: 'saved blog'
        })
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`⚡Server is running 👉 https://localhost:${port}`);
});
