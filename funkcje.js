var login;
var haslo;

var dzisiaj = new Date();
		
var dzien = dzisiaj.getDate();
var miesiac = dzisiaj.getMonth()+1;
var rok = dzisiaj.getFullYear();

var data=dzien + "-" + miesiac + "-" + rok;

function ustawDate()
{
	document.getElementById('data').value= data;
}


function rejestracja()
{
		login=document.getElementById('login').value;
		haslo=document.getElementById('haslo').value;
		//alert(login);
		document.location="logowanie.html";
}
function logowanie()
{
		var login1=document.getElementById('login1').value;
		var haslo1=document.getElementById('haslo1').value;
	
		document.location='menu.html';
}


google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Jedzenie', 3000],
  ['Mieszkanie', 1000],
  ['Transport', 500],
  ['Ksiązki', 200],
  ['Dzieci', 100]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Wydatki', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}



