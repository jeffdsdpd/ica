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
		

		//SMALLGROUP
		if (ninjaData.getSmallgroupwhite() != null && ninjaData.getSmallgroupwhite().equals("yes")) {
			if (ninjaData.getSmallgroupyellow() != null && ninjaData.getSmallgroupyellow().equals("yes")) {
				if (ninjaData.getSmallgrouporange() != null && ninjaData.getSmallgrouporange().equals("yes")) {
					if (ninjaData.getSmallgroupgreen() != null && ninjaData.getSmallgroupgreen().equals("yes")) {
						if (ninjaData.getSmallgroupblue() != null && ninjaData.getSmallgroupblue().equals("yes")) {
							if (ninjaData.getSmallgrouppurple() != null && ninjaData.getSmallgrouppurple().equals("yes")) {
								nlrd.setSmallGroupLevelUp("Complete");
								nlrd.setSmallGroupColor("purple");
							} else {
								nlrd.setSmallGroupLevelUp(nlus.smallGroupPurple);
								nlrd.setSmallGroupColor("blue");
							}
						} else {
							nlrd.setSmallGroupLevelUp(nlus.smallGroupBlue);
							nlrd.setSmallGroupColor("green");
						}
					} else {
						nlrd.setSmallGroupLevelUp(nlus.smallGroupGreen);
						nlrd.setSmallGroupColor("orange");
					}
				} else {
					nlrd.setSmallGroupLevelUp(nlus.smallGroupOrange);
					nlrd.setSmallGroupColor("yellow");
				}
			} else {
				nlrd.setSmallGroupLevelUp(nlus.smallGroupYellow);
				nlrd.setSmallGroupColor("white");
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
							} else {
								nlrd.setChecklistLevelUp(nlus.checklistPurple);
								nlrd.setChecklistColor("blue");
							}
						} else {
							nlrd.setChecklistLevelUp(nlus.checklistBlue);
							nlrd.setChecklistColor("green");
						}
					} else {
						nlrd.setChecklistLevelUp(nlus.checklistGreen);
						nlrd.setChecklistColor("orange");
					}
				} else {
					nlrd.setChecklistLevelUp(nlus.checklistOrange);
					nlrd.setChecklistColor("yellow");
				}
			} else {
				nlrd.setChecklistLevelUp(nlus.checklistYellow);
				nlrd.setChecklistColor("white");
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
							} else {
								nlrd.setDataLevelUp(nlus.dataPurple);
								nlrd.setDataColor("blue");
							}
						} else {
							nlrd.setDataLevelUp(nlus.dataBlue);
							nlrd.setDataColor("green");
						}
					} else {
						nlrd.setDataLevelUp(nlus.dataGreen);
						nlrd.setDataColor("orange");
					}
				} else {
					nlrd.setDataLevelUp(nlus.dataOrange);
					nlrd.setDataColor("yellow");
				}
			} else {
				nlrd.setDataLevelUp(nlus.dataYellow);
				nlrd.setDataColor("white");
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
							} else {
								nlrd.setStudentChoiceLevelUp(nlus.studentChoicePurple);
								nlrd.setStudentChoiceColor("blue");
							}
						} else {
							nlrd.setStudentChoiceLevelUp(nlus.studentChoiceBlue);
							nlrd.setStudentChoiceColor("green");
						}
					} else {
						nlrd.setStudentChoiceLevelUp(nlus.studentChoiceGreen);
						nlrd.setStudentChoiceColor("orange");
					}
				} else {
					nlrd.setStudentChoiceLevelUp(nlus.studentChoiceOrange);
					nlrd.setStudentChoiceColor("yellow");
				}
			} else {
				nlrd.setStudentChoiceLevelUp(nlus.studentChoiceYellow);
				nlrd.setStudentChoiceColor("white");
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
							} else {
								nlrd.setIndependentStudioLevelUp(nlus.independentStudioPurple);
								nlrd.setIndependentStudioColor("blue");
							}
						} else {
							nlrd.setIndependentStudioLevelUp(nlus.independentStudioBlue);
							nlrd.setIndependentStudioColor("green");
						}
					} else {
						nlrd.setIndependentStudioLevelUp(nlus.independentStudioGreen);
						nlrd.setIndependentStudioColor("orange");
					}
				} else {
					nlrd.setIndependentStudioLevelUp(nlus.independentStudioOrange);
					nlrd.setIndependentStudioColor("yellow");
				}
			} else {
				nlrd.setIndependentStudioLevelUp(nlus.independentStudioYellow);
				nlrd.setIndependentStudioColor("white");
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
							} else {
								nlrd.setDigitalContentLevelUp(nlus.digitalContentPurple);
								nlrd.setDigitalContentColor("blue");
							}
						} else {
							nlrd.setDigitalContentLevelUp(nlus.digitalContentBlue);
							nlrd.setDigitalContentColor("green");
						}
					} else {
						nlrd.setDigitalContentLevelUp(nlus.digitalContentGreen);
						nlrd.setDigitalContentColor("orange");
					}
				} else {
					nlrd.setDigitalContentLevelUp(nlus.digitalContentOrange);
					nlrd.setDigitalContentColor("yellow");
				}
			} else {
				nlrd.setDigitalContentLevelUp(nlus.digitalContentYellow);
				nlrd.setDigitalContentColor("white");
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
							} else {
								nlrd.setFutureReadyLevelUp(nlus.digitalContentPurple);
								nlrd.setFutureReadyColor("blue");
							}
						} else {
							nlrd.setFutureReadyLevelUp(nlus.digitalContentBlue);
							nlrd.setFutureReadyColor("green");
						}
					} else {
						nlrd.setFutureReadyLevelUp(nlus.digitalContentGreen);
						nlrd.setFutureReadyColor("orange");
					}
				} else {
					nlrd.setFutureReadyLevelUp(nlus.digitalContentOrange);
					nlrd.setFutureReadyColor("yellow");
				}
			} else {
				nlrd.setFutureReadyLevelUp(nlus.digitalContentYellow);
				nlrd.setFutureReadyColor("white");
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
							} else {
								nlrd.setPaceLevelUp(nlus.digitalContentPurple);
								nlrd.setPaceColor("blue");
							}
						} else {
							nlrd.setPaceLevelUp(nlus.digitalContentBlue);
							nlrd.setPaceColor("green");
						}
					} else {
						nlrd.setPaceLevelUp(nlus.digitalContentGreen);
						nlrd.setPaceColor("orange");
					}
				} else {
					nlrd.setPaceLevelUp(nlus.digitalContentOrange);
					nlrd.setPaceColor("yellow");
				}
			} else {
				nlrd.setPaceLevelUp(nlus.digitalContentYellow);
				nlrd.setPaceColor("white");
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
							} else {
								nlrd.setPlaceLevelUp(nlus.digitalContentPurple);
								nlrd.setPlaceColor("blue");
							}
						} else {
							nlrd.setPlaceLevelUp(nlus.digitalContentBlue);
							nlrd.setPlaceColor("green");
						}
					} else {
						nlrd.setPlaceLevelUp(nlus.digitalContentGreen);
						nlrd.setPlaceColor("orange");
					}
				} else {
					nlrd.setPlaceLevelUp(nlus.digitalContentOrange);
					nlrd.setPlaceColor("yellow");
				}
			} else {
				nlrd.setPlaceLevelUp(nlus.digitalContentYellow);
				nlrd.setPlaceColor("white");
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
							} else {
								nlrd.setPathLevelUp(nlus.digitalContentPurple);
								nlrd.setPathColor("blue");
							}
						} else {
							nlrd.setPathLevelUp(nlus.digitalContentBlue);
							nlrd.setPathColor("green");
						}
					} else {
						nlrd.setPathLevelUp(nlus.digitalContentGreen);
						nlrd.setPathColor("orange");
					}
				} else {
					nlrd.setPathLevelUp(nlus.digitalContentOrange);
					nlrd.setPathColor("yellow");
				}
			} else {
				nlrd.setPathLevelUp(nlus.digitalContentYellow);
				nlrd.setPathColor("white");
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
								}
							} else {
								nlrd.setOrganizationLevelUp(nlus.digitalContentPurple);
								nlrd.setOrganizationColor("blue");
							}
						} else {
							nlrd.setOrganizationLevelUp(nlus.digitalContentBlue);
							nlrd.setOrganizationColor("green");
						}
					} else {
						nlrd.setOrganizationLevelUp(nlus.digitalContentGreen);
						nlrd.setOrganizationColor("orange");
					}
				} else {
					nlrd.setOrganizationLevelUp(nlus.digitalContentOrange);
					nlrd.setOrganizationColor("yellow");
				}
			} else {
				nlrd.setOrganizationLevelUp(nlus.digitalContentYellow);
				nlrd.setOrganizationColor("white");
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
										nlrd.setOrganizationLevelUp("Complete");
										nlrd.setOrganizationColor("red");
									} else {
										nlrd.setOrganizationLevelUp(nlus.digitalContentPurple);
										nlrd.setOrganizationColor("brown");
									}
									
								} else {
									nlrd.setOrganizationLevelUp(nlus.digitalContentPurple);
									nlrd.setOrganizationColor("purple");
								}
							} else {
								nlrd.setOrganizationLevelUp(nlus.digitalContentPurple);
								nlrd.setOrganizationColor("blue");
							}
						} else {
							nlrd.setOrganizationLevelUp(nlus.digitalContentBlue);
							nlrd.setOrganizationColor("green");
						}
					} else {
						nlrd.setOrganizationLevelUp(nlus.digitalContentGreen);
						nlrd.setOrganizationColor("orange");
					}
				} else {
					nlrd.setOrganizationLevelUp(nlus.digitalContentOrange);
					nlrd.setOrganizationColor("yellow");
				}
			} else {
				nlrd.setOrganizationLevelUp(nlus.digitalContentYellow);
				nlrd.setOrganizationColor("white");
			}
		} else {
			nlrd.setOrganizationLevelUp(nlus.digitalContentWhite);
			nlrd.setOrganizationColor("NA");
		}

		return nlrd;
	}
		
}

