package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name = "ACTION")
public class ActionPlanData implements Serializable {

	private static final long serialVersionUID = 105036012542207078L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="schoolid")
	private Integer schoolId;
	
	@Column(name="grade")
	private String grade;
	
	@Column(name="task")
	private String task;
	
	@Column(name="completed")
	private String completed;
	
	@Column(name="owner")
	private String owner;
	
	@Column(name="entrydate")
	@Temporal(TemporalType.DATE)
	private Date entrydate;
	
	@Column(name="completeddate")
	@Temporal(TemporalType.DATE)
	private Date completeddate;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
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

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public Date getEntrydate() {
		return entrydate;
	}

	public void setEntrydate(Date entrydate) {
		this.entrydate = entrydate;
	}

	public Date getCompleteddate() {
		return completeddate;
	}

	public void setCompleteddate(Date completeddate) {
		this.completeddate = completeddate;
	}
	

}
