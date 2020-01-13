package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TeacherInteractionForDailyReport implements Serializable {

	private static final long serialVersionUID = 4454948424794841710L;

	//This constructor is needed to map the database result set
	public TeacherInteractionForDailyReport() {
    };
	
    @Id
	private Long id;
    
	private String name;
	private String teacherEmail;
	private String date;
	private String interactionMethod;
	private String userid;
	private int rubricscore;
	private String coachEmail;
	
	public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getTeacherEmail() {
		return teacherEmail;
	}
	public void setTeacherEmail(String teacherEmail) {
		this.teacherEmail = teacherEmail;
	}
	public String getCoachEmail() {
		return coachEmail;
	}
	public void setCoachEmail(String coachEmail) {
		this.coachEmail = coachEmail;
	}
	
}
