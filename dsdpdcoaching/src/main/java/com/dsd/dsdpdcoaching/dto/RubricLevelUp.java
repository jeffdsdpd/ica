package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class RubricLevelUp implements Serializable {

	private static final long serialVersionUID = 7180706936971920044L;
	
	private Integer levelupid;
	private String levelup;
	private String completed;
	
	public RubricLevelUp() {
    }

    public RubricLevelUp(Integer levelupid, String levelup, String completed) {
    		this.levelupid = levelupid;
        this.levelup = levelup;
        this.completed = completed;
     }

	public Integer getLevelupid() {
		return levelupid;
	}

	public void setLevelupid(Integer levelupid) {
		this.levelupid = levelupid;
	}

	public String getLevelup() {
		return levelup;
	}

	public void setLevelup(String levelup) {
		this.levelup = levelup;
	}

	public String getCompleted() {
		return completed;
	}

	public void setCompleted(String completed) {
		this.completed = completed;
	}
}
