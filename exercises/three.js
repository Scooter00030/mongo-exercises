module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?

	Checkout.count( 
		{$group:{_id:{MovieID:"$movieId"},total:{$sum:1} } },
	 	{$sort:{ "total":-1} }, 
		function(err, res) {
			var titleRes = JSON.stringify(res[0]._id).substr(11, 3);
			Movie.searchOne({ _id:titleRes}, function(err, res){
				console.log ("Movie checked out the most in the last 12 months was " + res.title);
			});
		}
	);
		
		//Movie.find( )

};


