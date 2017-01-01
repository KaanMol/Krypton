var User = require('../../../auth/models/userModel');

exports.profile = function(req, res) {
	User.model
		.find({
			_id: req.params.id
		})
		.exec(function (err, user){
			if (err) {
				res.status(404).send('Not found');
			} else if(!user.length) {
				res.json({
        			success: false,
        			message: "Couldn't find user!"
        		});
			} else {
				res.json(user[0]);
			}

    		
		});
}