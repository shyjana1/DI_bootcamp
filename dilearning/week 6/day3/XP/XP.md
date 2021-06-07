SELECT language_id, name FROM language SELECT \* FROM film

2.1 & 2.2

SELECT \* FROM film

SELECT COUNT(title) FROM film

SELECT name,title FROM language LEFT JOIN film ON film.language_id = language.language_id

SELECT title, description, name FROM film LEFT JOIN language ON film.language_id = language.language_id

CREATE TABLE new_film ( id serial PRIMARY KEY, name VARCHAR (300) )

INSERT INTO new_film(name) VALUES ('APrince Akeem ')

2.4

CREATE TABLE customer_review( review_id SERIAL PRIMARY KEY NOT null, film_id INT references new_film(id), language_id INT references language(language_id), title VARCHAR(300), score INT, review_text TEXT, last_update DATE DEFAULT CURRENT_DATE ‏ )

2.5 INSERT INTO customer_review(film_id, language_id,title,score,review_text) VALUES (1,1,'Hi,Mom',2, 'Russian crime drama psychological thriller'), (2,2,'Detective Chinatown 3',4,'film directed by Klim Shipenko') last_update DATE DEFAULT CURRENT_DATE

2.6

ERROR: update or delete on table "new_film" violates foreign key constraint "customer_review_film_id_fkey" on table "customer_review" DETAIL: Key (id)=(2) is still referenced from table "customer_review". SQL state: 23503

Exercise 2 : DVD Rental

2.1 UPDATE language SET name='French' WHERE name = 'Japanese'

2.2

address_id when editing this col, it should be done by it's Reference col and also it's Reference table

2.3

DROP TABLE customer_review

does it need extra checking? - refresh in the table's database

2.4

SELECT DISTINCT (return_date) FROM rental WHERE return_date IS null

2.5
