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
    
	private String name;
	private String date;
	private String interactionMethod;
	private String userid;
	private int phase;
	
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
	public int getPhase() {
		return phase;
	}
	public void setPhase(int phase) {
		this.phase = phase;
	}
}
