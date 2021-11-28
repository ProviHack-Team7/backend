CREATE TABLE IF NOT EXISTS teacher_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS materials(
         id VARCHAR(255) PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         link VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS quizz(
         id VARCHAR(255) PRIMARY KEY,
         question VARCHAR(255) NOT NULL,
         correct VARCHAR(255) NOT NULL,
         incorrect_1 VARCHAR(255) NOT NULL,
         incorrect_2 VARCHAR(255) NOT NULL,
         incorrect_3 VARCHAR(255) NOT NULL
);

SELECT * FROM quizz;

