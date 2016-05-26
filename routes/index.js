// routes
module.exports = function (app) {

	require("./global.js")(app);

	require("./users.js")(app);
	
	require("./orders.js")(app);

	require("./files.js")(app);	
};