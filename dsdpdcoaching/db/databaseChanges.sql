
--/***********************************************************************************************************/
--The following changes were required in my DB from the one I created in the original DB dump file.
--They should not need to be made on your/prod database
ALTER TABLE users ADD email_address varchar(100);

ALTER TABLE teachers ADD adminemailaddress varchar(100);

CREATE TABLE `user_school` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `schoolid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`));

INSERT INTO user_school VALUES(1,1,3);
INSERT INTO user_school VALUES(1,2,3);
INSERT INTO user_school VALUES(2,3,4);

--/***********************************************************************************************************/

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

ALTER TABLE teachers CHANGE schoolId schoolid int(11);

ALTER TABLE coaching_interactions CHANGE schoolId schoolid int(11);
ALTER TABLE coaching_interactions CHANGE teacherId teacherid int(11);
ALTER TABLE coaching_interactions CHANGE userId userid varchar(45);
