ALTER TABLE users CHANGE id username varchar(20) NOT NULL;

ALTER TABLE users ADD id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;


CREATE TABLE user_roles (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int(11) NOT NULL,
  role varchar(100) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

ALTER TABLE user_roles ADD UNIQUE unique_user_role_index(user_id, role);

INSERT INTO user_roles(user_id, role) SELECT id, role FROM users;

ALTER TABLE users DROP COLUMN role;
