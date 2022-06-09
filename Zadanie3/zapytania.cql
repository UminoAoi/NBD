//1.
MATCH (n:Movie) RETURN n

//2.
MATCH (n:Person) - [:ACTED_IN]-> (m)
WHERE n.name = "Hugo Weaving" 
RETURN n,m

//3. 
MATCH (n:Person) - [:ACTED_IN] - (movies:Movie)
WHERE n.name = "Hugo Weaving"
WITH  movies AS m
MATCH (d:Person) - [:DIRECTED] - (m)
RETURN d,m

//4
MATCH (n:Person) - [:ACTED_IN] - (movies:Movie)
WHERE n.name = "Hugo Weaving"
WITH  movies AS m
MATCH (a:Person) - [:ACTED_IN] - (m)
RETURN a,m

//5
MATCH (people:Person) - [:ACTED_IN] - (m:Movie)
WHERE m.title = "The Matrix"
WITH people AS p
MATCH (p) - [:ACTED_IN] - (movies:Movie)
RETURN p, movies

//6
MATCH (p:Person) - [r:ACTED_IN] -> (m)
WITH p, count(r) AS number
WHERE number > 1
RETURN p, number

//7
MATCH (p:Person)-[:WROTE]->(m) 
WHERE (p)-[:DIRECTED]->(m)
RETURN p, m

//8
MATCH (p1:Person)-[:ACTED_IN]->(m)<-[:ACTED_IN]-(p2:Person) 
WHERE p1.name='Keanu Reeves'AND p2.name = 'Hugo Weaving'
RETURN m