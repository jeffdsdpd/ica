package com.dsd.dsdpdcoaching.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.RubricData;

@Repository
@Transactional
public class RubricDataDao {
	private static final Logger LOGGER = LoggerFactory.getLogger(RubricDataDao.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void saveRubricData(RubricData rubricData) {
		LOGGER.debug("Saving rubric data");
		entityManager.persist(rubricData);
	}
}
