/**
	Insert sort
**/
function insert_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}
	
	var n = arr.length;
	for(var i=1; i<n; i++) {
		for(var j=i-1; j>=0; j--) {
			if(arr[j+1] < arr[j]) {
				var tmp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = tmp;
			}
		}
	}
}

function insert_sort2(arr) {
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


function assertSorted(arr) {
	for(var i=1; i<arr.length; i++) {
		if(arr[i-1] > arr[i]) {
			console.log('assertSorted: fail');
			return;
		}
	}
	console.log('assertSorted: success');
}

function assertEqual(a, b) {
	for(var i=0; i<n; i++) {
		if(a[i] !== b[i]) {
			console.log('assertEqual: fail');
			return;
		}
	}
	console.log('assertEqual: success');
}


var a = [7,6,5,4,3,2,1];
test(a, insert_sort2, true);

var b = [7,6,5,4,6,2,1];
test(b, insert_sort2, true);

var n = 50000;
var c = [];
var d = [];
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
	d[i] = c[i];
}
test(c, insert_sort);
assertSorted(c);

test(d, insert_sort2);
assertSorted(d);

assertEqual(c, d);


var e = [];
for(var i=0; i<n; i++) {
	e[i] = n-i;
}
test(e, insert_sort);
assertSorted(e);

var f = [];
for(var i=0; i<n; i++) {
	f[i] = n-i;
}
test(f, insert_sort2);
assertSorted(f);

assertEqual(e, f);

