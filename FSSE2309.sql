use shopping;

SELECT * FROM cart_item;

SELECT * FROM product;

SELECT * FROM transaction;

SELECT * FROM transaction_product;

SELECT * FROM user;

-- Insert data for Product table
INSERT INTO product (name, description, image_url, price, unit)
VALUES
  ('Product1', 'Description for Product1', 'http://example.com/product1.jpg', 19, 100),
  ('Product2', 'Description for Product2', 'http://example.com/product2.jpg', 29, 150),
  ('Product3', 'Description for Product3', 'http://example.com/product3.jpg', 39, 200),
  ('Product4', 'Description for Product4', 'http://example.com/product4.jpg', 49, 120),
  ('Product5', 'Description for Product5', 'http://example.com/product5.jpg', 59, 180),
  ('Product6', 'Description for Product6', 'http://example.com/product6.jpg', 69, 90),
  ('Product7', 'Description for Product7', 'http://example.com/product7.jpg', 79, 160),
  ('Product8', 'Description for Product8', 'http://example.com/product8.jpg', 89, 110),
  ('Product9', 'Description for Product9', 'http://example.com/product9.jpg', 99, 140),
  ('Product10', 'Description for Product10', 'http://example.com/product10.jpg', 109, 130);


DROP TABLE transaction_product;

DROP TABLE transaction;

DROP TABLE user;

DROP TABLE cart_item;

DROP TABLE product;
