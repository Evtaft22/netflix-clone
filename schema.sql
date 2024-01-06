/**
 * Execute this file from the command line by typing:
 *   mysql -u root < schema.sql
 */

DROP DATABASE IF EXISTS mvp;
CREATE DATABASE mvp;

USE mvp;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (id)
);