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

import org.springframework.stereotype.Component;

@Entity(name = "NINJA_LEVEL_TRAINING")
@Component
public class NinjaLevelTeachingData implements Serializable {

	private static final long serialVersionUID = 6174564017496033546L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Temporal(TemporalType.DATE)
	private Date date;
	 
	@Column(name="schoolid")
	private Integer schoolId;
	
	@Column(name="teacherid")
	private Integer teacherId;
	
	@Column(name="userid")
	private String userId;
	
	@Column(name="observed")
	private String observed;
	
	
	@Column(name="smallgroupwhite")
	private String smallgroupwhite;
	
	@Column(name="smallgroupyellow")
	private String smallgroupyellow;
	
	@Column(name="smallgrouporange")
	private String smallgrouporange;
	
	@Column(name="smallgroupgreen")
	private String smallgroupgreen;
	
	@Column(name="smallgroupblue")
	private String smallgroupblue;
	
	@Column(name="smallgrouppurple")
	private String smallgrouppurple;
	
	
	@Column(name="independentstudiowhite")
	private String independentstudiowhite;
	
	@Column(name="independentstudioyellow")
	private String independentstudioyellow;
	
	@Column(name="independentstudioorange")
	private String independentstudioorange;
	
	@Column(name="independentstudiogreen")
	private String independentstudiogreen;
	
	@Column(name="independentstudioblue")
	private String independentstudioblue;
	
	@Column(name="independentstudiopurple")
	private String independentstudiopurple;
	
		
	@Column(name="digitalcontentwhite")
	private String digitalcontentwhite;
	
	@Column(name="digitalcontentyellow")
	private String digitalcontentyellow;
	
	@Column(name="digitalcontentorange")
	private String digitalcontentorange;
	
	@Column(name="digitalcontentgreen")
	private String digitalcontentgreen;
	
	@Column(name="digitalcontentblue")
	private String digitalcontentblue;
	
	@Column(name="digitalcontentpurple")
	private String digitalcontentpurple;
	
	
	@Column(name="futurereadywhite")
	private String futurereadywhite;
	
	@Column(name="futurereadyyellow")
	private String futurereadyyellow;
	
	@Column(name="futurereadyorange")
	private String futurereadyorange;
	
	@Column(name="futurereadygreen")
	private String futurereadygreen;
	
	@Column(name="futurereadyblue")
	private String futurereadyblue;
	
	@Column(name="futurereadypurple")
	private String futurereadypurple;
	
	
	@Column(name="placewhite")
	private String placewhite;
	
	@Column(name="placeyellow")
	private String placeyellow;
	
	@Column(name="placeorange")
	private String placeorange;
	
	@Column(name="placegreen")
	private String placegreen;
	
	@Column(name="placeblue")
	private String placeblue;
	
	@Column(name="placepurple")
	private String placepurple;
	
	
	@Column(name="pathwhite")
	private String pathwhite;
	
	@Column(name="pathyellow")
	private String pathyellow;
	
	@Column(name="pathorange")
	private String pathorange;
	
	@Column(name="pathgreen")
	private String pathgreen;
	
	@Column(name="pathblue")
	private String pathblue;
	
	@Column(name="pathpurple")
	private String pathpurple;
	
	
	@Column(name="pacewhite")
	private String pacewhite;
	
	@Column(name="paceyellow")
	private String paceyellow;
	
	@Column(name="paceorange")
	private String paceorange;
	
	@Column(name="pacegreen")
	private String pacegreen;
	
	@Column(name="paceblue")
	private String paceblue;
	
	@Column(name="pacepurple")
	private String pacepurple;
	
	
	@Column(name="datawhite")
	private String datawhite;
	
	@Column(name="datayellow")
	private String datayellow;
	
	@Column(name="dataorange")
	private String dataorange;
	
	@Column(name="datagreen")
	private String datagreen;
	
