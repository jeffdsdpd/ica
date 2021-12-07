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

@Entity(name = "CHICAGO_BLEND_RUBRIC")
@Component
public class ChicagoBlendRubric implements Serializable {
	
	private static final long serialVersionUID = -1905006830927909452L;

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
	
	@Column(name="studentCollaboration")
	private String studentCollaboration;
	
	@Column(name="path")
	private String path;
	
	@Column(name="place")
	private String place;
	
	@Column(name="pace")
	private String pace;
	
	@Column(name="classroommanagement")
	private String classroommgmt;
	
	@Column(name="devices")
	private String devices;
	
	@Column(name="data")
	private String data;
	
	@Column(name="smallgroup")
	private String smallgroup;
	
	@Column(name="checklists")
	private String checklists;
	
	@Column(name="rubricnotes")
		private String rubricNotes;

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

		public String getStudentCollaboration() {
			return studentCollaboration;
		}

		public void setStudentCollaboration(String studentCollaboration) {
			this.studentCollaboration = studentCollaboration;
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

		public String getDevices() {
			return devices;
		}

		public void setDevices(String devices) {
			this.devices = devices;
		}

		public String getData() {
			return data;
		}

		public void setData(String data) {
			this.data = data;
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

		public void setRubricNotes(String rubricNotes) {
			this.rubricNotes = rubricNotes;
		}
		
	}
