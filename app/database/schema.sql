CREATE DATABASE SOS_db;
USE SOS_db;

CREATE TABLE allies 
(
    id INT NOT NULL AUTO_INCREMENT,
    ally_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(14) NOT NULL,
    email_add VARCHAR(30),
    PRIMARY KEY (id) 
);


