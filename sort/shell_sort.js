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

function shell_sort2(arr) {
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
			var tmp = arr[i];
			for(var j=i-h; j>=0; j-=h) {
				if(tmp >= arr[j]) {
					break;
				}
				arr[j+h] = arr[j];
			}
			arr[j+h] = tmp;
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
test(a, shell_sort2, true);

var b = [7,6,5,4,6,2,1];
test(b, shell_sort2, true);

var n = 50000;
var c = [];
var d = [];
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
	d[i] = c[i];
}
test(c, shell_sort);
assertSorted(c);

test(d, shell_sort2);
assertSorted(d);

assertEqual(c, d);


var e = [];
for(var i=0; i<n; i++) {
	e[i] = n-i;
}
test(e, shell_sort);
assertSorted(e);

var f = [];
for(var i=0; i<n; i++) {
	f[i] = n-i;
}
test(f, shell_sort2);
assertSorted(f);

assertEqual(e, f);
