package com.dsd.dsdpdcoaching.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.dsd.dsdpdcoaching.dto.NinjaLevelTeachingData;

@Repository
@Transactional
public class NinjaLevelTrainingDao {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	//Called by the JSONRequestController to save rubric data on rubricForm.html
		public void saveNinjaTrainingData(NinjaLevelTeachingData data) {
			entityManager.persist(data);		
		}
		
		@SuppressWarnings("unchecked")
		public List<NinjaLevelTeachingData> getNinjaFormDatesByTeacherID(Integer schoolId, Integer teacherId) {
				return entityManager.createQuery(
						"from NINJA_LEVEL_TRAINING where schoolid = :schoolId and teacherid = :teacherId ORDER BY date DESC")
						.setParameter("schoolId", schoolId)
		    			.setParameter("teacherId", teacherId)
		    			.getResultList();
			}
		
		public NinjaLevelTeachingData getNinjaTrainingRecordById(Integer recordId) {
			return entityManager.createQuery("from NINJA_LEVEL_TRAINING where id = :recordId", NinjaLevelTeachingData.class)
						.setParameter("recordId", recordId)
						.getSingleResult();
		}

}
