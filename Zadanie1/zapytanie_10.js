printjson(db.cwiczenia2.updateMany(
	{job: "Editor"}, 
	{$unset: {email: 1}})
)
