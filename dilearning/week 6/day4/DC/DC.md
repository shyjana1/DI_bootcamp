create table orders (\
 item_id int ,\
 order_id int not null,\
 user_id int not null,\
 CONSTRAINT fk_items\
 foreign key (item_id)\
 references items(item_id) \
) \
\
drop table orders\
\
insert into orders(order_id, item_id, user_id)\
 values \
 (1001, 1, 5),\
 (1001, 2, 5),\
 (1001, 1, 5),\
 (1002, 1, 10),\
 (1002, 1, 10),\
 (1002, 1, 10)\
\
\
\
create table items (\
 item_name varchar(50),\
 item_id int primary key,\
 item_price int not null\
)\
insert into items(item_name, item_id, item_price)\
 values \
 ('table', 1, 1000),\
 ('chair', 2, 200)\
\
 \
-- 3. Create a function that returns \
-- the total price for a given order\
\
SELECT sum (item_price) from orders\
 INNER JOIN items\
 on orders.item_id = items.item_id\
 where order_id = 1001 and user_id = 5\
 \
 \
create or replace function total_price(myOrder int)\
 returns int\
 language plpgsql\
 as\
 $$\
	declare\
	total_price integer;\
	begin\
	SELECT sum (item_price) into total_price from orders\
	INNER JOIN items\
	on orders.item_id = items.item_id\
	where order_id = myOrder;\
	\
	return total_price;\
	end;\
	$$\
 \
 SELECT total_price(1002)\
 }
