package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import java.util.Date;


import org.springframework.stereotype.Component;

@Component
public class NinjaReportData implements Serializable {

	private static final long serialVersionUID = -3004417416907941444L;
	
	private Date date;
	private Integer schoolId;
	private Integer teacherId;
	private String userId;
	private String observed;
	private String smallGroupColor;
	private String independentStudioColor;
	private String digitalContentColor;
	private String futureReadyColor;
	private String placeColor;
	private String pathColor;
	private String paceColor;
	private String dataColor;
	private String directionsColor;
	private String studentChoiceColor;
	private String organizationColor;
	private String checklistColor;
	private String notes;
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
	public String getSmallGroupColor() {
		return smallGroupColor;
	}
	public void setSmallGroupColor(String smallGroupColor) {
		this.smallGroupColor = smallGroupColor;
	}
	public String getIndependentStudioColor() {
		return independentStudioColor;
	}
	public void setIndependentStudioColor(String independentStudioColor) {
		this.independentStudioColor = independentStudioColor;
	}
	public String getDigitalContentColor() {
		return digitalContentColor;
	}
	public void setDigitalContentColor(String digitalContentColor) {
		this.digitalContentColor = digitalContentColor;
	}
	public String getFutureReadyColor() {
		return futureReadyColor;
	}
	public void setFutureReadyColor(String futureReadyColor) {
		this.futureReadyColor = futureReadyColor;
	}
	public String getPlaceColor() {
		return placeColor;
	}
	public void setPlaceColor(String placeColor) {
		this.placeColor = placeColor;
	}
	public String getPathColor() {
		return pathColor;
	}
	public void setPathColor(String pathColor) {
		this.pathColor = pathColor;
	}
	public String getPaceColor() {
		return paceColor;
	}
	public void setPaceColor(String paceColor) {
		this.paceColor = paceColor;
	}
	public String getDataColor() {
		return dataColor;
	}
	public void setDataColor(String dataColor) {
		this.dataColor = dataColor;
	}
	public String getDirectionsColor() {
		return directionsColor;
	}
	public void setDirectionsColor(String directionsColor) {
		this.directionsColor = directionsColor;
	}
	public String getStudentChoiceColor() {
		return studentChoiceColor;
	}
	public void setStudentChoiceColor(String studentChoiceColor) {
		this.studentChoiceColor = studentChoiceColor;
	}
	public String getOrganizationColor() {
		return organizationColor;
	}
	public void setOrganizationColor(String organizationColor) {
		this.organizationColor = organizationColor;
	}
	public String getChecklistColor() {
		return checklistColor;
	}
	public void setChecklistColor(String checklistColor) {
		this.checklistColor = checklistColor;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
}
