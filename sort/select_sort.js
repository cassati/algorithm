/**
	Select sort
**/
function select_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}
	
	var n = arr.length;
	for(var i=0; i<n; i++) {
		var min = i;
		for(var j=i+1; j<n; j++) {
			if(arr[min] > arr[j]) {
				min = j;
			}
		}
		if(min != i) {
			var tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
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


var a = [5,4,3,2,1];
test(a, select_sort);

var b = [5,4,6,2,1];
test(b, select_sort);

var c = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
}
test(c, select_sort);

