module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?
	Checkout.count(
		{$group: {_id:'$userId', users:{$sum:1} } }
		{$sort: {users:-1} },

	function(err, res){
		if(err){
			console.log(err);
		} else {
			console.log("User: " + res[0]._id.toString() + " " + "Counts: " + res[0].users.toString());
		}
	}
	);
};
