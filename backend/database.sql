SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET
  time_zone = "+00:00";

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