printjson(db.cwiczenia2.find(
	{birth_date:{$gte:"2000-01-01", $lte:"2099-12-31"}}, 
	{_id:0, first_name:1, last_name:1, "location.city":1})
	.toArray())