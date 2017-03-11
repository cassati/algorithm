/**
	Quick sort
**/
function quick_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}

	do_quick_sort(arr, 0, arr.length-1);
}

function do_quick_sort(arr, lo, hi) {
	if(lo >= hi) {
		return;
	}
	var j = partition(arr, lo, hi);
	do_quick_sort(arr, lo, j-1);
	do_quick_sort(arr, j+1, hi);
}

function partition(arr, lo, hi) {
	var i = lo;
	var j = hi + 1;
	var v = arr[lo];

	while(true) {
		while(arr[++i] < v) {
			if(i == hi) {
				break;
			}
		}

		while(v < arr[--j]) {
			if(j == lo) {
				break;
			}
		}

		if(i >= j) {
			break;
		}

		exch(arr, i, j);
	}

	exch(arr, lo, j);
	return j;
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


var a = [5,4,3,2,1];
test(a, quick_sort, true);

var b = [5,4,6,2,1];
test(b, quick_sort, true);

var c = [];
var d = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
	d[i] = c[i];
}
test(c, quick_sort);
