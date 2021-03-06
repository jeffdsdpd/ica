package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;

@Entity
@Component
public class TeacherProgressionReportData implements Serializable {

	private static final long serialVersionUID = -5238678864495240271L;
	
	@Id
	private Long id; 
	
	public TeacherProgressionReportData() {
		
	};
	
	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
	
	private int schoolId;
	private String teacherId;
	private Date date = null;
	private String planning = null;
	private String assessmentAndData = null;
	private String path = null;
	private String pace = null;
	private String place = null;
	private String classroomManagement = null;
	private String teacherRole = null;
	private String studentEngagement = null;
	private String studentCollaboration = null;
	private String technology = null;
	private Date dateLatest = null;
	private String planningLatest = null;
	private String assessmentAndDataLatest = null;
	private String pathLatest = null;
	private String paceLatest = null;
	private String placeLatest = null;
	private String classroomManagementLatest = null;
	private String teacherRoleLatest = null;
	private String studentEngagementLatest = null;
	private String studentCollaborationLatest = null;
	private String technologyLatest = null;
	
	public int getSchoolId() {
		return schoolId;
	}
	public void setSchoolId(int schoolId) {
		this.schoolId = schoolId;
	}
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
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
	public String getPace() {
		return pace;
	}
	public void setPace(String pace) {
		this.pace = pace;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
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
	public String getPlanningLatest() {
		return planningLatest;
	}
	public void setPlanningLatest(String planningLatest) {
		this.planningLatest = planningLatest;
	}
	public String getAssessmentAndDataLatest() {
		return assessmentAndDataLatest;
	}
	public void setAssessmentAndDataLatest(String assessmentAndDataLatest) {
		this.assessmentAndDataLatest = assessmentAndDataLatest;
	}
	public String getPathLatest() {
		return pathLatest;
	}
	public void setPathLatest(String pathLatest) {
		this.pathLatest = pathLatest;
	}
	public String getPaceLatest() {
		return paceLatest;
	}
	public void setPaceLatest(String paceLatest) {
		this.paceLatest = paceLatest;
	}
	public String getPlaceLatest() {
		return placeLatest;
	}
	public void setPlaceLatest(String placeLatest) {
		this.placeLatest = placeLatest;
	}
	public String getClassroomManagementLatest() {
		return classroomManagementLatest;
	}
	public void setClassroomManagementLatest(String classroomManagementLatest) {
		this.classroomManagementLatest = classroomManagementLatest;
	}
	public String getTeacherRoleLatest() {
		return teacherRoleLatest;
	}
	public void setTeacherRoleLatest(String teacherRoleLatest) {
		this.teacherRoleLatest = teacherRoleLatest;
	}
	public String getStudentEngagementLatest() {
		return studentEngagementLatest;
	}
	public void setStudentEngagementLatest(String studentEngagementLatest) {
		this.studentEngagementLatest = studentEngagementLatest;
	}
	public String getStudentCollaborationLatest() {
		return studentCollaborationLatest;
	}
	public void setStudentCollaborationLatest(String studentCollaborationLatest) {
		this.studentCollaborationLatest = studentCollaborationLatest;
	}
	public String getTechnologyLatest() {
		return technologyLatest;
	}
	public void setTechnologyLatest(String technologyLatest) {
		this.technologyLatest = technologyLatest;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Date getDateLatest() {
		return dateLatest;
	}
	public void setDateLatest(Date dateLatest) {
		this.dateLatest = dateLatest;
	}
}
