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

@Entity(name = "HOKE_MODEL_TEACHER_RUBRIC")
@Component
public class HokeModelTeacherRubric implements Serializable {

	private static final long serialVersionUID = -4430062765543974520L;
	
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
	
	@Column(name="idccontentalignment1")
	private String idccontentalignment1;
	
	@Column(name="idccontentalignment2")
	private String idccontentalignment2;
	
	@Column(name="idcnotes")
	private String idcnotes;
	
	@Column(name="tistandardalignment1")
	private String tistandardalignment1;
	
	@Column(name="tistandardalignment2")
	private String tistandardalignment2;
	
	@Column(name="tismallgroup1")
	private String tismallgroup1;
	
	@Column(name="tismallgroup2")
	private String tismallgroup2;
	
	@Column(name="tismallgroup3")
	private String tismallgroup3;
	
	@Column(name="tiintentionalgrouping1")
	private String tiintentionalgrouping1;
	
	@Column(name="tiintentionalgrouping2")
	private String tiintentionalgrouping2;
	
	@Column(name="tinotes")
	private String tinotes;
	
	@Column(name="engcollaboration")
	private String engcollaboration;
	
	@Column(name="engchoice")
	private String engchoice;
	
	@Column(name="engcreation")
	private String engcreation;
	
	@Column(name="engcriticalthinking")
	private String engcriticalthinking;
	
	@Column(name="engnotes")
	private String engnotes;
	
	@Column(name="engactiveparticipation")
	private String engactiveparticipation;
	
	@Column(name="envclassroommanagement")
	private String envclassroommanagement;
	
	@Column(name="envphysicalenvironment")
	private String envphysicalenvironment;
	
	@Column(name="envtimemanagement1")
	private String envtimemanagement1;
	
	@Column(name="envtimemanagement2")
	private String envtimemanagement2;
	
	@Column(name="envdigitalcitizenship")
	private String envdigitalcitizenship;
	
	@Column(name="envnotes")
	private String envnotes;
	
	@Column(name="srarticulate")
	private String srarticulate;
	
	@Column(name="srteacherfeedback")
	private String srteacherfeedback;
	
	@Column(name="srnotes")
	private String srnotes;
	
	@Column(name="ddduseofdata")
	private String ddduseofdata;
	
	@Column(name="dddnotes")
	private String dddnotes;
	
	@Column(name="rubricnotes")
	private String rubricNotes;
	
