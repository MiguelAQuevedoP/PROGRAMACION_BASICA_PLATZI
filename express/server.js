var express = require('express');
const app = express();

app.get('/', init);
app.get('/courses', courses);

function init(req, res){
    res.send("Hello world!! this is the server hdp!!!");
}
function courses(req, res){
    res.send("hello courses");
}

app.listen(8989);