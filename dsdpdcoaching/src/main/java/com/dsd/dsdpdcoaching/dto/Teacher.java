package com.dsd.dsdpdcoaching.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Teacher {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 private Integer id;

}
