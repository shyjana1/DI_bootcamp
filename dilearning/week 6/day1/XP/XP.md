CREATE TABLE items(item varchar (20), price int );

DAY 1:

XP
CREATE TABLE customers (full_name varchar (50)) ;

INSERT INTO customers(full_name)
VALUES ('Greg Jones'),( 'Sandra Jones'), ('Scott Scott'), ('Trevor Green'), ('Melanie Johnson');

INSERT INTO items (item, price)
VALUES ('small desk', 100),('large desk', 80),('fan', 300);
SELECT \* from items

SELECT _ from items where price > 80
SELECT _ from items where price < 300

SELECT \* from customers where full_name like ('%Smith')
no output

SELECT \* from customers where full_name like ('%Jones')

SELECT \* from customers where full_name not like '%Scott'
