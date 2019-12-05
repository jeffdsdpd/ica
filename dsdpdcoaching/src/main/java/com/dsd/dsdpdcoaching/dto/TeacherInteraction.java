package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TeacherInteraction implements Serializable {

	private static final long serialVersionUID = -258119781497048652L;
	
	//This constructor is needed to map the database result set
	public TeacherInteraction() {
    };
	
    @Id
	private Long id;
    
	private String teacherName;
	private String date;
	private String interactionMethod;
	private String userid;
	private int rubricscore;
	
	public String getTeacherName() {
		return teacherName;
	}
	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getInteractionMethod() {
		return interactionMethod;
	}
	public void setInteractionMethod(String interactionMethod) {
		this.interactionMethod = interactionMethod;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public int getRubricscore() {
		return rubricscore;
	}
	public void setRubricscore(int rubricscore) {
		this.rubricscore = rubricscore;
	}
}