	@Column(name="datablue")
	private String datablue;
	
	@Column(name="datapurple")
	private String datapurple;
	
	
	@Column(name="directionswhite")
	private String directionswhite;
	
	@Column(name="directionsyellow")
	private String directionsyellow;
	
	@Column(name="directionsorange")
	private String directionsorange;
	
	@Column(name="directionsgreen")
	private String directionsgreen;
	
	@Column(name="directionsblue")
	private String directionsblue;
	
	@Column(name="directionspurple")
	private String directionspurple;
	
	@Column(name="directionsbrown")
	private String directionsbrown;
	
	@Column(name="directionsred")
	private String directionsred;
	
	
	@Column(name="studentchoicewhite")
	private String studentchoicewhite;
	
	@Column(name="studentchoiceyellow")
	private String studentchoiceyellow;
	
	@Column(name="studentchoiceorange")
	private String studentchoiceorange;
	
	@Column(name="studentchoicegreen")
	private String studentchoicegreen;
	
	@Column(name="studentchoiceblue")
	private String studentchoiceblue;
	
	@Column(name="studentchoicepurple")
	private String studentchoicepurple;
	

	@Column(name="organizationwhite")
	private String organizationwhite;
	
	@Column(name="organizationyellow")
	private String organizationyellow;
	
	@Column(name="organizationorange")
	private String organizationorange;
	
	@Column(name="organizationgreen")
	private String organizationgreen;
	
	@Column(name="organizationblue")
	private String organizationblue;
	
	@Column(name="organizationpurple")
	private String organizationpurple;
	
	@Column(name="organizationbrown")
	private String organizationbrown;
	
	
	@Column(name="checklistwhite")
	private String checklistwhite;
	
	@Column(name="checklistyellow")
	private String checklistyellow;
	
	@Column(name="checklistorange")
	private String checklistorange;
	
	@Column(name="checklistgreen")
	private String checklistgreen;
	
	@Column(name="checklistblue")
	private String checklistblue;
	
	@Column(name="checklistpurple")
	private String checklistpurple;
	
	
	@Column(name="notes")
	private String notes;
	
	
	
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


	public String getSmallgroupwhite() {
		return smallgroupwhite;
	}

	public void setSmallgroupwhite(String smallgroupwhite) {
		this.smallgroupwhite = smallgroupwhite;
	}

	public String getSmallgroupyellow() {
		return smallgroupyellow;
	}

	public void setSmallgroupyellow(String smallgroupyellow) {
		this.smallgroupyellow = smallgroupyellow;
	}

	public String getSmallgrouporange() {
		return smallgrouporange;
	}

	public void setSmallgrouporange(String smallgrouporange) {
		this.smallgrouporange = smallgrouporange;
	}

	public String getSmallgroupgreen() {
		return smallgroupgreen;
	}

	public void setSmallgroupgreen(String smallgroupgreen) {
		this.smallgroupgreen = smallgroupgreen;
	}

	public String getSmallgroupblue() {
		return smallgroupblue;
	}

	public void setSmallgroupblue(String smallgroupblue) {
		this.smallgroupblue = smallgroupblue;
	}

	public String getSmallgrouppurple() {
		return smallgrouppurple;
	}

	public void setSmallgrouppurple(String smallgrouppurple) {
		this.smallgrouppurple = smallgrouppurple;
	}

	public String getIndependentstudiowhite() {
		return independentstudiowhite;
	}

	public void setIndependentstudiowhite(String independentstudiowhite) {
		this.independentstudiowhite = independentstudiowhite;
	}

	public String getIndependentstudioyellow() {
		return independentstudioyellow;
	}

	public void setIndependentstudioyellow(String independentstudioyellow) {
		this.independentstudioyellow = independentstudioyellow;
	}

	public String getIndependentstudioorange() {
		return independentstudioorange;
	}

	public void setIndependentstudioorange(String independentstudioorange) {
		this.independentstudioorange = independentstudioorange;
	}

