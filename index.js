const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const courses = require('./courses.json');
const couresDetails = require('./couresItem.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const couresItem = couresDetails.find(course => course._id == id);
    res.send(couresItem)

})

module.exports = app;

app.listen(port, () => {
    console.log(`example app listening on prot${port}`);
})