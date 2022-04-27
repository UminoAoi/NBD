printjson(
    db.cwiczenia2.mapReduce(
		function() {
			emit(
				this.nationality, 
				parseFloat(this.weight) / Math.pow(parseFloat(this.height)/100, 2)
			);
		},
		
		function(key, values) {						
			return {
				min: Math.min.apply(null, values),
				max: Math.max.apply(null,values),
				avg: Array.avg(values)
			}; 
		},
		
		{ out: { inline: 1 } }
	)
);