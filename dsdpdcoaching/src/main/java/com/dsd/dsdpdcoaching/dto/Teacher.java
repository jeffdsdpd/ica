package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "teachers")
public class Teacher implements Serializable {
	private static final long serialVersionUID = 197457185756925814L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@Column(name="schoolid")
	private Integer schoolId;

	@Column
	private String name;

	@Column(name = "emailaddress")
	private String emailAddress;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getSchoolid() {
		return schoolId;
	}

	public void setSchoolid(Integer schoolid) {
		this.schoolId = schoolid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
}
