const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())

const category =  require('./data/category.json')

app.get('/', (req, res)=>{
    res.send('news API Running')
});
app.get('/news-categories',(req,res)=>{
    res.send(category)
})

app.listen(port , ()=>{
    console.log('News portal server running on port', port)
})