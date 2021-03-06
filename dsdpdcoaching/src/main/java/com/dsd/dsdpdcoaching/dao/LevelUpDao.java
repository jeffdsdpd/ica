package com.dsd.dsdpdcoaching.dao;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class LevelUpDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	public String[][] getLevelUpData(HttpServletRequest request, HttpServletResponse response) {

	String result1 = null;
	String result2 = null;
	String result3 = null;
	//String levelData1 = null;
	//String levelData2 = null;
	//String levelData3 = null;
	String levelUpPageDisplay[][] = new String[3][2];
	
	String rubricItemName1 = request.getParameter("rubricItemName1");
	String rubricItemName2 = request.getParameter("rubricItemName2");
	String rubricItemName3 = request.getParameter("rubricItemName3");
	int rubricItemValue1 = Integer.parseInt(request.getParameter("rubricItemValue1"))  + 1;
	int rubricItemValue2 = Integer.parseInt(request.getParameter("rubricItemValue2"))  + 1;
	int rubricItemValue3 = Integer.parseInt(request.getParameter("rubricItemValue3")) + 1;

	String sql = "SELECT PHASE? FROM LEVEL_UP WHERE RUBRICITEM = ?";
	Query query = entityManager.createNativeQuery(sql);
	
	query.setParameter(1, rubricItemValue1);
	query.setParameter(2, rubricItemName1.toUpperCase());
	result1 = (String) query.getSingleResult();
	levelUpPageDisplay[0][0]=rubricItemName1;
	levelUpPageDisplay[0][1]=result1;
	
	query.setParameter(1, rubricItemValue2);
	query.setParameter(2, rubricItemName2.toUpperCase());
	result2 = (String) query.getSingleResult();
	levelUpPageDisplay[1][0]=rubricItemName2;
	levelUpPageDisplay[1][1]=result2;
	
	query.setParameter(1, rubricItemValue3);
	query.setParameter(2, rubricItemName3.toUpperCase());
	result3 = (String) query.getSingleResult();
	levelUpPageDisplay[2][0]=rubricItemName3;
	levelUpPageDisplay[2][1]=result3;
		
	return levelUpPageDisplay;
	}
	
	
	public String[][] getHokeLevelUpData(HttpServletRequest request, HttpServletResponse response) {
		
		String levelUpPageDisplay[][] = new String[3][2];
		Random randomGenerator = new Random();
		String result1;
		String result2;
		String result3;
		
		String notYetRubricItems = request.getParameter("notYetRubricItems");
		List<String> notYetRubricItemsList = Arrays.asList(notYetRubricItems.split("\n"));
		int listLength = notYetRubricItemsList.size();
		int randomInt1 = randomGenerator.nextInt(listLength);
		int randomInt2 = randomGenerator.nextInt(listLength);
		int randomInt3 = randomGenerator.nextInt(listLength);
		
		String rubricItemValue1 = notYetRubricItemsList.get(randomInt1);
		String trimmedRubricItemValue1 = null;
		   if ((rubricItemValue1 != null) && (rubricItemValue1.length() > 0)) {
			   trimmedRubricItemValue1 = rubricItemValue1.substring(0, rubricItemValue1.length() - 2);
		   }
		   
		String rubricItemValue2 = notYetRubricItemsList.get(randomInt2);
		String trimmedRubricItemValue2 = null;
		   if ((rubricItemValue2 != null) && (rubricItemValue2.length() > 0)) {
			   trimmedRubricItemValue2 = rubricItemValue2.substring(0, rubricItemValue2.length() - 2);
		   }
		   
		String rubricItemValue3 = notYetRubricItemsList.get(randomInt3);
		String trimmedRubricItemValue3 = null;
		   if ((rubricItemValue3 != null) && (rubricItemValue3.length() > 0)) {
			   trimmedRubricItemValue3 = rubricItemValue3.substring(0, rubricItemValue3.length() - 2);
		   }
		   
		
		String sql = "SELECT LEVELUP FROM HOKE_LEVEL_UP WHERE RUBRICITEM = ?";
		Query query = entityManager.createNativeQuery(sql);
		
		query.setParameter(1, trimmedRubricItemValue1);
		result1 = (String) query.getSingleResult();
		levelUpPageDisplay[0][0]=rubricItemValue1;
		levelUpPageDisplay[0][1]=result1;
		
		query.setParameter(1, trimmedRubricItemValue2);
		result2 = (String) query.getSingleResult();
		levelUpPageDisplay[1][0]=rubricItemValue2;
		levelUpPageDisplay[1][1]=result2;
		
		query.setParameter(1, trimmedRubricItemValue3);
		result3 = (String) query.getSingleResult();
		levelUpPageDisplay[2][0]=rubricItemValue3;
		levelUpPageDisplay[2][1]=result3;
		
		return levelUpPageDisplay;
	}

}
