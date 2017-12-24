CREATE SCHEMA `authentication` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE authentication.USER (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    passwordsalt VARCHAR(256) NOT NULL,
    status INT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
)
