package com.dsd.dsdpdcoaching;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class DsdPdCoachingApplication {

	public static void main(String[] args) {
		SpringApplication.run(DsdPdCoachingApplication.class, args);
	}
}
