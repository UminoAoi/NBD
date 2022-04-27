printjson(
    db.cwiczenia2.aggregate( 
        { 
            $group: {
                _id: null,
				"job name": {$addToSet: "$job"}
            }
		}).toArray()
);