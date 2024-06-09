CREATE DATABASE notes_db;
USE notes_db;
create table notes 
(
    id       bigint auto_increment
	primary key,
    title    text     not null,
    datetime datetime not null,
    note     longtext not null
);

INSERT INTO notes (id, title, datetime, note) VALUES
('1', 'Belajar Web', '2024-06-05 10:30:00', 'HTML dan CSS'),
('2', 'Belajar Mobile','2024-06-05 10:30:00','Flutter dan Dart'),
('3', 'Belajar UI UX','2024-06-05 10:30:00','Figma dan Maze');

DROP TABLE notes


