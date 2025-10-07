--Create a table called Customers.
CREATE TABLE Customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    membership_level TEXT NOT NULL
);

--Create rentals table with foreign key 
CREATE TABLE Rentals (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    movie_title TEXT NOT NULL,
    rental_price REAL NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(id)
);


--Insert 5 customers
INSERT INTO Customers (id, name, membership_level) VALUES
(1, 'John', 'Gold'),
(2, 'Maria', 'Silver'),
(3, 'David', 'Bronze'),
(4, 'Sarah', 'Gold'),
(5, 'Michael', 'Platinum');


--Insert 5 rentals
INSERT INTO Rentals (id, customer_id, movie_title, rental_price) VALUES
(1, 1, 'Avengers', 4.99),
(2, 2, 'Black Panther', 3.99),
(3, 3, 'Inception', 5.49),
(4, 4, 'The Dark Knight', 4.49),
(5, 5, 'Interstellar', 6.99);

--To show everything in Customers
SELECT * FROM Customers;

--To show everything in Rentals
SELECT * FROM Rentals;

--To show only name & membership level
SELECT name, membership_level FROM Customers;

--To show only movie title and rental price
SELECT movie_title, rental_price FROM Rentals;

--To join both tables together
SELECT 
    Customers.name,
    Customers.membership_level,
    Rentals.movie_title,
    Rentals.rental_price
FROM Customers
JOIN Rentals
ON Customers.id = Rentals.customer_id;
