printjson(
    db.cwiczenia2.mapReduce(
		function() {
			this.credit.forEach(x => emit(x.currency, parseFloat(x.balance)));
		},
		
		function(key, values) {
			return Array.sum(values);
		},
		
		{ out: { inline: 1 } }
	)
);