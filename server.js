var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title:'ArticleOne |Chaitanya',
    heading:'ArticleOne',
    date:'Sep 5 ,2016',
    content:`<p>This is chaitanya and my first article for publishing.This is chaitanya and my first article for publishing
        This is chaitanya and my first article for publishing
        This is chaitanya and my first article for publishing
        This is chaitanya and my first article for publishing
        This is chaitanya and my first article for publishing
        </p>`
};
function CreateTemplate(data){
  
  var title=data.title;
  var heading=data.heading;
  var date =data.date;
  var content=data.content;
  var htmlTemplate=
    `<html>
<head>
    <title>
     ${title}
    </title>
    
</head>
<body>
    <div class="container">
    <div >
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
        ${date}
    </div>
    <div>
       ${content}
        </div>
    </div>
    </body>
</html>`
;  
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get("/article-one",function(req,res){
    res.send(CreateTemplate(articleOne));
});
app.get("/article-two",function(req,res){
    res.send("Article-two is requested");
});
app.get("/article-three",function(req,res){
    res.send("Article-three is requested");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
