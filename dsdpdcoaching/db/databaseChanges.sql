--/***********************************************************************************************************/
--These updates were made on a database that was copied down from the server to my local database

ALTER TABLE USERS CHANGE id username varchar(20) NOT NULL;

ALTER TABLE USERS ADD id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE USERS DROP COLUMN role;

COPY TABLE AND DATA from RUBERIC to RUBRIC

DROP TABLE USER_ROLES

CREATE TABLE USER_ROLES (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int(11) NOT NULL,
  role varchar(100) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES USERS (id)
);

ALTER TABLE USER_ROLES ADD UNIQUE unique_user_role_index(user_id, role);

INSERT INTO USER_ROLES(user_id, role) SELECT id, role FROM USERS;

ALTER TABLE USERS DROP COLUMN role;

ALTER TABLE TEACHERS CHANGE schoolId schoolid int(11);

ALTER TABLE COACHING_INTERACTIONS CHANGE schoolId schoolid int(11);
ALTER TABLE COACHING_INTERACTIONS CHANGE teacherId teacherid int(11);
ALTER TABLE COACHING_INTERACTIONS CHANGE userId userid varchar(45);


UPDATE USER_SCHOOL 
       JOIN USERS
       ON USER_SCHOOL.userid = USERS.username
SET    USER_SCHOOL.userid = USERS.id;

ALTER TABLE USER_SCHOOL MODIFY userid int(11);

ALTER TABLE COACHING_INTERACTIONS MODIFY PHOTO mediumblob DEFAULT NULL;


--/***********************************************************************************************************/