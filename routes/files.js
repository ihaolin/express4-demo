module.exports = function (app) {

	var uploadPath = app.get('path') + "/uploads";

	var mkdirp = require('mkdirp');
	mkdirp(uploadPath, function (err) {
	    if (err) {
	    	console.error(err);
	    }
	});

	var multer = require('multer');
	var storage = multer.diskStorage({
     	// 设置上传后文件路径，uploads文件夹会自动创建。
        destination: function (req, file, cb) {
            cb(null, uploadPath);
       	}, 
     	// 给上传文件重命名，获取添加后缀名
	    filename: function (req, file, cb) {
	        var fileFormat = (file.originalname).split(".");
	        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	    }
	 });  

	var upload = multer({
		storage: storage 
	}).single('file');
	
	// goto upload page
	app.get('/upload', function(req, res){
		res.render("upload");
	});

	// do upload request
	app.post('/upload', function (req, res){
		// do upload
		upload(req, res, function(err){
			if (err) {
		    	return console.log(err);
		    }
		    res.end("Upload Successlly");
		});
	});
};