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

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

@Entity(name = "HOKE_RUBRIC")
@Component
public class HokeRubric implements Serializable {

	private static final long serialVersionUID = 4542416803701130948L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Temporal(TemporalType.DATE)
	private Date date;
	 
	@Column(name="schoolid")
	private Integer schoolId;
	
	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "hh:mma")
	@Column(name="timeobserved")
	private Date timeObserved;
	
	@Column(name="teacherid")
	private Integer teacherId;
	
	@Column(name="userid")
	private String userId;
	
	@Column(name="observed")
	private String observed;
	
	@Column(name="checklists")
	private int checklists;
	
	@Column(name="digitalcontent")
	private int digitalcontent;
	
	@Column(name="seating")
	private int seating;
	
	@Column(name="timing")
	private int timing;
	
	@Column(name="differentiation")
	private int differentiation;
	
	@Column(name="studentgroups")
	private int studentgroups;
	
	@Column(name="data")
	private int data;
	
	@Column(name="reflection")
	private int reflection;
	
	@Column(name="studentlearning")
	private int studentlearning;
	
	@Column(name="rubricnotes")
	private String rubricNotes;
	
	@Column(name="phase")
	private int phase;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Integer getSchoolId() {
		return schoolId;
	}

	public void setSchoolId(Integer schoolId) {
		this.schoolId = schoolId;
	}

	public Date getTimeObserved() {
		return timeObserved;
	}

	public void setTimeObserved(Date timeObserved) {
		this.timeObserved = timeObserved;
	}

	public Integer getTeacherId() {
		return teacherId;
	}

	public void setTeacherId(Integer teacherId) {
		this.teacherId = teacherId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getObserved() {
		return observed;
	}

	public void setObserved(String observed) {
		this.observed = observed;
	}

	public int getChecklists() {
		return checklists;
	}

	public void setChecklists(int checklists) {
		this.checklists = checklists;
	}

	public int getDigitalContent() {
		return digitalcontent;
	}

	public void setDigitalContent(int digitalcontent) {
		this.digitalcontent = digitalcontent;
	}

	public int getSeating() {
		return seating;
	}

	public void setSeating(int seating) {
		this.seating = seating;
	}

	public int getTiming() {
		return timing;
	}

	public void setTiming(int timing) {
		this.timing = timing;
	}

	public int getDifferentiation() {
		return differentiation;
	}

	public void setDifferentiation(int differentiation) {
		this.differentiation = differentiation;
	}

	public int getStudentGroups() {
		return studentgroups;
	}

	public void setStudentGroups(int studentgroups) {
		this.studentgroups = studentgroups;
	}

	public int getData() {
		return data;
	}

	public void setData(int data) {
		this.data = data;
	}

	public int getReflection() {
		return reflection;
	}

	public void setReflection(int reflection) {
		this.reflection = reflection;
	}

	public int getStudentLearning() {
		return studentlearning;
	}

	public void setStudentLearning(int studentlearning) {
		this.studentlearning = studentlearning;
	}

	public String getRubricNotes() {
		return rubricNotes;
	}

	public void setRubricNotes(String rubricnotes) {
		this.rubricNotes = rubricnotes;
	}

	public int getPhase() {
		return phase;
	}

	public void setPhase(int phase) {
		this.phase = phase;
	}

	
}
