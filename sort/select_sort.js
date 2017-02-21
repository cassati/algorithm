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

var a = [5,4,3,2,1];
console.log('Before sort: ' + a.join(','));
select_sort(a);
console.log('After sort: ' + a.join(','));

var b = [5,4,6,2,1];
console.log('Before sort: ' + b.join(','));
select_sort(b);
console.log('After sort: ' + b.join(','));

