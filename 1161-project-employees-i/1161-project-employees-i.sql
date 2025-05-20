# Write your MySQL query statement below
select project_id ,ROUND(avg(experience_years),2)as average_years from Employee  E
  join Project P 

  USING(employee_id) 
   GROUP BY project_id