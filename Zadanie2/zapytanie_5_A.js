printjson(
    db.cwiczenia2.aggregate(
        {
            $match: { sex: "Female", nationality: "Poland" }
        },
        {
            $unwind: "$credit"
        },
        {
            $group: {
                _id: "$credit.currency",
                "avg balance": { $sum: { $toDouble: "$credit.balance" } },
                "sum balance": { $avg: { $toDouble: "$credit.balance" } },
            }
        }
    ).toArray()
);