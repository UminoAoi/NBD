printjson(
    db.cwiczenia2.aggregate(
        {
            $group: {
                _id: "$nationality",
                "min BMI": { 
                    $min: { 
                        $divide: [
                            { $toDouble: "$weight" }, 
                            { $pow: [ { $divide: [{ $toDouble: "$height" }, 100] }, 2 ] }
                        ] 
                    }
                },
                "max BMI": { 
                    $max: { 
                        $divide: [
                            { $toDouble: "$weight" },
                            { $pow: [ { $divide: [{ $toDouble: "$height" }, 100] }, 2 ] }
                        ] 
                    }
                },
                "avg BMI": { 
                    $avg: { 
                        $divide: [
                            { $toDouble: "$weight" }, 
                            { $pow: [ { $divide: [{ $toDouble: "$height" }, 100] }, 2 ] }
                        ] 
                    }
                }
            }
        }
    ).toArray()
);