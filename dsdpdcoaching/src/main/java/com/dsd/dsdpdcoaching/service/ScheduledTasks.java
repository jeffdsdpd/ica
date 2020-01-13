package com.dsd.dsdpdcoaching.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

 @Scheduled(cron = "0 0/34 12 * * *")
  public void reportCurrentTime() {
    System.out.println("here");
  }
}
