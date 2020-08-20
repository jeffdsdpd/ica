package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "HOKE_LEVEL_UP")
public class HokeLevelUp implements Serializable {

	private static final long serialVersionUID = -6178865320190509458L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="rubricitem")
	private String rubricItem;
	
	@Column(name="levelup")
	private String levelup;
	
	public String getRubricItem() {
		return rubricItem;
	}
	public void setRubricItem(String rubricItem) {
		this.rubricItem = rubricItem;
	}
	public String getLevelup() {
		return levelup;
	}
	public void setLevelup(String levelup) {
		this.levelup = levelup;
	}
	
}
