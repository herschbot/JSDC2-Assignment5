//Model code here

var count = {
	num: 50,
	color: function (){
		if (count.num > 100){
			return 'high';
		} else if (count.num < 0) {
			return 'low';
		} else {
			return 'med';
		}
	}
	
}

//View code here

function renderCount() {
	var source = $('#number-template').html();
	var template = Handlebars.compile(source);

	var currentNum = {
		number: count.num,
		color: count.color
	};
	var numOutput = template(currentNum);
	$('#count').html(numOutput);
}

//Controller
function setup() {
	renderCount();
	$('button').on('click',updateCount);
}

function updateCount() {
	var changeAmt;
	switch ($(this).attr('id')) {
		case 'minus10':
			changeAmt = -10;
			break;
		case 'minus1':
			changeAmt = -1;
			break;
		case 'zero':
			changeAmt = -count.num;
			break;
		case 'plus1':
			changeAmt = 1;
			break;
		case 'plus10':
			changeAmt = 10;
			break;
		default:
			changeAmt = 0;
	}
	count.num += changeAmt;
	renderCount();
}

$(document).ready(setup);