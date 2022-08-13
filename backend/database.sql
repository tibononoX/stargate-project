SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET
  time_zone = "+00:00";

CREATE TABLE
  user (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role ENUM("Admin", "User") DEFAULT "User" NOT NULL
  );

INSERT INTO
  user (username, email, password, role)
VALUES
  (
    "Tibuntu",
    "thibault-carre@hotmail.fr",
    "$argon2id$v=19$m=4096,t=3,p=1$CdHsErVVfXbTrGdNvL+kGg$O1yRMyGLmMPq2t+khIiaqfdSyzrG5fg4t8XKv7cFbz0",
    "Admin"
  );

CREATE TABLE
  glyph (
    id INT PRIMARY KEY AUTO_INCREMENT,
    letter VARCHAR(1),
    label VARCHAR(255)
  );

CREATE TABLE
  planet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    planetName VARCHAR(255) NOT NULL,
    gateAddress VARCHAR(8) NOT NULL,
    dialMode ENUM("EARTH", "DHD") NOT NULL
  );

CREATE TABLE
  poo (planet_id INT NOT NULL, glyph_id INT NOT NULL);