	public String getIndependentstudiogreen() {
		return independentstudiogreen;
	}

	public void setIndependentstudiogreen(String independentstudiogreen) {
		this.independentstudiogreen = independentstudiogreen;
	}

	public String getIndependentstudioblue() {
		return independentstudioblue;
	}

	public void setIndependentstudioblue(String independentstudioblue) {
		this.independentstudioblue = independentstudioblue;
	}

	public String getIndependentstudiopurple() {
		return independentstudiopurple;
	}

	public void setIndependentstudiopurple(String independentstudiopurple) {
		this.independentstudiopurple = independentstudiopurple;
	}

	public String getDigitalcontentwhite() {
		return digitalcontentwhite;
	}

	public void setDigitalcontentwhite(String digitalcontentwhite) {
		this.digitalcontentwhite = digitalcontentwhite;
	}

	public String getDigitalcontentyellow() {
		return digitalcontentyellow;
	}

	public void setDigitalcontentyellow(String digitalcontentyellow) {
		this.digitalcontentyellow = digitalcontentyellow;
	}

	public String getDigitalcontentorange() {
		return digitalcontentorange;
	}

	public void setDigitalcontentorange(String digitalcontentorange) {
		this.digitalcontentorange = digitalcontentorange;
	}

	public String getDigitalcontentgreen() {
		return digitalcontentgreen;
	}

	public void setDigitalcontentgreen(String digitalcontentgreen) {
		this.digitalcontentgreen = digitalcontentgreen;
	}

	public String getDigitalcontentblue() {
		return digitalcontentblue;
	}

	public void setDigitalcontentblue(String digitalcontentblue) {
		this.digitalcontentblue = digitalcontentblue;
	}

	public String getDigitalcontentpurple() {
		return digitalcontentpurple;
	}

	public void setDigitalcontentpurple(String digitalcontentpurple) {
		this.digitalcontentpurple = digitalcontentpurple;
	}

	public String getFuturereadywhite() {
		return futurereadywhite;
	}

	public void setFuturereadywhite(String futurereadywhite) {
		this.futurereadywhite = futurereadywhite;
	}

	public String getFuturereadyyellow() {
		return futurereadyyellow;
	}

	public void setFuturereadyyellow(String futurereadyyellow) {
		this.futurereadyyellow = futurereadyyellow;
	}

	public String getFuturereadyorange() {
		return futurereadyorange;
	}

	public void setFuturereadyorange(String futurereadyorange) {
		this.futurereadyorange = futurereadyorange;
	}

	public String getFuturereadygreen() {
		return futurereadygreen;
	}

	public void setFuturereadygreen(String futurereadygreen) {
		this.futurereadygreen = futurereadygreen;
	}

	public String getFuturereadyblue() {
		return futurereadyblue;
	}

	public void setFuturereadyblue(String futurereadyblue) {
		this.futurereadyblue = futurereadyblue;
	}

	public String getFuturereadypurple() {
		return futurereadypurple;
	}

	public void setFuturereadypurple(String futurereadypurple) {
		this.futurereadypurple = futurereadypurple;
	}

	public String getPlacewhite() {
		return placewhite;
	}

	public void setPlacewhite(String placewhite) {
		this.placewhite = placewhite;
	}

	public String getPlaceyellow() {
		return placeyellow;
	}

	public void setPlaceyellow(String placeyellow) {
		this.placeyellow = placeyellow;
	}

	public String getPlaceorange() {
		return placeorange;
	}

	public void setPlaceorange(String placeorange) {
		this.placeorange = placeorange;
	}

	public String getPlacegreen() {
		return placegreen;
	}

	public void setPlacegreen(String placegreen) {
		this.placegreen = placegreen;
	}

	public String getPlaceblue() {
		return placeblue;
	}

	public void setPlaceblue(String placeblue) {
		this.placeblue = placeblue;
	}

