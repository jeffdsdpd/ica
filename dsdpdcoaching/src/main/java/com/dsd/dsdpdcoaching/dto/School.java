package com.dsd.dsdpdcoaching.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name = "SCHOOLS")
public class School implements Serializable {
	private static final long serialVersionUID = 1646739365424179981L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column
	private String name;

	@Column
	private String admin;

	@Column(name = "admin_emailaddress")
	private String adminEmailAddress;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "school")
	private Set<UserSchool> userSchool = new HashSet<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAdmin() {
		return admin;
	}

	public void setAdmin(String admin) {
		this.admin = admin;
	}

	public String getAdminEmailAddress() {
		return adminEmailAddress;
	}

	public void setAdminEmailAddress(String adminEmailAddress) {
		this.adminEmailAddress = adminEmailAddress;
	}

	public Set<UserSchool> getUserSchool() {
		return userSchool;
	}

	public void setUserSchool(Set<UserSchool> userSchool) {
		this.userSchool = userSchool;
	}
}
