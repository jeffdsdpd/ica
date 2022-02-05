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

		return nlrd;
	}
		
}

