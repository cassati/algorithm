/**
	Bubble sort
**/
function bubble_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}
    
	var n = arr.length;
	for(var i=0; i<n; i++) {
		for(var j=0; j<n-i-1; j++) {
			if(arr[j] > arr[j+1]) {
    			var tmp = arr[j+1];
    			arr[j+1] = arr[j];
    			arr[j] = tmp;
			}
		}
	}
}

function test(arr, sort) {
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
test(a, bubble_sort);

var b = [5,4,6,2,1];
test(b, bubble_sort);

var c = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
}
test(c, bubble_sort);


