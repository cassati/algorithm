/**
	Shell sort
**/
function shell_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}
	
	var n = arr.length;
	var h = 1;
	while(h < parseInt(n/3)) {
		h = h*3 + 1;
	}
	while(h>=1) {
		for(var i=h; i<n; i++) {
			for(var j=i-h; j>=0; j-=h) {
				if(arr[j+h] < arr[j]) {
					var tmp = arr[j+h];
					arr[j+h] = arr[j];
					arr[j] = tmp;
				}
			}
		}
		h = parseInt(h/3);
	}
}

function test(arr, sort, needPrintArray) {
	var startTime;
	var endTime;

	console.log('');
	if(needPrintArray) {
		console.log('Before sort: ' + arr.join(','));
	}
	
	startTime = new Date().getTime();
	sort(arr);
	endTime = new Date().getTime();
	
	if(needPrintArray) {
		console.log('After sort: ' + arr.join(','));
	}
	console.log('Time elapsed: ' + (endTime-startTime) + ' milseconds');
	console.log('');
}


var a = [7,6,5,4,3,2,1];
test(a, shell_sort);

var b = [7,6,5,4,6,2,1];
test(b, shell_sort);

var c = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
}
test(c, shell_sort);

