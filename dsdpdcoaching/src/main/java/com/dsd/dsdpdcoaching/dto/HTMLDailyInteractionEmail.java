package com.dsd.dsdpdcoaching.dto;

public class HTMLDailyInteractionEmail implements java.io.Serializable {

	private static final long serialVersionUID = -2761716460279610064L;
	private static String htmlString = null;

	public String getHtmlString(String teacherName, String teacherEmail, String date, String interactionMethod, String userid, int rubricScore) {		
		
		htmlString = "<!DOCTYPE html> \r\n" + 
				"<html> \r\n" +
				"	<head> \r\n" + 
				"		<meta name='viewport' content='width=device-width'/> \r\n" +
				"		<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'/> \r\n" +
				"		<title>DSD Professional Development - Daily Interaction Report For Today</title> \r\n" +
				
				"		<style> \r\n" +
			     " body { \r\n" +
			     "   background-color: #f6f6f6; \r\n" +
			     "   font-family: sans-serif; \r\n" +
			     "   -webkit-font-smoothing: antialiased; \r\n" +
			     "   font-size: 14px; \r\n" +
			     "   line-height: 1.4; \r\n" +
			     "   margin: 0; \r\n" +
			     "   padding: 0; \r\n" +
			     "   -ms-text-size-adjust: 100%; \r\n" +
			     "   -webkit-text-size-adjust: 100%; } \r\n" +
			     " table { \r\n" +
			     "   border-collapse: separate; \r\n" +
			     "   mso-table-lspace: 0pt; \r\n" +
			     "   mso-table-rspace: 0pt; \r\n" +
			     "   width: 100%; } \r\n" +
			     "   table td { \r\n" +
			     "     font-family: sans-serif; \r\n" +
			     "     font-size: 14px; \r\n" +
			     "     vertical-align: top; } \r\n" +
			     " /* ------------------------------------- \r\n" +
			     "     BODY & CONTAINER \r\n" +
			     " ------------------------------------- */ \r\n" +
			     " .body { \r\n" +
			     "   background-color: #f6f6f6; \r\n" +
			     "   width: 100%; } \r\n" +
			     " /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */ \r\n" +
			     " .container { \r\n" +
			     "   display: block; \r\n" +
			     "   Margin: 0 auto !important; \r\n" +
			     "   /* makes it centered */ \r\n" +
			     "   max-width: 580px; \r\n" +
			     "   padding: 10px; \r\n" +
			     "   width: 580px; } \r\n" +
			     " /* This should also be a block element, so that it will fill 100% of the .container */ \r\n" +
			     " .content { \r\n" +
			     "   box-sizing: border-box; \r\n" +
			     "   display: block; \r\n" +
			     "   Margin: 0 auto; \r\n" +
			     "   max-width: 580px; \r\n" +
			     "   padding: 10px; } \r\n" +
			     " /* ------------------------------------- \r\n" +
			     "     HEADER, FOOTER, MAIN \r\n" +
			     " ------------------------------------- */ \r\n" +
			     " .main { \r\n" +
			     "   background: #ffffff; \r\n" +
			     "   border-radius: 3px; \r\n" +
			     "   width: 100%; } \r\n" +
			     " .wrapper { \r\n" +
			     "   box-sizing: border-box; \r\n" +
			     "   padding: 20px; } \r\n" +
			     " .content-block { \r\n" +
			     "   padding-bottom: 10px; \r\n" +
			     "   padding-top: 10px; \r\n" +
			     " } \r\n" +
			     " .footer { \r\n" +
			     "   clear: both; \r\n" +
			     "   Margin-top: 10px; \r\n" +
			     "   text-align: center; \r\n" +
			     "   width: 100%; } \r\n" +
			     "   .footer td, \r\n" +
			     "   .footer p, \r\n" +
			     "   .footer span, \r\n" +
			     "   .footer a { \r\n" +
			     "     color: #999999; \r\n" +
			     "     font-size: 12px; \r\n" +
			     "     text-align: center; } \r\n" +
			     " /* ------------------------------------- \r\n" +
			     "     TYPOGRAPHY \r\n" +
			     " ------------------------------------- */ \r\n" +
			     " h1, \r\n" +
			     " h2, \r\n" +
			     " h3, \r\n" +
			     " h4 { \r\n" +
			     "   color: #000000; \r\n" +
			     "   font-family: sans-serif; \r\n" +
			     "   font-weight: 400; \r\n" +
			     "   line-height: 1.4; \r\n" +
			     "   margin: 0; \r\n" +
			     "   margin-bottom: 30px; } \r\n" +
			     " h1 { \r\n" +
			     "   font-size: 35px; \r\n" +
			     "   font-weight: 300; \r\n" +
			     "   text-align: center; \r\n" +
			     "   text-transform: capitalize; } \r\n" +
			     " p, \r\n" +
			     " ul, \r\n" +
			     " ol { \r\n" +
			     "   font-family: sans-serif; \r\n" +
			     "   font-size: 14px; \r\n" +
			     "   font-weight: normal; \r\n" +
			     "   margin: 0; \r\n" +
			     "   margin-bottom: 15px; } \r\n" +
			     "   p li, \r\n" +
			     "   ul li, \r\n" +
			     "   ol li { \r\n" +
			     "     list-style-position: inside; \r\n" +
			     "     margin-left: 5px; } \r\n" +
			     " a { \r\n" +
			     "   color: #3498db; \r\n" +
			     "   text-decoration: underline; } \r\n" +
				"		</style> \r\n" +
				"	</head> \r\n" +
				
				
				"	<body class='' style='background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;'> \r\n" + 
				"		<br> \r\n" + 
				"	<P align=center><IMG border=0 hspace=0 alt='' style='float:left; max-height: 200px; max-width: 200px;' align=baseline src='http://dsdprofessionaldevelopment.com/uploads/2/7/0/5/2705842/dsd-logo-without-background_orig.png'></P> \r\n" +
				
				"		<h3 style=\"text-align:left; color: #00b100; font-weight: bold;\"><center>\r\n" + "Instructional Coaching Application From DSD Professional Development</center></h3>\r\n" +
				"		<h3 style=\"text-align:left;\"><center> \r\n" + "KEEP UP THE GREAT WORK!" + "</center></h3>\r\n" +
				"		<h3 style=\"text-align:left;\"><center> \r\n" + "IT WAS GREAT SEEING YOUR CLASSROOM TODAY!" + "</center></h3>\r\n" +
				"		<hr> \r\n" +
				"		<h3 style=\"text-align:left; color: #00b100; font-weight: bold;\">\r\n" + "Daily Interaction Report for " + teacherName +" taken on " + date + "</h3>\r\n" +
				
				
				"		<table border='2px' cellpadding='0' cellspacing='0' class='body' style='border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;'>  \r\n" +
				"			<tbody> \r\n" +
                "				<tr>  \r\n" +
                "					<td align='left' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;'><strong>INTERACTION METHOD:</strong>&nbsp;&nbsp;" + interactionMethod +  "\r\n" +
                "				</tr> \r\n" +
                
                "				<tr>  \r\n" +
                "					<td align='left' style='font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;'><strong>RUBRIC SCORE:</strong>&nbsp;&nbsp;" + rubricScore +  "\r\n" +
                "				</tr> \r\n" +
				
                "			</tbody> \r\n" +

				"			<tr> \r\n" +
				"		    	<td> &nbsp; </td> \r\n" +
				"			</tr> \r\n" +
				
				"		</table>  \r\n" +
				"		<div style=\"width:850px; font-weight:normal;\"> \r\n" +
				"			<p align=\"center\" <p>&copy; 2020 DSD Professional Development<p> \r\n" + 
				"				Created and Sent by <a href=\"http://dsdpdcoaching.com/\">Datasitedesigns Development Team</a><br>\r\n" + 
				"			</p>\r\n" + 
				"		</div>\r\n" + 
				"	</body>\r\n" + 
				"</html>";
				
				return htmlString;
	}
}
