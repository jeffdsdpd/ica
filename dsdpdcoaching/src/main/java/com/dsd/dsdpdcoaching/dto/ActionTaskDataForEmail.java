package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ActionTaskDataForEmail implements Serializable {

	private static final long serialVersionUID = 1326403892979890084L;
	
	 @Id
	private Long id;
	 
	private String schoolId; 
	private String grade;
	private String subject;
	private String owner;
	private String username;
	private String task;
	private String completed;
	
	
	public String getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(String schoolId) {
		this.schoolId = schoolId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ActionTaskDataForEmail() {
    }

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String ower) {
		this.owner = ower;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getCompleted() {
		return completed;
	}

	public void setCompleted(String completed) {
		this.completed = completed;
	}
	
}
