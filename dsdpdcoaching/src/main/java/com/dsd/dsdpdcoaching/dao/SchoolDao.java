package com.dsd.dsdpdcoaching.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.School;

@Repository
@Transactional
public class SchoolDao {
	@PersistenceContext
	private EntityManager entityManager;
	
	public List<School> getSchools() {
	    return entityManager.createQuery("from schools", School.class)
	            .getResultList();
	}
}
