printjson(
    db.cwiczenia2.mapReduce(
		function() {
			this.credit.forEach(c => emit(c.currency, parseFloat(c.balance)));
		},
		function(keys, values) {;
			
			return {
                sum: Array.sum(values),
                avg: Array.avg(values)
            };
		},
		{
			out: { inline: 1 },
			query: { sex: "Female", nationality: "Poland" }
		}
	)
);