var schoolName = null;

$(document).ready(function () {
	var school = 0;
	if ( school == '4') {
		$("#leawoodContainer").show()
		}
    

	$('.dropdown-toggle').dropdown();
	
   	if ('${schoolList.size()}' > 1) {
    	schoolName = "All Schools";
   } else {
	   schoolName = '${schoolList[0].name}' ;
   }

   document.getElementById("school").innerHTML = schoolName;
});

$(function () {
    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Build the chart
    Highcharts.chart('container', {
    	
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Phase percentages based on teachers in ' + schoolName
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'purple',
                        fontSize: '16px',
	                    fontWeight: 'bold',
	                    textTransform: 'uppercase'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        
        series: [{
            name: 'Brands',
            data: [
                { name: 'Phase 1', y: parseInt('${phaseValues[0].phase1}') },
                { name: 'Phase 2', y: parseInt('${phaseValues[0].phase2}') },
                { name: 'Phase 3', y: parseInt('${phaseValues[0].phase3}') }
            ]
        }]
    });
});



	$(document).ready(function(){
	    var today = new Date()
	    var curHr = today.getHours()
	    var greeting = ''

	    if (curHr < 12) {
	      greeting = 'Good morning '
	    } else if (curHr < 18) {
	    	greeting = 'Good afternoon '
	    } else {
	    	greeting = 'Good evening '
	    }
	  
    	$.notify({
        	message: greeting + '${user}'+"! &nbsp; &nbsp; Last release: May 25 <br /> " +
            	"Release updates:  <br /> " +
        			"1. Ordered date dropdown lists <br />" +
        			"2. Formatted date dropdown lists <br />" +
        			"3. Included 'Not Observed' on Rubric graph"
    			
        },{
            type: 'info',
            timer: 6000
        });

	});