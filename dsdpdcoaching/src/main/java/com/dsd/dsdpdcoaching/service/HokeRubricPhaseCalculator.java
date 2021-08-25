package com.dsd.dsdpdcoaching.service;

import org.springframework.stereotype.Component;

import com.dsd.dsdpdcoaching.dto.HokeRubric;

@Component
public class HokeRubricPhaseCalculator {
	
	public int getHokeRubricPhase(HokeRubric hokeRubric) {
		int phaseScore = 0;
		
		if ( (hokeRubric.getChecklists() == 3) &&
					(hokeRubric.getDigitalContent() == 3) &&
						(hokeRubric.getSeating() == 3) &&
							(hokeRubric.getTiming() == 3) &&
								(hokeRubric.getDifferentiation() == 3) &&
									(hokeRubric.getStudentGroups() == 3) &&
										(hokeRubric.getData() == 3) &&
											(hokeRubric.getReflection() == 3) &&
												(hokeRubric.getStudentLearning() == 3) ) {
			phaseScore = 3;
			
		} else if ( (hokeRubric.getChecklists() >= 2) &&
						(hokeRubric.getDigitalContent() >= 2) &&
							(hokeRubric.getSeating() >= 2) &&
								(hokeRubric.getTiming() >= 2) &&
									(hokeRubric.getDifferentiation() >= 2) &&
										(hokeRubric.getStudentGroups() >= 2) &&
											(hokeRubric.getData() >= 2) &&
												(hokeRubric.getReflection() >= 2) &&
													(hokeRubric.getStudentLearning() >= 2) ) {
			phaseScore = 2;
			
		} else if ( (hokeRubric.getChecklists() >= 1) &&
						(hokeRubric.getDigitalContent() >= 1) &&
							(hokeRubric.getSeating() >= 1) &&
								(hokeRubric.getTiming() >= 1) &&
									(hokeRubric.getDifferentiation() >= 1) &&
										(hokeRubric.getStudentGroups() >= 1) &&
											(hokeRubric.getData() >= 1) &&
												(hokeRubric.getReflection() >= 1) &&
													(hokeRubric.getStudentLearning() >= 1) ) {
			phaseScore = 1;
		} 
			
		System.out.println("phaseScore = "  + phaseScore);
		return phaseScore;
	}

}
