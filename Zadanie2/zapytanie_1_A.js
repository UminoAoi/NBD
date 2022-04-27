printjson(
    db.cwiczenia2.aggregate( 
        { 
            $group: {
                _id: "$sex",
                "waga": { $avg: { $toDouble: "$weight" } },
                "wzrost": { $avg: { $toDouble: "$height" } }
            }
        }).toArray()
);