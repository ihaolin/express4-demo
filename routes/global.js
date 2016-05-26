module.exports = function (app) {
	
	var blogData = require('../data');

	app.get('/', function (req, res) {
		res.render('index', {title: "最近文章", blogs: blogData.getBlogs()});
	});

    // app.use("/home", function(request, response, next) {
	//   	response.writeHead(200, { "Content-Type": "text/plain" });
	//   	response.end("Welcome to the homepage!\n");
	// });

	// app.use("/about", function(request, response, next) {
	//   	response.writeHead(200, { "Content-Type": "text/plain" });
	//   	response.end("Welcome to the about page!\n");
	// });

	app.get('/about', function(req, res) {
		res.render('about');
	   	// res.sendFile('about.html', { root: __dirname + "/../views" });
	});

	app.get('/hello/:who?',function(req,res) {
		if(req.params.who) {
	    	res.end("Hello, " + req.params.who + ".");
		} else {
	    	res.send("Hello, Guest.");
		}
	});

	app.get('/json', function(req, res){
		res.json(200, {name:"haolin",age:40});
	});

};