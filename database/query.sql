CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE notes
(
    id       BIGINT AUTO_INCREMENT
        PRIMARY KEY,
    title    TEXT     NOT NULL,
    `datetime` DATETIME NOT NULL,
    note     LONGTEXT NOT NULL
);

INSERT INTO notes ('id', 'title', `datetime`, 'note') VALUES 
('3', 'Belajar UI UX','2024-06-05 10:30:00','Figma dan Maze');

SELECT * FROM notes