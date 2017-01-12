module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?

Movie.search(
{title: {$regex: 'Lord of the Rings'} },
function(err, res) {
	var numID = [];
	if(err) {
		return console.log(err);
	} else {
		for(var i = 0; i < res.length; i++) {
			numID.push(res[i]._id);
		}
		console.log(numID);
		Checkout.distinct(
			"userId",
			{movieId: {$in: numID} },
			function(err, res) {
				if(err) {
					return console.log(err);
				} else {
					console.log("Users: ", res.sort().join(", "), "--", res.length, " out of 100 -- checked out at least one of the Lord of the Rings movies.");
				}
			}
		);
	}
});
}
