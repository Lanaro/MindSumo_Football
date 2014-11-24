function goodLoad(data) {
	var i, j;
	$('.parA').append("Rankings");
	$('#tableA').html("");
	$('#tableA').append("<thead><tr><td>Team ID</td><td>Name</td><td>Wins</td><td>Losses</td><td>Points Scored</td><td>Points Against</td><td>Win Percentage</td></tr></thead>");
	$list = data.division.conferences;
	
	$('#tableA').append("<tbody>");
	for ( i = 0 ; i < $list.length ; i++ ) {
		$teams = $list[i].teams;
		for ( j = 0 ; j < $teams.length ; j++ ) {
			$('#tableA').append("<tr><td>" + $teams[j].id + "</td><td>" + $teams[j].name + "</td><td>" + $teams[j].overall.wins + "</td><td>" + $teams[j].overall.losses + "</td><td>" + $teams[j].points.for + "</td><td>" + $teams[j].points.against + "</td><td>" + $teams[j].overall.wpct + "</td></tr>");
		}
	}
	$('#tableA').append("</tbody>");
	$("#tableA").tablesorter( {sortList: [[6,1]], theme: "blue", widgets: ['zebra']} );
	/*
	for ( i = 0 ; i < 15 ; i++ ) {
		$tmp = $list[i].geometry.coordinates;
		$('.tableA').append("<tr><td>" + $list[i].properties.place + "</td><td>" + new Date($list[i].properties.time).toString() + "</td><td>" + $tmp[1] + "</td><td>" + $tmp[0] + "</td></tr>");
	}
	*/
}

function badLoad(myXMLHttpRequest,myErrorMessage,myErrorThrown) {
        alert('status: ' + myErrorMessage + '\n' + myXMLHttpRequest.responseText );
}

function apiCall() {
	$.ajax({
		url: "https://students.ics.uci.edu/~chanr3/myProxy.php?http://api.sportsdatallc.org/ncaafb-t1/teams/FCS/2014/REG/standings.json?api_key=ushjeuzyq2w9bpxqrmu3jdsp",
		dataType: "json",
		success: goodLoad,
		error: badLoad
	});
	$('.tableA').append("<tr><td>JSON call made</td></tr>");
}

$(document).ready(
	function() {
		apiCall();
	}
);