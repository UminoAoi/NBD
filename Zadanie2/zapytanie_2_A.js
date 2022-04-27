printjson(
    db.cwiczenia2.aggregate( 
	    {
            $unwind: "$credit"
		},
		
        { 
            $group: {
                _id: "$credit.currency",
                "sum": { $sum: { $toDouble: "$credit.balance"} }
            },
		}).toArray()
);