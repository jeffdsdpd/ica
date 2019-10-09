package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "LEVEL_UP")
public class LevelUp implements Serializable {

	private static final long serialVersionUID = -7864258018033610410L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="rubricitem")
	private String rubricItem;
	
	@Column(name="phase1")
	private String phaseOne;
	
	@Column(name="phase2")
	private String phaseTwo;
	
	@Column(name="phase3")
	private String phaseThree;
	
	public String getRubricItem() {
		return rubricItem;
	}
	public void setRubricItem(String rubricItem) {
		this.rubricItem = rubricItem;
	}
	public String getPhaseOne() {
		return phaseOne;
	}
	public void setPhaseOne(String phaseOne) {
		this.phaseOne = phaseOne;
	}
	public String getPhaseTwo() {
		return phaseTwo;
	}
	public void setPhaseTwo(String phaseTwo) {
		this.phaseTwo = phaseTwo;
	}
	public String getPhaseThree() {
		return phaseThree;
	}
	public void setPhaseThree(String phaseThree) {
		this.phaseThree = phaseThree;
	}
}
