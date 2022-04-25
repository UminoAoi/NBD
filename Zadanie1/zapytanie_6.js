printjson(db.cwiczenia2.insertOne(
{
        "sex" : "Female",
        "first_name" : "Kinga",
        "last_name" : "Kwiatkowska",
        "job" : "Game programmer",
        "email" : "s16612@pjwstk.edu.pl",
        "location" : {
                "city" : "Tokyo",
                "address" : {
                        "streetname" : "AnimeStreet",
                        "streetnumber" : "111"
                }
        },
        "description" : "I like cat ears.",
        "height" : "166.38",
        "weight" : "53.81",
        "birth_date" : "1999-02-21T02:55:03Z",
        "nationality" : "Poland",
        "credit" : [
                {
                        "type" : "test",
                        "number" : "1234567890",
                        "currency" : "PLN",
                        "balance" : "100.06"
                }
        ]
}
)
)
