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

@Entity(name = "HOKE_INTERVENTION")
@Component
public class HokeIntervention implements Serializable {

	private static final long serialVersionUID = 7458797001215871043L;
	
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
	
	@Column(name="facetoface")
	private String facetoface;
	
	@Column(name="interventiondelivery")
	private String interventionDelivery;
	
	@Column(name="gradelevel")
	private String gradeLevel;
	
	@Column(name="numberofstudents")
	private String numberOfStudents;
	
	@Column(name="contentarea")
	private String contentArea;
	
	@Column(name="interventiontiming")
	private String interventionTiming;
	
	@Column(name="fidelity")
	private String fidelity;
	
	@Column(name="instructorprepared")
	private String instructorPrepared;
	
	@Column(name="studentsappear")
	private String studentsAppear;
	
	@Column(name="lessonplan")
	private String lessonPlan;
	
	@Column(name="standardsbased")
	private String standardsBased;
	
	@Column(name="lessonobjectives")
	private String lessonObjectives;
	
	@Column(name="lessonmatched")
	private String lessonMatched;
	
	@Column(name="clearinstructions")
	private String clearInstructions;
	
	@Column(name="instructorencouragement")
	private String instructorEncouragement;
	
	@Column(name="effectivemodeling")
	private String effectiveModeling;
	
	@Column(name="evidencebased")
	private String evidenceBased;
	
	@Column(name="instructionalcomponents")
	private String instructionalComponents;
	
	@Column(name="positivefeedback")
	private String positiveFeedback;
	
	@Column(name="progressmonitoring")
	private String progressMonitoring;
	
	@Column(name="effectivePacing")
	private String effectivePacing;
	
	@Column(name="rubricnotes")
	private String rubricNotes;
	
	@Column(name="skillsstandards")
	private String skillStandards;
	
	@Column(name="glowsgrows")
	private String glowsGrows;
	
	
	
	//getters and setters
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

	public String getFacetoface() {
		return facetoface;
	}

	public void setFacetoface(String facetoface) {
		this.facetoface = facetoface;
	}

	public String getInterventionDelivery() {
		return interventionDelivery;
	}

	public void setInterventionDelivery(String interventiondelivery) {
		this.interventionDelivery = interventiondelivery;
	}

	public String getGradeLevel() {
		return gradeLevel;
	}

	public void setGradeLevel(String gradeLevel) {
		this.gradeLevel = gradeLevel;
	}

	public String getNumberOfStudents() {
		return numberOfStudents;
	}

	public void setNumberOfStudents(String numberOfStudents) {
		this.numberOfStudents = numberOfStudents;
	}

	public String getContentArea() {
		return contentArea;
	}

	public void setContentArea(String contentArea) {
		this.contentArea = contentArea;
	}

	public String getInterventionTiming() {
		return interventionTiming;
	}

	public void setInterventionTiming(String interventionTiming) {
		this.interventionTiming = interventionTiming;
	}

	public String getFidelity() {
		return fidelity;
	}

	public void setFidelity(String fidelity) {
		this.fidelity = fidelity;
	}

	public String getInstructorPrepared() {
		return instructorPrepared;
	}

	public void setInstructorPrepared(String instructorPrepared) {
		this.instructorPrepared = instructorPrepared;
	}

	public String getStudentsAppear() {
		return studentsAppear;
	}

	public void setStudentsAppear(String studentsAppear) {
		this.studentsAppear = studentsAppear;
	}

	public String getLessonPlan() {
		return lessonPlan;
	}

	public void setLessonPlan(String lessonPlan) {
		this.lessonPlan = lessonPlan;
	}

	public String getStandardsBased() {
		return standardsBased;
	}

	public void setStandardsBased(String standardsBased) {
		this.standardsBased = standardsBased;
	}

	public String getLessonObjectives() {
		return lessonObjectives;
	}

	public void setLessonObjectives(String lessonObjectives) {
		this.lessonObjectives = lessonObjectives;
	}

	public String getLessonMatched() {
		return lessonMatched;
	}

	public void setLessonMatched(String lessonMatched) {
		this.lessonMatched = lessonMatched;
	}

	public String getClearInstructions() {
		return clearInstructions;
	}

	public void setClearInstructions(String clearInstructions) {
		this.clearInstructions = clearInstructions;
	}

	public String getInstructorEncouragement() {
		return instructorEncouragement;
	}

	public void setInstructorEncouragement(String instructorEncouragement) {
		this.instructorEncouragement = instructorEncouragement;
	}

	public String getEffectiveModeling() {
		return effectiveModeling;
	}

	public void setEffectiveModeling(String effectiveModeling) {
		this.effectiveModeling = effectiveModeling;
	}

	public String getEvidenceBased() {
		return evidenceBased;
	}

	public void setEvidenceBased(String evidenceBased) {
		this.evidenceBased = evidenceBased;
	}

	public String getInstructionalComponents() {
		return instructionalComponents;
	}

	public void setInstructionalComponents(String instructionalComponents) {
		this.instructionalComponents = instructionalComponents;
	}

	public String getPositiveFeedback() {
		return positiveFeedback;
	}

	public void setPositiveFeedback(String positiveFeedback) {
		this.positiveFeedback = positiveFeedback;
	}

	public String getProgressMonitoring() {
		return progressMonitoring;
	}

	public void setProgressMonitoring(String progressMonitoring) {
		this.progressMonitoring = progressMonitoring;
	}

	public String getEffectivePacing() {
		return effectivePacing;
	}

	public void setEffectivePacing(String effectivePacing) {
		this.effectivePacing = effectivePacing;
	}

	public String getRubricNotes() {
		return rubricNotes;
	}

	public void setRubricNotes(String rubricNotes) {
		this.rubricNotes = rubricNotes;
	}

	public String getSkillStandards() {
		return skillStandards;
	}

	public void setSkillStandards(String skillStandards) {
		this.skillStandards = skillStandards;
	}

	public String getGlowsGrows() {
		return glowsGrows;
	}

	public void setGlowsGrows(String glowsGrows) {
		this.glowsGrows = glowsGrows;
	}

	
	

}
