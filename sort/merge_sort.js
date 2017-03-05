/**
	Merge sort
**/
var aux = [];
function merge_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}

	aux = [];
	do_merge_sort(arr, 0, arr.length-1);
}

function do_merge_sort(arr, lo, hi) {
	if(lo >= hi) {
		return;
	}
	var mid = lo + parseInt((hi-lo)/2);
	do_merge_sort(arr, lo, mid);
	do_merge_sort(arr, mid+1, hi);
	do_merge(arr, lo, mid, hi);
}

/**
	Merge sort, bottom to up
**/
function merge_bu_sort(arr) {
	if(null == arr || arr.length == 0) {
		return;
	}

	aux = [];
	var N = arr.length;
	for(var sz=1; sz<N; sz=sz+sz) {
		for(var lo=0; lo<N-sz; lo+=sz+sz) {
			do_merge(arr, lo, lo+sz-1, Math.min(lo+sz+sz-1, N-1));
		}
	}

}

function do_merge(arr, lo, mid, hi) {
	var i = lo;
	var j = mid+1;

	for(var k=lo; k<=hi; k++) {
		aux[k] = arr[k];
	}

	for(var k=lo; k<=hi; k++) {
		if(i>mid) {
			arr[k] = aux[j++];
		}else if(j>hi) {
			arr[k] = aux[i++];
		}else if(aux[j] < aux[i]) {
			arr[k] = aux[j++]
		}else {
			arr[k] = aux[i++];
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
test(a, merge_sort, true);

var b = [5,4,6,2,1];
test(b, merge_sort, true);

var a = [5,4,3,2,1];
test(a, merge_bu_sort, true);

var b = [5,4,6,2,1];
test(b, merge_bu_sort, true);

var c = [];
var d = [];
var n = 50000;
for(var i=0; i<n; i++) {
	c[i] = parseInt(Math.random()*n);
	d[i] = c[i];
}
test(c, merge_sort);
test(d, merge_bu_sort);
