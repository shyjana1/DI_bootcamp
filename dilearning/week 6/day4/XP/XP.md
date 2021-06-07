
2.1 & 2.2

SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees;

SELECT DISTINCT department_id FROM employees ORDER BY department_id ASC

SELECT * FROM employees ORDER BY first_name ASC

SELECT first_name, last_name,salary,salary*.15 salary15 FROM employees

SELECT employee_id,first_name, last_name,salary FROM employees ORDER BY salary ASC

SELECT SUM (salary) AS total FROM employees

SELECT MAX(salary) , MIN(salary) FROM employees

SELECT ROUND (AVG(salary)) FROM employees

SELECT COUNT (first_name) FROM employees ‏ 10.

SELECT UPPER(first_name) FROM employees

SELECT SUBSTRING(first_name,1,3) FROM employees

SELECT concat(first_name||' '||last_name) as fn FROM employees

13

select (first_name || ' '|| last_name),(LENGTH( first_name || ' '|| last_name)) as fn from employees

SELECT first_name FROM employees WHERE first_name <='0'

SELECT * FROM employees ORDER BY hire_date LIMIT(10)

SELECT first_name,last_name,salary FROM employees WHERE salary < 15000 AND salary > 10000

SELECT first_name,last_name,hire_date FROM employees WHERE hire_date= '1987-06-17'‏

SELECT first_name FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%'

SELECT last_name,salary,job_title FROM employees INNER JOIN jobs ON employees.job_id= jobs.job_id WHERE job_title !='Programmer' AND job_title !='Shipping Clerk' AND salary != 4500 AND salary != 10000 OR salary != 15000 ORDER BY salary

SELECT last_name FROM employees WHERE LENGTH (last_name) =6

SELECT last_name FROM employees WHERE last_name LIKE '__e%';

SELECT DISTINCT(job_id) FROM employees

either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’. SELECT* FROM employees WHERE last_name ='Jones' OR last_name ='Blake' OR last_name ='Scott' OR last_name ='King' OR last_name ='Ford'