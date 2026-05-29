CREATE TABLE messages (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id integer NOT NULL,
  user_message text NOT NULL,
  sophia_response text NOT NULL,
  date timestamp DEFAULT (now())
);

CREATE TABLE sophia_memory (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category_id integer NOT NULL,
  content text NOT NULL
);

CREATE TABLE user_memory (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id integer NOT NULL,
  category_id integer NOT NULL,
  content text NOT NULL,
  date timestamp DEFAULT (now())
);

CREATE TABLE users (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name varchar NOT NULL,
  mail varchar UNIQUE NOT NULL,
  birthday date
);

CREATE TABLE memory_category (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name varchar NOT NULL
);

ALTER TABLE sophia_memory ADD FOREIGN KEY (category_id) REFERENCES memory_category (id) DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE user_memory ADD FOREIGN KEY (category_id) REFERENCES memory_category (id) DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE user_memory ADD FOREIGN KEY (user_id) REFERENCES users (id) DEFERRABLE INITIALLY IMMEDIATE;

ALTER TABLE messages ADD FOREIGN KEY (user_id) REFERENCES users (id) DEFERRABLE INITIALLY IMMEDIATE;
