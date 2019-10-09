
--/***********************************************************************************************************/
--These updates were made on a database that was copied down from the server to my local database

ALTER TABLE users CHANGE id username varchar(20) NOT NULL;

ALTER TABLE users ADD id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;

Copy table and data from RUBERIC to RUBRIC

DROP TABLE USER_ROLES

CREATE TABLE USER_ROLES (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int(11) NOT NULL,
  role varchar(100) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);

--/***********************************************************************************************************/


ALTER TABLE USER_ROLES

ALTER TABLE user_roles ADD UNIQUE unique_user_role_index(user_id, role);

INSERT INTO user_roles(user_id, role) SELECT id, role FROM users;

ALTER TABLE users DROP COLUMN role;

ALTER TABLE teachers CHANGE schoolId schoolid int(11);

ALTER TABLE coaching_interactions CHANGE schoolId schoolid int(11);
ALTER TABLE coaching_interactions CHANGE teacherId teacherid int(11);
ALTER TABLE coaching_interactions CHANGE userId userid varchar(45);
