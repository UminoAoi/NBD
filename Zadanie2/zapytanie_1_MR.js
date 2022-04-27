printjson(
    db.cwiczenia2.mapReduce(
		function() {
			emit( this.sex, 
			{ 
				weight: parseFloat(this.weight), 
				height: parseFloat(this.height) 
			}); 
		},
		
		function(key, values) { 
			let weights = values.map(x => x.weight);
			let heights = values.map(x => x.height);
			
			
			return {
				weight: Array.avg(weights),
				height: Array.avg(heights)
			}; 
		},
		
		{ out: { inline: 1 } }
	)
);