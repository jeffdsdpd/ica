package com.dsd.dsdpdcoaching.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.dsd.dsdpdcoaching.dto.NinjaLevelTeachingData;
import com.dsd.dsdpdcoaching.dto.NinjaLevelUpStrategy;
import com.dsd.dsdpdcoaching.dto.NinjaReportData;

@Component
public class NinjaValueAssignments {
	
	@Autowired
	NinjaLevelUpStrategy nlus;

	public NinjaReportData createNinjaValueAssignments(NinjaLevelTeachingData ninjaData, NinjaReportData nlrd) {
		
		int totalScore = 0;
		

		//SMALLGROUP
		if (ninjaData.getSmallgroupwhite() != null && ninjaData.getSmallgroupwhite().equals("yes")) {
			if (ninjaData.getSmallgroupyellow() != null && ninjaData.getSmallgroupyellow().equals("yes")) {
				if (ninjaData.getSmallgrouporange() != null && ninjaData.getSmallgrouporange().equals("yes")) {
					if (ninjaData.getSmallgroupgreen() != null && ninjaData.getSmallgroupgreen().equals("yes")) {
						if (ninjaData.getSmallgroupblue() != null && ninjaData.getSmallgroupblue().equals("yes")) {
							if (ninjaData.getSmallgrouppurple() != null && ninjaData.getSmallgrouppurple().equals("yes")) {
								nlrd.setSmallGroupLevelUp("Complete");
								nlrd.setSmallGroupColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setSmallGroupLevelUp(nlus.smallGroupPurple);
								nlrd.setSmallGroupColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setSmallGroupLevelUp(nlus.smallGroupBlue);
							nlrd.setSmallGroupColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setSmallGroupLevelUp(nlus.smallGroupGreen);
						nlrd.setSmallGroupColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setSmallGroupLevelUp(nlus.smallGroupOrange);
					nlrd.setSmallGroupColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setSmallGroupLevelUp(nlus.smallGroupYellow);
				nlrd.setSmallGroupColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setSmallGroupLevelUp(nlus.smallGroupWhite);
			nlrd.setSmallGroupColor("NA");
		}
		
		//CHECKLIST
		if (ninjaData.getChecklistwhite() != null && ninjaData.getChecklistwhite().equals("yes")) {
			if (ninjaData.getChecklistyellow() != null && ninjaData.getChecklistyellow().equals("yes")) {
				if (ninjaData.getChecklistorange() != null && ninjaData.getChecklistorange().equals("yes")) {
					if (ninjaData.getChecklistgreen() != null && ninjaData.getChecklistgreen().equals("yes")) {
						if (ninjaData.getChecklistblue() != null && ninjaData.getChecklistblue().equals("yes")) {
							if (ninjaData.getChecklistpurple() != null && ninjaData.getChecklistpurple().equals("yes")) {
								nlrd.setChecklistLevelUp("Complete");
								nlrd.setChecklistColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setChecklistLevelUp(nlus.checklistPurple);
								nlrd.setChecklistColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setChecklistLevelUp(nlus.checklistBlue);
							nlrd.setChecklistColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setChecklistLevelUp(nlus.checklistGreen);
						nlrd.setChecklistColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setChecklistLevelUp(nlus.checklistOrange);
					nlrd.setChecklistColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setChecklistLevelUp(nlus.checklistYellow);
				nlrd.setChecklistColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setChecklistLevelUp(nlus.checklistWhite);
			nlrd.setChecklistColor("NA");
		}
		
		//DATA
		if (ninjaData.getDatawhite() != null && ninjaData.getDatawhite().equals("yes")) {
			if (ninjaData.getDatayellow() != null && ninjaData.getDatayellow().equals("yes")) {
				if (ninjaData.getDataorange() != null && ninjaData.getDataorange().equals("yes")) {
					if (ninjaData.getDatagreen() != null && ninjaData.getDatagreen().equals("yes")) {
						if (ninjaData.getDatablue() != null && ninjaData.getDatablue().equals("yes")) {
							if (ninjaData.getDatapurple() != null && ninjaData.getDatapurple().equals("yes")) {
								nlrd.setDataLevelUp("Complete");
								nlrd.setDataColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setDataLevelUp(nlus.dataPurple);
								nlrd.setDataColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setDataLevelUp(nlus.dataBlue);
							nlrd.setDataColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setDataLevelUp(nlus.dataGreen);
						nlrd.setDataColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setDataLevelUp(nlus.dataOrange);
					nlrd.setDataColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setDataLevelUp(nlus.dataYellow);
				nlrd.setDataColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setDataLevelUp(nlus.dataWhite);
			nlrd.setDataColor("NA");
		}
		
		//STUDENT CHOICE
		if (ninjaData.getStudentchoicewhite() != null && ninjaData.getStudentchoicewhite().equals("yes")) {
			if (ninjaData.getStudentchoiceyellow() != null && ninjaData.getStudentchoiceyellow().equals("yes")) {
				if (ninjaData.getStudentchoiceorange() != null && ninjaData.getStudentchoiceorange().equals("yes")) {
					if (ninjaData.getStudentchoicegreen() != null && ninjaData.getStudentchoicegreen().equals("yes")) {
						if (ninjaData.getStudentchoiceblue() != null && ninjaData.getStudentchoiceblue().equals("yes")) {
							if (ninjaData.getStudentchoicepurple() != null && ninjaData.getStudentchoicepurple().equals("yes")) {
								nlrd.setDataLevelUp("Complete");
								nlrd.setStudentChoiceColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setStudentChoiceLevelUp(nlus.studentChoicePurple);
								nlrd.setStudentChoiceColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setStudentChoiceLevelUp(nlus.studentChoiceBlue);
							nlrd.setStudentChoiceColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setStudentChoiceLevelUp(nlus.studentChoiceGreen);
						nlrd.setStudentChoiceColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setStudentChoiceLevelUp(nlus.studentChoiceOrange);
					nlrd.setStudentChoiceColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setStudentChoiceLevelUp(nlus.studentChoiceYellow);
				nlrd.setStudentChoiceColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setStudentChoiceLevelUp(nlus.studentChoiceWhite);
			nlrd.setStudentChoiceColor("NA");
		}
		
		//INDEPENDENT STUDIO
		if (ninjaData.getIndependentstudiowhite() != null && ninjaData.getIndependentstudiowhite().equals("yes")) {
			if (ninjaData.getIndependentstudioyellow() != null && ninjaData.getIndependentstudioyellow().equals("yes")) {
				if (ninjaData.getIndependentstudioorange() != null && ninjaData.getIndependentstudioorange().equals("yes")) {
					if (ninjaData.getIndependentstudiogreen() != null && ninjaData.getIndependentstudiogreen().equals("yes")) {
						if (ninjaData.getIndependentstudioblue() != null && ninjaData.getIndependentstudioblue().equals("yes")) {
							if (ninjaData.getIndependentstudiopurple() != null && ninjaData.getIndependentstudiopurple().equals("yes")) {
								nlrd.setIndependentStudioLevelUp("Complete");
								nlrd.setIndependentStudioColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setIndependentStudioLevelUp(nlus.independentStudioPurple);
								nlrd.setIndependentStudioColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setIndependentStudioLevelUp(nlus.independentStudioBlue);
							nlrd.setIndependentStudioColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setIndependentStudioLevelUp(nlus.independentStudioGreen);
						nlrd.setIndependentStudioColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setIndependentStudioLevelUp(nlus.independentStudioOrange);
					nlrd.setIndependentStudioColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setIndependentStudioLevelUp(nlus.independentStudioYellow);
				nlrd.setIndependentStudioColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setIndependentStudioLevelUp(nlus.independentStudioWhite);
			nlrd.setIndependentStudioColor("NA");
		}
		
		//DIGITAL CONTENT
		if (ninjaData.getDigitalcontentwhite() != null && ninjaData.getDigitalcontentwhite().equals("yes")) {
			if (ninjaData.getDigitalcontentyellow() != null && ninjaData.getDigitalcontentyellow().equals("yes")) {
				if (ninjaData.getDigitalcontentorange() != null && ninjaData.getDigitalcontentorange().equals("yes")) {
					if (ninjaData.getDigitalcontentgreen() != null && ninjaData.getDigitalcontentgreen().equals("yes")) {
						if (ninjaData.getDigitalcontentblue() != null && ninjaData.getDigitalcontentblue().equals("yes")) {
							if (ninjaData.getDigitalcontentpurple() != null && ninjaData.getDigitalcontentpurple().equals("yes")) {
								nlrd.setDigitalContentLevelUp("Complete");
								nlrd.setDigitalContentColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setDigitalContentLevelUp(nlus.digitalContentPurple);
								nlrd.setDigitalContentColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setDigitalContentLevelUp(nlus.digitalContentBlue);
							nlrd.setDigitalContentColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setDigitalContentLevelUp(nlus.digitalContentGreen);
						nlrd.setDigitalContentColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setDigitalContentLevelUp(nlus.digitalContentOrange);
					nlrd.setDigitalContentColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setDigitalContentLevelUp(nlus.digitalContentYellow);
				nlrd.setDigitalContentColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setDigitalContentLevelUp(nlus.digitalContentWhite);
			nlrd.setDigitalContentColor("NA");
		}
		
		//FUTURE READY
		if (ninjaData.getFuturereadywhite() != null && ninjaData.getFuturereadywhite().equals("yes")) {
			if (ninjaData.getFuturereadyyellow() != null && ninjaData.getFuturereadyyellow().equals("yes")) {
				if (ninjaData.getFuturereadyorange() != null && ninjaData.getFuturereadyorange().equals("yes")) {
					if (ninjaData.getFuturereadygreen() != null && ninjaData.getFuturereadygreen().equals("yes")) {
						if (ninjaData.getFuturereadyblue() != null && ninjaData.getFuturereadyblue().equals("yes")) {
							if (ninjaData.getFuturereadypurple() != null && ninjaData.getFuturereadypurple().equals("yes")) {
								nlrd.setFutureReadyLevelUp("Complete");
								nlrd.setFutureReadyColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setFutureReadyLevelUp(nlus.digitalContentPurple);
								nlrd.setFutureReadyColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setFutureReadyLevelUp(nlus.digitalContentBlue);
							nlrd.setFutureReadyColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setFutureReadyLevelUp(nlus.digitalContentGreen);
						nlrd.setFutureReadyColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setFutureReadyLevelUp(nlus.digitalContentOrange);
					nlrd.setFutureReadyColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setFutureReadyLevelUp(nlus.digitalContentYellow);
				nlrd.setFutureReadyColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setFutureReadyLevelUp(nlus.digitalContentWhite);
			nlrd.setFutureReadyColor("NA");
		}
		
		//PACE
		if (ninjaData.getPacewhite() != null && ninjaData.getPacewhite().equals("yes")) {
			if (ninjaData.getPaceyellow() != null && ninjaData.getPaceyellow().equals("yes")) {
				if (ninjaData.getPaceorange() != null && ninjaData.getPaceorange().equals("yes")) {
					if (ninjaData.getPacegreen() != null && ninjaData.getPacegreen().equals("yes")) {
						if (ninjaData.getPaceblue() != null && ninjaData.getPaceblue().equals("yes")) {
							if (ninjaData.getPacepurple() != null && ninjaData.getPacepurple().equals("yes")) {
								nlrd.setPaceLevelUp("Complete");
								nlrd.setPaceColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setPaceLevelUp(nlus.digitalContentPurple);
								nlrd.setPaceColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setPaceLevelUp(nlus.digitalContentBlue);
							nlrd.setPaceColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setPaceLevelUp(nlus.digitalContentGreen);
						nlrd.setPaceColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setPaceLevelUp(nlus.digitalContentOrange);
					nlrd.setPaceColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setPaceLevelUp(nlus.digitalContentYellow);
				nlrd.setPaceColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setPaceLevelUp(nlus.digitalContentWhite);
			nlrd.setPaceColor("NA");
		}
		
		//PLACE
		if (ninjaData.getPlacewhite() != null && ninjaData.getPlacewhite().equals("yes")) {
			if (ninjaData.getPlaceyellow() != null && ninjaData.getPlaceyellow().equals("yes")) {
				if (ninjaData.getPlaceorange() != null && ninjaData.getPlaceorange().equals("yes")) {
					if (ninjaData.getPlacegreen() != null && ninjaData.getPlacegreen().equals("yes")) {
						if (ninjaData.getPlaceblue() != null && ninjaData.getPlaceblue().equals("yes")) {
							if (ninjaData.getPlacepurple() != null && ninjaData.getPlacepurple().equals("yes")) {
								nlrd.setPlaceLevelUp("Complete");
								nlrd.setPlaceColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setPlaceLevelUp(nlus.digitalContentPurple);
								nlrd.setPlaceColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setPlaceLevelUp(nlus.digitalContentBlue);
							nlrd.setPlaceColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setPlaceLevelUp(nlus.digitalContentGreen);
						nlrd.setPlaceColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setPlaceLevelUp(nlus.digitalContentOrange);
					nlrd.setPlaceColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setPlaceLevelUp(nlus.digitalContentYellow);
				nlrd.setPlaceColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setPlaceLevelUp(nlus.digitalContentWhite);
			nlrd.setPaceColor("NA");
		}
		
		//PATH
		if (ninjaData.getPathwhite() != null && ninjaData.getPathwhite().equals("yes")) {
			if (ninjaData.getPathyellow() != null && ninjaData.getPathyellow().equals("yes")) {
				if (ninjaData.getPathorange() != null && ninjaData.getPathorange().equals("yes")) {
					if (ninjaData.getPathgreen() != null && ninjaData.getPathgreen().equals("yes")) {
						if (ninjaData.getPathblue() != null && ninjaData.getPathblue().equals("yes")) {
							if (ninjaData.getPathpurple() != null && ninjaData.getPathpurple().equals("yes")) {
								nlrd.setPathLevelUp("Complete");
								nlrd.setPathColor("purple");
								totalScore = totalScore + 6;
							} else {
								nlrd.setPathLevelUp(nlus.digitalContentPurple);
								nlrd.setPathColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setPathLevelUp(nlus.digitalContentBlue);
							nlrd.setPathColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setPathLevelUp(nlus.digitalContentGreen);
						nlrd.setPathColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setPathLevelUp(nlus.digitalContentOrange);
					nlrd.setPathColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setPathLevelUp(nlus.digitalContentYellow);
				nlrd.setPathColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setPathLevelUp(nlus.digitalContentWhite);
			nlrd.setPathColor("NA");
		}
		
		//ORGANIZATION
		if (ninjaData.getOrganizationwhite() != null && ninjaData.getOrganizationwhite().equals("yes")) {
			if (ninjaData.getOrganizationyellow() != null && ninjaData.getOrganizationyellow().equals("yes")) {
				if (ninjaData.getOrganizationorange() != null && ninjaData.getOrganizationorange().equals("yes")) {
					if (ninjaData.getOrganizationgreen() != null && ninjaData.getOrganizationgreen().equals("yes")) {
						if (ninjaData.getOrganizationblue() != null && ninjaData.getOrganizationblue().equals("yes")) {
							if (ninjaData.getOrganizationpurple() != null && ninjaData.getOrganizationpurple().equals("yes")) {
								if (ninjaData.getOrganizationbrown() != null && ninjaData.getOrganizationbrown().equals("yes")) {
									nlrd.setOrganizationLevelUp("Complete");
									nlrd.setOrganizationColor("brown");
								} else {
									nlrd.setOrganizationLevelUp(nlus.digitalContentPurple);
									nlrd.setOrganizationColor("purple");
									totalScore = totalScore + 6;
								}
							} else {
								nlrd.setOrganizationLevelUp(nlus.digitalContentPurple);
								nlrd.setOrganizationColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setOrganizationLevelUp(nlus.digitalContentBlue);
							nlrd.setOrganizationColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setOrganizationLevelUp(nlus.digitalContentGreen);
						nlrd.setOrganizationColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setOrganizationLevelUp(nlus.digitalContentOrange);
					nlrd.setOrganizationColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setOrganizationLevelUp(nlus.digitalContentYellow);
				nlrd.setOrganizationColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setOrganizationLevelUp(nlus.digitalContentWhite);
			nlrd.setOrganizationColor("NA");
		}
				
		//DIRECTIONS
		if (ninjaData.getDirectionswhite() != null && ninjaData.getDirectionswhite().equals("yes")) {
			if (ninjaData.getDirectionsyellow() != null && ninjaData.getDirectionsyellow().equals("yes")) {
				if (ninjaData.getDirectionsorange() != null && ninjaData.getDirectionsorange().equals("yes")) {
					if (ninjaData.getDirectionsgreen() != null && ninjaData.getDirectionsgreen().equals("yes")) {
						if (ninjaData.getDirectionsblue() != null && ninjaData.getDirectionsblue().equals("yes")) {
							if (ninjaData.getDirectionspurple() != null && ninjaData.getDirectionspurple().equals("yes")) {
								if (ninjaData.getDirectionsbrown() != null && ninjaData.getDirectionspurple().equals("yes")) {
									if (ninjaData.getDirectionsred() != null && ninjaData.getDirectionsred().equals("yes")) {
										nlrd.setDirectionsLevelUp("Complete");
										nlrd.setDirectionsColor("red");
									} else {
										nlrd.setDirectionsLevelUp(nlus.digitalContentPurple);
										nlrd.setDirectionsColor("brown");
									}
									
								} else {
									nlrd.setDirectionsLevelUp(nlus.digitalContentPurple);
									nlrd.setDirectionsColor("purple");
									totalScore = totalScore + 6;
								}
							} else {
								nlrd.setDirectionsLevelUp(nlus.digitalContentPurple);
								nlrd.setDirectionsColor("blue");
								totalScore = totalScore + 5;
							}
						} else {
							nlrd.setDirectionsLevelUp(nlus.digitalContentBlue);
							nlrd.setDirectionsColor("green");
							totalScore = totalScore + 4;
						}
					} else {
						nlrd.setDirectionsLevelUp(nlus.digitalContentGreen);
						nlrd.setDirectionsColor("orange");
						totalScore = totalScore + 3;
					}
				} else {
					nlrd.setDirectionsLevelUp(nlus.digitalContentOrange);
					nlrd.setDirectionsColor("yellow");
					totalScore = totalScore + 2;
				}
			} else {
				nlrd.setDirectionsLevelUp(nlus.digitalContentYellow);
				nlrd.setDirectionsColor("white");
				totalScore = totalScore + 1;
			}
		} else {
			nlrd.setDirectionsLevelUp(nlus.digitalContentWhite);
			nlrd.setDirectionsColor("NA");
		}
		
		totalScore = (totalScore/12);
		
		
		if (totalScore == 1) {
			nlrd.setAverageColor("white");
		} else { 
			if (totalScore == 2) {
				nlrd.setAverageColor("yellow");
			} else {
				if (totalScore == 3) {
						nlrd.setAverageColor("orange");
					} else {
						if (totalScore == 4) {
							nlrd.setAverageColor("green");
							} else {
								if (totalScore == 5) {
									nlrd.setAverageColor("blue");
									} else {
										if (totalScore == 6) {
											nlrd.setAverageColor("purple");
										}
									}
							}
					}
			}
		}
	
		return nlrd;
	}
		
}