	public String getPlacepurple() {
		return placepurple;
	}

	public void setPlacepurple(String placepurple) {
		this.placepurple = placepurple;
	}

	public String getPathwhite() {
		return pathwhite;
	}

	public void setPathwhite(String pathwhite) {
		this.pathwhite = pathwhite;
	}

	public String getPathyellow() {
		return pathyellow;
	}

	public void setPathyellow(String pathyellow) {
		this.pathyellow = pathyellow;
	}

	public String getPathorange() {
		return pathorange;
	}

	public void setPathorange(String pathorange) {
		this.pathorange = pathorange;
	}

	public String getPathgreen() {
		return pathgreen;
	}

	public void setPathgreen(String pathgreen) {
		this.pathgreen = pathgreen;
	}

	public String getPathblue() {
		return pathblue;
	}

	public void setPathblue(String pathblue) {
		this.pathblue = pathblue;
	}

	public String getPathpurple() {
		return pathpurple;
	}

	public void setPathpurple(String pathpurple) {
		this.pathpurple = pathpurple;
	}

	public String getPacewhite() {
		return pacewhite;
	}

	public void setPacewhite(String pacewhite) {
		this.pacewhite = pacewhite;
	}

	public String getPaceyellow() {
		return paceyellow;
	}

	public void setPaceyellow(String paceyellow) {
		this.paceyellow = paceyellow;
	}

	public String getPaceorange() {
		return paceorange;
	}

	public void setPaceorange(String paceorange) {
		this.paceorange = paceorange;
	}

	public String getPacegreen() {
		return pacegreen;
	}

	public void setPacegreen(String pacegreen) {
		this.pacegreen = pacegreen;
	}

	public String getPaceblue() {
		return paceblue;
	}

	public void setPaceblue(String paceblue) {
		this.paceblue = paceblue;
	}

	public String getPacepurple() {
		return pacepurple;
	}

	public void setPacepurple(String pacepurple) {
		this.pacepurple = pacepurple;
	}

	public String getDatawhite() {
		return datawhite;
	}

	public void setDatawhite(String datawhite) {
		this.datawhite = datawhite;
	}

	public String getDatayellow() {
		return datayellow;
	}

	public void setDatayellow(String datayellow) {
		this.datayellow = datayellow;
	}

	public String getDataorange() {
		return dataorange;
	}

	public void setDataorange(String dataorange) {
		this.dataorange = dataorange;
	}

	public String getDatagreen() {
		return datagreen;
	}

	public void setDatagreen(String datagreen) {
		this.datagreen = datagreen;
	}

	public String getDatablue() {
		return datablue;
	}

	public void setDatablue(String datablue) {
		this.datablue = datablue;
	}

	public String getDatapurple() {
		return datapurple;
	}

	public void setDatapurple(String datapurple) {
		this.datapurple = datapurple;
	}

	public String getDirectionswhite() {
		return directionswhite;
	}

	public void setDirectionswhite(String directionswhite) {
		this.directionswhite = directionswhite;
	}

	public String getDirectionsyellow() {
		return directionsyellow;
	}

	public void setDirectionsyellow(String directionsyellow) {
		this.directionsyellow = directionsyellow;
	}

	public String getDirectionsorange() {
		return directionsorange;
	}

	public void setDirectionsorange(String directionsorange) {
		this.directionsorange = directionsorange;
	}

	public String getDirectionsgreen() {
		return directionsgreen;
	}

	public void setDirectionsgreen(String directionsgreen) {
		this.directionsgreen = directionsgreen;
	}

	public String getDirectionsblue() {
		return directionsblue;
	}

	public void setDirectionsblue(String directionsblue) {
		this.directionsblue = directionsblue;
	}

	public String getDirectionspurple() {
		return directionspurple;
	}

	public void setDirectionspurple(String directionspurple) {
		this.directionspurple = directionspurple;
	}

