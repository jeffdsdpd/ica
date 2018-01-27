package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

@Entity(name = "coaching_interactions")
public class CoachingData implements Serializable {
	private static final long serialVersionUID = 5994240587457165352L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column
	private Integer schoolid;

	@Transient
	private List<Integer> teacherids;
	
	@Column
	private Integer teacherid;

	@Column
	private String userid;

	@Temporal(TemporalType.DATE)
	private Date date;

	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "hh:mma")
	private Date startTime;

	@Temporal(TemporalType.TIMESTAMP)
	@DateTimeFormat(pattern = "hh:mma")
	private Date endTime;

	@Column
	@Lob
	private byte[] photo;

	@Column
	private String lessonTitle;

	@Column
	private String notes;

	@Column
	private String strategies;

	@Column
	private String goals;

	@Column
	private String tools;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getSchoolid() {
		return schoolid;
	}

	public void setSchoolid(Integer schoolid) {
		this.schoolid = schoolid;
	}

	public List<Integer> getTeacherids() {
		return teacherids;
	}

	public void setTeacherids(List<Integer> teacherids) {
		this.teacherids = teacherids;
	}

	public Integer getTeacherid() {
		return teacherid;
	}

	public void setTeacherid(Integer teacherid) {
		this.teacherid = teacherid;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public byte[] getPhoto() {
		return photo;
	}

	public void setPhoto(byte[] photo) {
		this.photo = photo;
	}

	public String getLessonTitle() {
		return lessonTitle;
	}

	public void setLessonTitle(String lessonTitle) {
		this.lessonTitle = lessonTitle;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public String getStrategies() {
		return strategies;
	}

	public void setStrategies(String strategies) {
		this.strategies = strategies;
	}

	public String getGoals() {
		return goals;
	}

	public void setGoals(String goals) {
		this.goals = goals;
	}

	public String getTools() {
		return tools;
	}

	public void setTools(String tools) {
		this.tools = tools;
	}
}
