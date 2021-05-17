package com.dsd.dsdpdcoaching.service;

import org.springframework.stereotype.Component;

import com.dsd.dsdpdcoaching.dto.HokeRubric;

@Component
public class HokeRubricPhaseCalculator {
	
	public int getHokeRubricPhase(HokeRubric hokeRubric) {
		return 2;
	}

}