	public String getDirectionsbrown() {
		return directionsbrown;
	}

	public void setDirectionsbrown(String directionsbrown) {
		this.directionsbrown = directionsbrown;
	}

	public String getDirectionsred() {
		return directionsred;
	}

	public void setDirectionsred(String directionsred) {
		this.directionsred = directionsred;
	}

	public String getStudentchoicewhite() {
		return studentchoicewhite;
	}

	public void setStudentchoicewhite(String studentchoicewhite) {
		this.studentchoicewhite = studentchoicewhite;
	}

	public String getStudentchoiceyellow() {
		return studentchoiceyellow;
	}

	public void setStudentchoiceyellow(String studentchoiceyellow) {
		this.studentchoiceyellow = studentchoiceyellow;
	}

	public String getStudentchoiceorange() {
		return studentchoiceorange;
	}

	public void setStudentchoiceorange(String studentchoiceorange) {
		this.studentchoiceorange = studentchoiceorange;
	}

	public String getStudentchoicegreen() {
		return studentchoicegreen;
	}

	public void setStudentchoicegreen(String studentchoicegreen) {
		this.studentchoicegreen = studentchoicegreen;
	}

	public String getStudentchoiceblue() {
		return studentchoiceblue;
	}

	public void setStudentchoiceblue(String studentchoiceblue) {
		this.studentchoiceblue = studentchoiceblue;
	}

	public String getStudentchoicepurple() {
		return studentchoicepurple;
	}

	public void setStudentchoicepurple(String studentchoicepurple) {
		this.studentchoicepurple = studentchoicepurple;
	}

	public String getOrganizationwhite() {
		return organizationwhite;
	}

	public void setOrganizationwhite(String organizationwhite) {
		this.organizationwhite = organizationwhite;
	}

	public String getOrganizationyellow() {
		return organizationyellow;
	}

	public void setOrganizationyellow(String organizationyellow) {
		this.organizationyellow = organizationyellow;
	}

	public String getOrganizationorange() {
		return organizationorange;
	}

	public void setOrganizationorange(String organizationorange) {
		this.organizationorange = organizationorange;
	}

	public String getOrganizationgreen() {
		return organizationgreen;
	}

	public void setOrganizationgreen(String organizationgreen) {
		this.organizationgreen = organizationgreen;
	}

	public String getOrganizationblue() {
		return organizationblue;
	}

	public void setOrganizationblue(String organizationblue) {
		this.organizationblue = organizationblue;
	}

	public String getOrganizationpurple() {
		return organizationpurple;
	}

	public void setOrganizationpurple(String organizationpurple) {
		this.organizationpurple = organizationpurple;
	}

	public String getOrganizationbrown() {
		return organizationbrown;
	}

	public void setOrganizationbrown(String organizationbrown) {
		this.organizationbrown = organizationbrown;
	}

	public String getChecklistwhite() {
		return checklistwhite;
	}

	public void setChecklistwhite(String checklistwhite) {
		this.checklistwhite = checklistwhite;
	}

	public String getChecklistyellow() {
		return checklistyellow;
	}

	public void setChecklistyellow(String checklistyellow) {
		this.checklistyellow = checklistyellow;
	}

	public String getChecklistorange() {
		return checklistorange;
	}

	public void setChecklistorange(String checklistorange) {
		this.checklistorange = checklistorange;
	}

	public String getChecklistgreen() {
		return checklistgreen;
	}

	public void setChecklistgreen(String checklistgreen) {
		this.checklistgreen = checklistgreen;
	}

	public String getChecklistblue() {
		return checklistblue;
	}

	public void setChecklistblue(String checklistblue) {
		this.checklistblue = checklistblue;
	}

	public String getChecklistpurple() {
		return checklistpurple;
	}

	public void setChecklistpurple(String checklistpurple) {
		this.checklistpurple = checklistpurple;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	
	
}

