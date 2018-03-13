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

@Entity(name = "ruberic")
public class RubricData implements Serializable {
	private static final long serialVersionUID = -7619923313291653382L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(name="schoolid")
	private Integer schoolId;

	@Column(name="teacherid")
	private Integer teacherId;

	@Column(name="userid")
	private String userId;

	@Column(name="date")
	@Temporal(TemporalType.DATE)
	private Date entryDate;
	
	@Column(name="timeobserved")
	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "hh:mm")
	private Date timeObserved;

	@Column
	private String observed;

	@Column
	private String planning;

	@Column(name="assessmentanddata")
	private String assessmentAndData;

	@Column
	private String path;

	@Column
	private String place;

	@Column
	private String pace;

	@Column(name="classroommanagement")
	private String classroomManagement;

	@Column(name="teacherrole")
	private String teacherRole;

	@Column(name="studentengagement")
	private String studentEngagement;

	@Column(name="studentcollaboration")
	private String studentCollaboration;

	@Column
	private String technology;

	@Column
	private String appropriately;

	@Column
	private String working;

	@Column
	private String collaborative;

	@Column
	private String authentic;

	@Column
	private String forming;

	@Column
	private String actively;

	@Column
	private String peer;

	@Column
	private String completing;

	@Column
	private String authentically;

	@Column
	private String conferencing;

	@Column
	private String providing;

	@Column
	private String differentiating;

	@Column
	private String opportunities;

	@Column
	private String designing;

	@Column
	private String complexity;

	@Column
	private String critical;

	@Column
	private String reinforcing;

	@Column
	private String monitoring;

	@Column(name="rubricnotes")
	private String rubricNotes;
	
/*	
 	These values were not being submitted in old form so taking them out for now. Might be needed for report?
 
    private String collaboratively;
	private String appropriate;
	private String leveraging;
	private String initiating;
	private String directing;
*/

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

	public Date getEntryDate() {
		return entryDate;
	}

	public void setEntryDate(Date entryDate) {
		this.entryDate = entryDate;
	}

	public Date getTimeObserved() {
		return timeObserved;
	}

	public void setTimeObserved(Date timeObserved) {
		this.timeObserved = timeObserved;
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

	public String getAssessmentAndData() {
		return assessmentAndData;
	}

	public void setAssessmentAndData(String assessmentAndData) {
		this.assessmentAndData = assessmentAndData;
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

	public String getClassroomManagement() {
		return classroomManagement;
	}

	public void setClassroomManagement(String classroomManagement) {
		this.classroomManagement = classroomManagement;
	}

	public String getTeacherRole() {
		return teacherRole;
	}

	public void setTeacherRole(String teacherRole) {
		this.teacherRole = teacherRole;
	}

	public String getStudentEngagement() {
		return studentEngagement;
	}

	public void setStudentEngagement(String studentEngagement) {
		this.studentEngagement = studentEngagement;
	}

	public String getStudentCollaboration() {
		return studentCollaboration;
	}

	public void setStudentCollaboration(String studentCollaboration) {
		this.studentCollaboration = studentCollaboration;
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public String getAppropriately() {
		return appropriately;
	}

	public void setAppropriately(String appropriately) {
		this.appropriately = appropriately;
	}

	public String getWorking() {
		return working;
	}

	public void setWorking(String working) {
		this.working = working;
	}

	public String getCollaborative() {
		return collaborative;
	}

	public void setCollaborative(String collaborative) {
		this.collaborative = collaborative;
	}

	public String getAuthentic() {
		return authentic;
	}

	public void setAuthentic(String authentic) {
		this.authentic = authentic;
	}

	public String getForming() {
		return forming;
	}

	public void setForming(String forming) {
		this.forming = forming;
	}

	public String getActively() {
		return actively;
	}

	public void setActively(String actively) {
		this.actively = actively;
	}

	public String getPeer() {
		return peer;
	}

	public void setPeer(String peer) {
		this.peer = peer;
	}

	public String getCompleting() {
		return completing;
	}

	public void setCompleting(String completing) {
		this.completing = completing;
	}

	public String getAuthentically() {
		return authentically;
	}

	public void setAuthentically(String authentically) {
		this.authentically = authentically;
	}

	public String getConferencing() {
		return conferencing;
	}

	public void setConferencing(String conferencing) {
		this.conferencing = conferencing;
	}

	public String getProviding() {
		return providing;
	}

	public void setProviding(String providing) {
		this.providing = providing;
	}

	public String getDifferentiating() {
		return differentiating;
	}

	public void setDifferentiating(String differentiating) {
		this.differentiating = differentiating;
	}

	public String getOpportunities() {
		return opportunities;
	}

	public void setOpportunities(String opportunities) {
		this.opportunities = opportunities;
	}

	public String getDesigning() {
		return designing;
	}

	public void setDesigning(String designing) {
		this.designing = designing;
	}

	public String getComplexity() {
		return complexity;
	}

	public void setComplexity(String complexity) {
		this.complexity = complexity;
	}

	public String getCritical() {
		return critical;
	}

	public void setCritical(String critical) {
		this.critical = critical;
	}

	public String getReinforcing() {
		return reinforcing;
	}

	public void setReinforcing(String reinforcing) {
		this.reinforcing = reinforcing;
	}

	public String getMonitoring() {
		return monitoring;
	}

	public void setMonitoring(String monitoring) {
		this.monitoring = monitoring;
	}

	public String getRubricNotes() {
		return rubricNotes;
	}

	public void setRubricNotes(String rubricNotes) {
		this.rubricNotes = rubricNotes;
	}
}
