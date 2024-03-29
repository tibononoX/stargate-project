SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET
  time_zone = "+00:00";

CREATE TABLE
  user (
    id INT (11) PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    current_location_id INT NOT NULL DEFAULT 1,
    role ENUM ("Admin", "User") DEFAULT "User" NOT NULL
  );

INSERT INTO
  user (
    username,
    email,
    password,
    role,
    current_location_id
  )
VALUES
  (
    "Tibuntu",
    "thibault-carre@hotmail.fr",
    "$argon2id$v=19$m=4096,t=3,p=1$CdHsErVVfXbTrGdNvL+kGg$O1yRMyGLmMPq2t+khIiaqfdSyzrG5fg4t8XKv7cFbz0",
    "Admin",
    "2"
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
    seed INT NOT NULL,
    frontColor VARCHAR(255) NOT NULL,
    midColor VARCHAR(255) NOT NULL,
    skyColor VARCHAR(255) NOT NULL,
    planetName VARCHAR(255) NOT NULL,
    gateAddress VARCHAR(8) NOT NULL,
    poo INT NOT NULL,
    dialMode ENUM ("EARTH", "DHD") NOT NULL,
    userId INT NULL
  );