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

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;

@Entity(name = "RUBRIC")
@Component
public class Rubric implements Serializable {

	private static final long serialVersionUID = -4939822350121215142L;

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
	
	@Column(name="planning")
	private String planning;
	
	@Column(name="path")
	private String path;
	
	@Column(name="place")
	private String place;
	
	@Column(name="pace")
	private String pace;
	
	@Column(name="classroommanagement")
	private String classroommgmt;
	
	@Column(name="teacherrole")
	private String teacherrole;
	
	@Column(name="studentengagement")
	private String studentegmt;
	
	@Column(name="studentcollaboration")
	private String studentcolab;

	@Column(name="assessmentanddata")
	private String assessmentAndData;
	
	@Column(name="technology")
	private String technology;
	
	@Column(name="smallgroup")
	private String smallgroup;
	
	@Column(name="checklists")
	private String checklists;
	
	@Column(name="rubricnotes")
	private String rubricNotes;
	
	@Column(name="rubricscore")
	private int rubricScore;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name="RUBRIC_LEVELUP", joinColumns=@JoinColumn(name = "rubricid", referencedColumnName = "id"))
	@Column(name="levelup")
    private List<RubricLevelUp> levelupList;
	
	@Column(name="questions")
	private String questions;
	

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

	public String getPlanning() {
		return planning;
	}

	public void setPlanning(String planning) {
		this.planning = planning;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getPace() {
		return pace;
	}

	public void setPace(String pace) {
		this.pace = pace;
	}
	
	public String getClassroommgmt() {
		return classroommgmt;
	}

	public void setClassroommgmt(String classroommgmt) {
		this.classroommgmt = classroommgmt;
	}

	public String getAssessmentAndData() {
		return assessmentAndData;
	}

	public void setAssessmentAndData(String assessmentAndData) {
		this.assessmentAndData = assessmentAndData;
	}
	
	public String getTeacherrole() {
		return teacherrole;
	}

	public void setTeacherrole(String teacherrole) {
		this.teacherrole = teacherrole;
	}

	public String getStudentegmt() {
		return studentegmt;
	}

	public void setStudentegmt(String studentegmt) {
		this.studentegmt = studentegmt;
	}

	public String getStudentcolab() {
		return studentcolab;
	}

	public void setStudentcolab(String studentcolab) {
		this.studentcolab = studentcolab;
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}
	

	public String getSmallgroup() {
		return smallgroup;
	}

	public void setSmallgroup(String smallgroup) {
		this.smallgroup = smallgroup;
	}

	public String getChecklists() {
		return checklists;
	}

	public void setChecklists(String checklists) {
		this.checklists = checklists;
	}

	public String getRubricNotes() {
		return rubricNotes;
	}

	public void setRubricNotes(String rubricnotes) {
		this.rubricNotes = rubricnotes;
	}
	
	public int getRubricScore() {
		return rubricScore;
	}

	public void setRubricScore(int rubricScore) {
		this.rubricScore = rubricScore;
	}
	
	public List<RubricLevelUp> getLevelupList() {
		return levelupList;
	}

	public void setLevelupList(List<RubricLevelUp> levelupList) {
		this.levelupList = levelupList;
	}

	public String getQuestions() {
		return questions;
	}

	public void setQuestions(String questions) {
		this.questions = questions;
	}
	
}
