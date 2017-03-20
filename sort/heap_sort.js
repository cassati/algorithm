/**
	Heap sort
**/
function heap_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}

	var N = arr.length - 1;
	var half = parseInt(arr.length/2);
	for(var k = half; k > 0; k--) {
		sink(arr, k, N);
	}

	while(N > 1) {
		exch(arr, 1, N--);
		sink(arr, 1, N);
	}
}

function sink(arr, k, N) {
	while(2*k <= N) {
		var j = 2*k;
		if(j < N && arr[j] < arr[j+1]) {
			j++;
		}
		if(arr[k] >= arr[j]) {
			break;
		}
		exch(arr, j, k);
		k = j;
	}
}

function exch(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
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


var a = [-1, 5,4,3,2,1];
test(a, heap_sort, true);

var b = [-1, 5,4,6,2,1];
test(b, heap_sort, true);

var c = [];
var d = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
	d[i] = c[i];
}
test(c, heap_sort);
