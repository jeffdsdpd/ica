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
	
	public TeacherProgressionReportData() {
		
	};	
	
	@Id
	private Long id;
	private int schoolId;
	private String teacherId;
	private Date date = null;
	private Date dateLatest = null;
	
	private int checklists;
	private int digitalcontent;
	private int seating;
	private int timing;
	private int differentiation;
	private int studentgroups;
	private int data;
	private int reflection;
	private int studentlearning;
	
	private int checklistsLatest;
	private int digitalcontentLatest;
	private int seatingLatest;
	private int timingLatest;
	private int differentiationLatest;
	private int studentgroupsLatest;
	private int dataLatest;
	private int reflectionLatest;
	private int studentlearningLatest;
	
	
	public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.dateLatest = date;
	}
	public Date getDateLatest() {
		return dateLatest;
	}
	public void setDateLatest(Date date) {
		this.date = date;
	}
	public int getChecklists() {
		return checklists;
	}
	public void setChecklists(int checklists) {
		this.checklists = checklists;
	}
	public int getDigitalcontent() {
		return digitalcontent;
	}
	public void setDigitalcontent(int digitalcontent) {
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
	public int getStudentgroups() {
		return studentgroups;
	}
	public void setStudentgroups(int studentgroups) {
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
	public int getStudentlearning() {
		return studentlearning;
	}
	public void setStudentlearning(int studentlearning) {
		this.studentlearning = studentlearning;
	}
	public int getChecklistsLatest() {
		return checklistsLatest;
	}
	public void setChecklistsLatest(int checklistsLatest) {
		this.checklistsLatest = checklistsLatest;
	}
	public int getDigitalcontentLatest() {
		return digitalcontentLatest;
	}
	public void setDigitalcontentLatest(int digitalcontentLatest) {
		this.digitalcontentLatest = digitalcontentLatest;
	}
	public int getSeatingLatest() {
		return seatingLatest;
	}
	public void setSeatingLatest(int seatingLatest) {
		this.seatingLatest = seatingLatest;
	}
	public int getTimingLatest() {
		return timingLatest;
	}
	public void setTimingLatest(int timingLatest) {
		this.timingLatest = timingLatest;
	}
	public int getDifferentiationLatest() {
		return differentiationLatest;
	}
	public void setDifferentiationLatest(int differentiationLatest) {
		this.differentiationLatest = differentiationLatest;
	}
	public int getStudentgroupsLatest() {
		return studentgroupsLatest;
	}
	public void setStudentgroupsLatest(int studentgroupsLatest) {
		this.studentgroupsLatest = studentgroupsLatest;
	}
	public int getDataLatest() {
		return dataLatest;
	}
	public void setDataLatest(int dataLatest) {
		this.dataLatest = dataLatest;
	}
	public int getReflectionLatest() {
		return reflectionLatest;
	}
	public void setReflectionLatest(int reflectionLatest) {
		this.reflectionLatest = reflectionLatest;
	}
	public int getStudentlearningLatest() {
		return studentlearningLatest;
	}
	public void setStudentlearningLatest(int studentlearningLatest) {
		this.studentlearningLatest = studentlearningLatest;
	}

	
}
