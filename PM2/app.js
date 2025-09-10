const express = require('express');
const morgan = require("morgan");
const app = express();
const port = 9001;

app.use(morgan("dev"));

app.get('/user-list', (req, res) =>{
    res.status(200).json([
        {id:1, name: 'John'}
    ])
})

app.get('/user-details', (req, res) =>{
    res.status(200).json({id:1, name: 'John', age: 30});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});