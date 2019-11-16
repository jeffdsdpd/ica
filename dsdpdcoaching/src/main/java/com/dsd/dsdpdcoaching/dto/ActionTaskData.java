package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import javax.persistence.Embeddable;

@Embeddable
public class ActionTaskData implements Serializable {

	private static final long serialVersionUID = -8016324593104424037L;

	private Integer taskid;
	private String task;
	private String completed;
	
	public ActionTaskData() {
    }

    public ActionTaskData(Integer taskid, String task, String completed) {
    		this.taskid = taskid;
        this.task = task;
        this.completed = completed;
    }

	public Integer getTaskid() {
		return taskid;
	}

	public void setTaskid(Integer taskid) {
		this.taskid = taskid;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getCompleted() {
		return completed;
	}

	public void setCompleted(String completed) {
		this.completed = completed;
	}

}