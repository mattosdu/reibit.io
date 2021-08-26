// ============================================
// As of Chart.js v2.5.0
// http://www.chartjs.org/docs
// ============================================

var chart1   = document.getElementById('chart1').getContext('2d');
gradient1 = chart1.createLinearGradient(0, 0, 0, 650);
gradient1.addColorStop(0, 'rgba(255, 255,255, 1)');
gradient1.addColorStop(0.5, 'rgba(255, 255, 255, 0.27)');
gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)');

var chart2   = document.getElementById('chart2').getContext('2d');
gradient2 = chart2.createLinearGradient(0, 0, 0, 650);
gradient2.addColorStop(0, 'rgba(255, 255,255, 1)');
gradient2.addColorStop(0.5, 'rgba(255, 255, 255, 0.27)');
gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');

var chart3   = document.getElementById('chart3').getContext('2d');
gradient3 = chart3.createLinearGradient(0, 0, 0, 650);
gradient3.addColorStop(0, 'rgba(255, 255,255, 1)');
gradient3.addColorStop(0.5, 'rgba(255, 255, 255, 0.27)');
gradient3.addColorStop(1, 'rgba(255, 255, 255, 0)');

var chart4   = document.getElementById('chart4').getContext('2d');
gradient4 = chart4.createLinearGradient(0, 0, 0, 650);
gradient4.addColorStop(0, 'rgba(255, 255,255, 1)');
gradient4.addColorStop(0.5, 'rgba(255, 255, 255, 0.27)');
gradient4.addColorStop(1, 'rgba(255, 255, 255, 0)');

var chart5   = document.getElementById('chart5').getContext('2d');
gradient5 = chart5.createLinearGradient(0, 0, 0, 650);
gradient5.addColorStop(0, 'rgba(255, 255,255, 1)');
gradient5.addColorStop(0.5, 'rgba(255, 255, 255, 0.27)');
gradient5.addColorStop(1, 'rgba(255, 255, 255, 0)');

var chart6   = document.getElementById('chart6').getContext('2d');
gradient6 = chart6.createLinearGradient(0, 0, 0, 650);
gradient6.addColorStop(0, 'rgba(255, 255,255, 1)');
gradient6.addColorStop(0.5, 'rgba(255, 255, 255, 0.27)');
gradient6.addColorStop(1, 'rgba(255, 255, 255, 0)');

var data1  = {
    labels: [ '', '', '', '', '' ],
    datasets: [{
			backgroundColor: gradient1,
			pointBackgroundColor: 'transparent',
			borderWidth: 0,
			borderColor: 'transparent',
			data: [0, 95, 100, 95, 0]
    }]
};

var data2  = {
    labels: [ '', '', '', '', '' ],
    datasets: [{
			backgroundColor: gradient2,
			pointBackgroundColor: 'transparent',
			borderWidth: 0,
			borderColor: 'transparent',
			data: [0, 0, 0.5, 0, 0]
    }]
};

var data3  = {
    labels: [ '', '', '', '', '' ],
    datasets: [{
			backgroundColor: gradient3,
			pointBackgroundColor: 'transparent',
			borderWidth: 0,
			borderColor: 'transparent',
			data: [0, 0.5, 1, 0.5, 0]
    }]
};

var data4  = {
    labels: [ '', '', '', '', '' ],
    datasets: [{
			backgroundColor: gradient4,
			pointBackgroundColor: 'transparent',
			borderWidth: 0,
			borderColor: 'transparent',
			data: [0, 36, 40, 36, 0]
    }]
};

var data5  = {
    labels: [ '', '', '', '', '' ],
    datasets: [{
			backgroundColor: gradient5,
			pointBackgroundColor: 'transparent',
			borderWidth: 0,
			borderColor: 'transparent',
			data: [0, 26, 31.7, 26, 0]
    }]
};

var data6  = {
    labels: [ '', '', '', '', '' ],
    datasets: [{
			backgroundColor: gradient6,
			pointBackgroundColor: 'transparent',
			borderWidth: 0,
			borderColor: 'transparent',
			data: [0, 22, 26.7, 22, 0]
    }]
};

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		
		xAxes: [{
			display: false,
			gridLines: {
				color: 'rgba(255, 255, 255, 0.20)',
				lineWidth: 1
			}
			
		
		}],
		yAxes: [{
			
			ticks: {
			fontColor: 'white',
				beginAtZero: true,
				steps: 1,
				max: 100},
			gridLines: {	
				color: 'rgba(255, 255, 255, 0.18)',
				lineWidth: 1
			}
		}]
		
	},
	elements: {
		line: {
			tension: 0.3
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance1 = new Chart(chart1, {
    type: 'line',
    data: data1,
		options: options
});

var chartInstance2 = new Chart(chart2, {
    type: 'line',
    data: data2,
		options: options
});

var chartInstance3 = new Chart(chart3, {
    type: 'line',
    data: data3,
		options: options
});

var chartInstance4 = new Chart(chart4, {
    type: 'line',
    data: data4,
		options: options
});

var chartInstance5 = new Chart(chart5, {
    type: 'line',
    data: data5,
		options: options
});

var chartInstance6 = new Chart(chart6, {
    type: 'line',
    data: data6,
		options: options
});