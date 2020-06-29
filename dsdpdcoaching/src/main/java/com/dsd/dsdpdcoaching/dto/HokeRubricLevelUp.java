package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class HokeRubricLevelUp implements Serializable {

	private static final long serialVersionUID = 4917046084756329902L;
	private Integer levelupid;
	private String levelup;
	private String completed;
	
	public HokeRubricLevelUp() {
    }

    public HokeRubricLevelUp(Integer levelupid, String levelup, String completed) {
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
