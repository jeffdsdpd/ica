package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PhaseValues implements Serializable {

	private static final long serialVersionUID = -5710286257790721091L;
	
	//This constructor is needed to map the database result set
	public PhaseValues() {
    };
	
	@Id
	private Long id; 
	
	private Integer phase1;
	private Integer phase2;
	private Integer phase3;
	private Integer notObserved;
	
	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
	
	public Integer getPhase1() {
		return phase1;
	}
	
	public void setPhase1(Integer phase1) {
		this.phase1 = phase1;
	}
	
	public Integer getPhase2() {
		return phase2;
	}
	
	public void setPhase2(Integer phase2) {
		this.phase2 = phase2;
	}
	
	public Integer getPhase3() {
		return phase3;
	}
	
	public void setPhase3(Integer phase3) {
		this.phase3 = phase3;
	}
	
	public Integer getNotObserved() {
		return notObserved;
	}
	
	public void setNotObserved(Integer notObserved) {
		this.notObserved = notObserved;
	}
}
