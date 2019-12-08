package com.dsd.dsdpdcoaching.service;

import org.springframework.stereotype.Component;

@Component
public class RubricTotalCalculator {
	
	public int getRubricTotal(String planning, String assessmentAndData, String path, String place, String pace,
			String classroomManagement, String teacherRole, String studentEngagement, String studentCollaboration, String technology) {

		int planningValue = 0;
		if(planning.equals("Whole group timer")) {
			planningValue = 1;
		} else if(planning.contains("implements checklist")) {
			planningValue = 2;
		} else if(planning.contains("differentiated")) {
			planningValue = 3;
		}
		
		int assessmentAndDataValue = 0;
		if(assessmentAndData.contains("Collecting")) {
			assessmentAndDataValue = 1;
		} else if(assessmentAndData.contains("Using")) {
			assessmentAndDataValue = 2;
		} else if(assessmentAndData.contains("advance")) {
			assessmentAndDataValue = 3;
		}
		
		int pathValue = 0;
		if(path.equals("Same")) {
			pathValue = 1;
		} else if(path.contains("Differentiated")) {
			pathValue = 2;
		} else if(path.contains("Individual")) {
			pathValue = 3;
		}
		
		int placeValue = 0;
		if(place.contains("Move")) {
			placeValue = 1;
		} else if(place.contains("Flexible")) {
			placeValue = 2;
		} else if(place.contains("Pick")) {
			placeValue = 3;
		}
		
		int paceValue = 0;
		if(pace.equals("timer")) {
			paceValue = 1;
		} else if(pace.contains("move")) {
			paceValue = 2;
		} else if(pace.contains("mastery")) {
			paceValue = 3;
		}
		
		int classroomManagementValue = 0;
		if(classroomManagement.contains("Restating")) {
			classroomManagementValue = 1;
		} else if(classroomManagement.contains("Self")) {
			classroomManagementValue = 2;
		} else if(classroomManagement.contains("Automatic")) {
			classroomManagementValue = 3;
		}
		
		int teacherRoleValue = 0;
		if(teacherRole.equals("facilitator")) {
			teacherRoleValue = 1;
		} else if(teacherRole.contains("distractions")) {
			teacherRoleValue = 2;
		} else if(teacherRole.contains("99")) {
			teacherRoleValue = 3;
		}
		
		int studentEngagementValue = 0;
		if(studentEngagement.contains("Following")) {
			studentEngagementValue = 1;
		} else if(studentEngagement.contains("Engaged")) {
			studentEngagementValue = 2;
		} else if(studentEngagement.contains("Deeply")) {
			studentEngagementValue = 3;
		}
		
		int studentCollaborationValue = 0;
		if(studentCollaboration.equals("Teacher")) {
			studentCollaborationValue = 1;
		} else if(studentCollaboration.contains("Choice")) {
			studentCollaborationValue = 2;
		} else if(studentCollaboration.contains("PBL")) {
			studentCollaborationValue = 3;
		}
		
		int technologyValue = 0;
		if(technology.contains("Technology")) {
			technologyValue = 1;
		} else if(technology.contains("Using")) {
			technologyValue = 2;
		} else if(technology.contains("Students")) {
			technologyValue = 3;
		}
		
		return planningValue+assessmentAndDataValue+pathValue+placeValue+paceValue+classroomManagementValue+teacherRoleValue+studentEngagementValue+studentCollaborationValue+technologyValue;
	}
}

