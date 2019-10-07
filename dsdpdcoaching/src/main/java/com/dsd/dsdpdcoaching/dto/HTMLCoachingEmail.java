package com.dsd.dsdpdcoaching.dto;

public class HTMLCoachingEmail implements java.io.Serializable {

	private static final long serialVersionUID = 7673627420711247118L;
	private static String htmlString = null;

	public String getHtmlString(String teacher, String schoolId, String date, String lessonTitle, String notes, String strategies, String steps, String tools) {		
		htmlString = "<!DOCTYPE html> \r\n" + 
				"<html> \r\n" +
				"	<head> \r\n" + 
				"		<meta charset=\"utf-8> \r\n" + 
				"		<title>DSD Professional Development - Onsite Coaching</title> \r\n" + 
				"		<style> \r\n" +
				"			body { \r\n" +
				"				background-color: seashell; \r\n" +
				"				color: darkslategray; \r\n" +
				"			} \r\n" +
				"			h1 { \r\n" +
				"				color: limegreen; \r\n" +
				"			} \r\n" +
				"		</style> \r\n" +
				"	</head> \r\n" +
				"	<body> \r\n" + 
				"		<br> \r\n" + 
				"		<h3 style=\"text-align:center;\">\r\n" + "Instructional Coaching Application \r\n" +
				"		<h3 style=\"text-align:center;\">\r\n" + schoolId +
				"		<hr> \r\n" +
				"		<h3 style=\"text-align:center;\">Coaching Report Notes for</h1> \r\n" + teacher +" taken on " + date +
				"		<h4 style=\"text-align:center;\">Lesson Title:</h1> \r\n" + lessonTitle +
				"		<br /><br /> \r\n" +
				"		<table width=100% style=\"text-align: center\"> \r\n" +
				"			<tr> \r\n" +
				"		    	<th width=\"75\"><strong>NOTES:</strong></th> \r\n" +
				"		    	<th width=\"75\"><strong>STRATEGIES:</strong></th> \r\n" +
				"			</tr> \r\n" +
				"			<tr> \r\n" +
				"		    	<td style=\"font-weight:normal;\"> \r\n" + notes + "</td>" +
				"		    	<td style=\"font-weight:normal;\"> \r\n" + strategies + "</td>" +
				"			</tr> \r\n" +
				
				"			<tr> \r\n" +
				"		    	<td> &nbsp; </td> \r\n" +
				"			</tr> \r\n" +
				
				"			<tr> \r\n" +
				"		    	<th width=\"75\"><strong>NEXT STEPS:</strong></th> \r\n" +
				"		    	<th width=\"75\"><strong>TOOLS:</strong></th> \r\n" +
				"			</tr> \r\n" +
				"			<tr> \r\n" +
				"		    	<td style=\"font-weight:normal;\"> \r\n" + steps + "</td>" +
				"		    	<td style=\"font-weight:normal;\"> \r\n" + tools + "</td>" +
				"			</tr> \r\n" +
				"		</table>  \r\n" +
				"		<div style=\"width:850px; font-weight:normal;\"> \r\n" +
				"			<p align=\"center\" <p>&copy; 2018 DSD Professional Development<p> \r\n" + 
				"				Created and Sent by <a href=\"http://dsdpdcoaching.com/\">Datasitedesigns Development Team</a><br>\r\n" + 
				"			</p>\r\n" + 
				"		</div>\r\n" + 
				"	</body>\r\n" + 
				"</html>";
				
				return htmlString;
	}
}
