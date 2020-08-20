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
		String result1 = null;
		
		String notYetRubricItems = request.getParameter("notYetRubricItems");
		List<String> notYetRubricItemsList = Arrays.asList(notYetRubricItems.split("\n"));
		int listLength = notYetRubricItemsList.size();
		int randomInt = randomGenerator.nextInt(listLength);
		
		String rubricItemValue = notYetRubricItemsList.get(randomInt);
		String trimmedRubricItemValue = null;
		   if ((rubricItemValue != null) && (rubricItemValue.length() > 0)) {
			   trimmedRubricItemValue = rubricItemValue.substring(0, rubricItemValue.length() - 2);
		   }
		
		String sql = "SELECT LEVELUP FROM HOKE_LEVEL_UP WHERE RUBRICITEM = ?";
		Query query = entityManager.createNativeQuery(sql);
		
		query.setParameter(1, trimmedRubricItemValue);
		result1 = (String) query.getSingleResult();
		levelUpPageDisplay[0][0]=rubricItemValue;
		levelUpPageDisplay[0][1]=result1;
		
		return levelUpPageDisplay;
	}

}
