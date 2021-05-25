CREATE DATABASE bootcamp

CREATE TABLE students (id serial, last_name varchar (200),first_name varchar (100),birth_date DATE );

INSERT into students ( first_name,last_name, birth_date)
VALUES
('Marc', 'Benichou', '02/11/1998'),
('Yoan' ,'Cohen','03/12/2010'),
('Lea', 'Benichou' , '7/27/1987'),
('Amelia' ,'Dux' ,'07/04/1996'),
('David', 'Grez', '04/06/2003'),
('Omer' ,'Simpson', '03/10/1980')

SELECT \* FROM students

select (last_name, first_name) from students
select (last_name, first_name) from students where id = 2
select (last_name, first_name) from students where first_name like '%Benichou' AND last_name like 'Marc%'
select (last_name, first_name) from students where last_name like '%Benichou' or first_name like 'Marc%'

select (last*name, first_name) from students where first_name like '%a%'
select (last_name, first_name) from students where first_name like '%a'
select (last_name, first_name) from students where first_name like 'a%'
select (last_name, first_name) from students where first_name like '%a*%'

select (last_name, first_name) from students where id between 1 and 3
select \* from students where birth_date >= ('01/01/2000')
