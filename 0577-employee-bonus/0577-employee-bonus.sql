# Write your MySQL query statement below
select E.name , B.bonus from Employee E
  LEFT join Bonus B ON E.empId=B.empId
  WHERE B.bonus <1000 OR  B.bonus IS NULL