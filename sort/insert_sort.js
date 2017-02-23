/**
	Insert sort
**/
function insert_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}
	
	var n = arr.length;
	for(var i=1; i<n; i++) {
		var tmp = arr[i];
		for(var j=i-1; j>=0; j--) {
			if(tmp >= arr[j]) {
				break;
			}
			arr[j+1] = arr[j];
		}
		arr[j+1] = tmp;
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
test(a, insert_sort);

var b = [5,4,6,2,1];
test(b, insert_sort);

var c = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
}
test(c, insert_sort);

