USE SOS_db;

CREATE TABLE users 
(
    user_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL, 
    phone_number VARCHAR(14) NOT NULL,
    email_add VARCHAR(30),
    user_name VARCHAR(20) NOT NULL,
    user_password VARCHAR(10) NOT NULL,
    PRIMARY KEY (user_id)
)ENGINE=InnoDB;

CREATE TABLE allies
(
    ally_id INT NOT NULL AUTO_INCREMENT,
    ally_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(14) NOT NULL,
    email_add VARCHAR(30),
    user_id INT NOT NULL,
    PRIMARY KEY (ally_id),
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
)ENGINE=InnoDB;