	@Column(name="rubricscore")
	private int rubricScore;
	
	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name="HOKE_RUBRIC_LEVELUP", joinColumns=@JoinColumn(name = "rubricid", referencedColumnName = "id"))
	@Column(name="levelup")
    private List<HokeRubricLevelUp> levelupList;
	
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

	public String getIdccontentalignment1() {
		return idccontentalignment1;
	}

	public void setIdccontentalignment1(String idccontentalignment1) {
		this.idccontentalignment1 = idccontentalignment1;
	}

	public String getIdccontentalignment2() {
		return idccontentalignment2;
	}

	public void setIdccontentalignment2(String idccontentalignment2) {
		this.idccontentalignment2 = idccontentalignment2;
	}

	public String getTistandardalignment1() {
		return tistandardalignment1;
	}

	public void setTistandardalignment1(String tistandardalignment1) {
		this.tistandardalignment1 = tistandardalignment1;
	}

	public String getTistandardalignment2() {
		return tistandardalignment2;
	}

	public void setTistandardalignment2(String tistandardalignment2) {
		this.tistandardalignment2 = tistandardalignment2;
	}

	public String getTismallgroup1() {
		return tismallgroup1;
	}

	public void setTismallgroup1(String tismallgroup1) {
		this.tismallgroup1 = tismallgroup1;
	}

	public String getTismallgroup2() {
		return tismallgroup2;
	}

	public void setTismallgroup2(String tismallgroup2) {
		this.tismallgroup2 = tismallgroup2;
	}

	public String getTismallgroup3() {
		return tismallgroup3;
	}

	public void setTismallgroup3(String tismallgroup3) {
		this.tismallgroup3 = tismallgroup3;
	}

	public String getTiintentionalgrouping1() {
		return tiintentionalgrouping1;
	}

	public void setTiintentionalgrouping1(String tiintentionalgrouping1) {
		this.tiintentionalgrouping1 = tiintentionalgrouping1;
	}

	public String getTiintentionalgrouping2() {
		return tiintentionalgrouping2;
	}

	public void setTiintentionalgrouping2(String tiintentionalgrouping2) {
		this.tiintentionalgrouping2 = tiintentionalgrouping2;
	}

	public String getEngcollaboration() {
		return engcollaboration;
	}

	public void setEngcollaboration(String engcollaboration) {
		this.engcollaboration = engcollaboration;
	}

	public String getEngchoice() {
		return engchoice;
	}

	public void setEngchoice(String engchoice) {
		this.engchoice = engchoice;
	}

	public String getEngcreation() {
		return engcreation;
	}

	public void setEngcreation(String engcreation) {
		this.engcreation = engcreation;
	}

	public String getEngcriticalthinking() {
		return engcriticalthinking;
	}

	public void setEngcriticalthinking(String engcriticalthinking) {
		this.engcriticalthinking = engcriticalthinking;
	}

	public String getEngactiveparticipation() {
		return engactiveparticipation;
	}

	public void setEngactiveparticipation(String engactiveparticipation) {
		this.engactiveparticipation = engactiveparticipation;
	}

	public String getEnvclassroommanagement() {
		return envclassroommanagement;
	}

	public void setEnvclassroommanagement(String envclassroommanagement) {
		this.envclassroommanagement = envclassroommanagement;
	}

	public String getEnvphysicalenvironment() {
		return envphysicalenvironment;
	}

	public void setEnvphysicalenvironment(String envphysicalenvironment) {
		this.envphysicalenvironment = envphysicalenvironment;
	}

	public String getEnvtimemanagement1() {
		return envtimemanagement1;
	}

	public void setEnvtimemanagement1(String envtimemanagement1) {
		this.envtimemanagement1 = envtimemanagement1;
	}

	public String getEnvtimemanagement2() {
		return envtimemanagement2;
	}

	public void setEnvtimemanagement2(String envtimemanagement2) {
		this.envtimemanagement2 = envtimemanagement2;
	}

	public String getEnvdigitalcitizenship() {
		return envdigitalcitizenship;
	}

	public void setEnvdigitalcitizenship(String envdigitalcitizenship) {
		this.envdigitalcitizenship = envdigitalcitizenship;
	}

	public String getSrarticulate() {
		return srarticulate;
	}

	public void setSrarticulate(String srarticulate) {
		this.srarticulate = srarticulate;
	}

	public String getSrteacherfeedback() {
		return srteacherfeedback;
	}

	public void setSrteacherfeedback(String srteacherfeedback) {
		this.srteacherfeedback = srteacherfeedback;
	}

	public String getDdduseofdata() {
		return ddduseofdata;
	}

	public void setDdduseofdata(String ddduseofdata) {
		this.ddduseofdata = ddduseofdata;
	}

	public String getRubricNotes() {
		return rubricNotes;
	}

	public void setRubricNotes(String rubricNotes) {
		this.rubricNotes = rubricNotes;
	}

	public int getRubricScore() {
		return rubricScore;
	}

	public void setRubricScore(int rubricScore) {
		this.rubricScore = rubricScore;
	}

	public List<HokeRubricLevelUp> getLevelupList() {
		return levelupList;
	}

	public void setLevelupList(List<HokeRubricLevelUp> levelupList) {
		this.levelupList = levelupList;
	}

	public String getQuestions() {
		return questions;
	}

	public void setQuestions(String questions) {
		this.questions = questions;
	}

	public String getIdcnotes() {
		return idcnotes;
	}

	public void setIdcnotes(String idcnotes) {
		this.idcnotes = idcnotes;
	}

	public String getTinotes() {
		return tinotes;
	}

	public void setTinotes(String tinotes) {
		this.tinotes = tinotes;
	}

	public String getEngnotes() {
		return engnotes;
	}

	public void setEngnotes(String engnotes) {
		this.engnotes = engnotes;
	}

	public String getEnvnotes() {
		return envnotes;
	}

	public void setEnvnotes(String envnotes) {
		this.envnotes = envnotes;
	}

	public String getSrnotes() {
		return srnotes;
	}

	public void setSrnotes(String srnotes) {
		this.srnotes = srnotes;
	}

	public String getDddnotes() {
		return dddnotes;
	}

	public void setDddnotes(String dddnotes) {
		this.dddnotes = dddnotes;
	}
	
	
	
}
