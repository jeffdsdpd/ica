package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.stereotype.Component;

@Entity(name = "ACTION")
@Component
public class ActionPlanData implements Serializable {

	private static final long serialVersionUID = 105036012542207078L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="schoolid")
	private Integer schoolId;
	
	@Column(name="grade")
	private String grade;
	
	@Column(name="subject")
	private String subject;
	
	@ElementCollection(fetch = FetchType.LAZY)
	@CollectionTable(name="ACTION_TASKS", joinColumns=@JoinColumn(name = "actionid", referencedColumnName = "id"))
	@Column(name="task")
    private List<ActionTaskData> taskList;

	@Column(name="owner")
	private String owner;
	
	@Column(name="entrydate")
	@Temporal(TemporalType.DATE)
	private Date entrydate;

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
	
	public List<ActionTaskData> getTaskList() {
		return taskList;
	}

	public void setTaskList(List<ActionTaskData> taskList) {
		this.taskList = taskList;
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
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public void setActionTaskDataRecord(ActionTaskData atd) {
		taskList.add(atd);
	}
	
}
